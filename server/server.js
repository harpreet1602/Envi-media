import express from 'express';
import cors from 'cors';
import multer from 'multer';
import GridFsStorage from 'GridFsStorage';
import Grid from 'Grid';
import bodyParser from 'bodyParser';
import path from 'path';
import Pusher from 'Pusher';
import mongoose from 'mongoose';
import { resolve } from 'path/posix';

Grid.mongo = mongoose.mongo;

// app config
const app = express();
const port = process.env.PORT || 9000;

// middlewares
app.use(bodyParser.json());
app.use(cors());

// db config
const mongoURI = 'mongodb+srv://envi-media_client:1234567890@cluster0.ludr5.mongodb.net/envi-media-db?retryWrites=true&w=majority';


// for making the connection of the db
const con = mongoose.createConnection(mongoURI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true 
});
// grid file system
let gfs;
conn.once('open',() => {
    console.log('Db Connected');
    gfs = Grid(conn.db,mongoose.mongo);
    gfs.collection('images');
});

const storage = new GridFsStorage ({
    url: mongoURI,
    files: (req, file) =>{
        return new Promise((resolve, reject) => {
            const filename = `image-${Date.now()}${path.extname(file.originalname)}`;
            const fileInfo = {
                filename: filename,
                bucketname: 'images'
            };

            resolve(fileInfo);

        });
    }
});

const upload = multer ( {strorage});




mongoose.connect(mongoURI,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true 
})


// api routes
app.get('/',(req,res)=> res.status(200).send('hello world'));

app.post('/api/upload/image',upload.single('file'), (req,res) =>{
    res.status(201).send(req.file);
}






// listen

app.listen(port,()=>console.log(`listening on localhost:${port}`))

