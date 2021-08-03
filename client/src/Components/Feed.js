import React from 'react';
import TopContributor from './TopContributor';
import React, { useEffect, useState } from 'react'
import logo from './logo.jpeg';
import MessageSender from './MessageSender';
import Post from './Post';
import axios from '../axios'
import Pusher from 'pusher-js'
import db from '../firebase'

const pusher = new Pusher('257b0966bb93aca00a2f', {
    cluster: 'us3'
  })

const Feed = ()=>{
    const [profilePic, setProfilePic] = useState('')
    const [postsData, setPostsData] = useState([])

    // useEffect(() => {
    //     db.collection('posts').onSnapshot(snapshot => (
    //         setPostsData(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
    //     ))
    // }, [])

    const syncFeed = () => {
        axios.get('/retrieve/posts')
            .then((res) => {
                console.log(res.data)
                setPostsData(res.data)
            })
    }


    useEffect(()=>{
        const channel = pusher.subscribe('posts');
        channel.bind('inserted', function(data) {
        //   alert(JSON.stringify(data));
            syncFeed()
    });
    },[])

    useEffect(() => {
        syncFeed()
    }, [])

    return(
        <div className = 'feed' >
            <TopContributor />
            <MessageSender />
            

            {/* <Post 
            profilePic={logo}
            message='yo this is a message'
            timestamp='1601493943737'
            imgName='imgName'
            username='Harpreet Singh'

            /> */}
               
            {
                postsData.map(entry =>{
                    <Post 
                    profilePic={entry.avatar}
                    message={entry.txt}
                    timestamp={entry.imgName}
                    username={entry.user}
                    />
                })
            }
        </div>
    )
}

export default Feed;