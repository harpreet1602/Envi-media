// import express from 'express';
// import cors from 'cors';
// import multer from 'multer';
// import GridFsStorage from 'GridFsStorage';
// import Grid from 'Grid';
// import bodyParser from 'bodyParser';
// import path from 'path';
// import Pusher from 'Pusher';
// import mongoose from 'mongoose';
// import { resolve } from 'path/posix';

// Grid.mongo = mongoose.mongo;

// // app config
// const app = express();
// const port = process.env.PORT || 9000;

// // middlewares
// app.use(bodyParser.json());
// app.use(cors());

// // db config
// const mongoURI = 'mongodb+srv://envi-media_client:1234567890@cluster0.ludr5.mongodb.net/envi-media-db?retryWrites=true&w=majority';


// // for making the connection of the db
// const con = mongoose.createConnection(mongoURI, {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true 
// });
// // grid file system
// let gfs;
// conn.once('open',() => {
//     console.log('Db Connected');
//     gfs = Grid(conn.db,mongoose.mongo);
//     gfs.collection('images');
// });

// const storage = new GridFsStorage ({
//     url: mongoURI,
//     files: (req, file) =>{
//         return new Promise((resolve, reject) => {
//             const filename = `image-${Date.now()}${path.extname(file.originalname)}`;
//             const fileInfo = {
//                 filename: filename,
//                 bucketname: 'images'
//             };

//             resolve(fileInfo);

//         });
//     }
// });

// const upload = multer ( {strorage});




// mongoose.connect(mongoURI,{
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true 
// })


// // api routes
// app.get('/',(req,res)=> res.status(200).send('hello world'));

// app.post('/api/upload/image',upload.single('file'), (req,res) =>{
//     res.status(201).send(req.file);
// }






// // listen

// app.listen(port,()=>console.log(`listening on localhost:${port}`))


require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const multer = require('multer')
const GridFsStorage = require('multer-gridfs-storage')
const Grid = require('gridfs-stream')
const bodyParser = require('body-parser')
const path = require('path')
const Pusher = require('pusher')
const { ReadStream } = require('fs')

const mongoPosts = require('./mongoPost')
const { timeStamp } = require('console')


Grid.mongo = mongoose.mongo

// app config
const app = express()
const port = process.env.PORT || 9000
const mongoURI = `mongodb+srv://admin:${process.env.MONGO_KEY}@cluster0.olebm.mongodb.net/fbdb?retryWrites=true&w=majority`

const pusher = new Pusher({
    appId: '1090476',
    key: `${process.env.PUSHER_KEY}`,
    secret: `${process.env.PUSHER_SECRET}`,
    cluster: 'us3',
    useTLS: true
  });

const conn = mongoose.createConnection(mongoURI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connect(mongoURI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.once('open', ()=> {
    console.log('DB connected')

    const changeStream = mongoose.connection.collection('posts').watch()

    changeStream.on('change', (change) => {
        console.log(change)

        if(change.operationType === 'insert') {
            console.log('trigger Pusher')

            pusher.trigger('posts', 'inserted', {
                change
            })
        } else {
            console.log('error triggering Pusher')
        }
    })
})

let gfs

conn.once('open', ()=> {
    console.log('DB connected')

    gfs = Grid(conn.db, mongoose.mongo)
    gfs.collection('images')
})

const storage = new GridFsStorage({
    url: mongoURI,
    file: (req, file ) => {
        return new Promise((resolve, reject) =>{{
            const filename = `image-${Date.now()}${path.extname(file.originalname)}`

            const fileInfo = {   
                filename: filename,
                bucketName: 'images'
            }
            resolve(fileInfo)
        }})
    }
})

const upload = multer({ storage })


// middleware
app.use(bodyParser.json())
app.use(cors())

// db config

//  api routes 
app.get('/', (req,res) => {
    res.status(200).send('Hello World')
})

app.post('/upload/image', upload.single('file'), (req,res) => {
    res.status(201).send(req.file)
    console.log(req.file)
})

app.post('/upload/post' , (req,res) => {
    const dbPost = req.body

    mongoPosts.create(dbPost, (err, data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})


app.get('/retrieve/image/single', (req,res) => {
    gfs.files.findOne({ filename: req.query.name }, (err, file) => {
        if(err) {
            res.status(500).send(err)
        } else {
            if (!file || file.length === 0) {
                res.status(404).json({ err: 'file not found' })
            } else {
                const readstream = gfs.createReadStream(file.filename)
                readstream.pipe(res)
            }
        }
    })
})

app.get('/retrieve/posts', (req,res) => {
    mongoPosts.find((err, data) => {
        if(err) {
            res.status(501).send(err)
        } else {
            data.sort((b,a) => {
                return a.timestamp - b.timestamp
            })
            res.status(200).send(data)
        }
    })
})

// listen
app.listen(port, () => console.log(`listening on localhost: ${port}`))


