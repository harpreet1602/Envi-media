import React from 'react';
import StoryReel from './StoryReel';

import logo from './logo.jpeg';
import MessageSender from './MessageSender';
import Post from './Post';

const Feed = ()=>{
    return(
        <div className = 'feed' >
            <StoryReel />
            <MessageSender />

            <Post 
            profilePic={logo}
            message='yo this is a message'
            timestamp='1601493943737'
            imgName='imgName'
            username='Harpreet Singh'

            />
            {/* {
                postsData.map(entry =>{
                    <Post 
                    profilePic={entry.avatar}
                    message={entry.txt}
                    timestamp={entry.imgName}
                    username={entry.user}
                    />
                })
            } */}
        </div>
    )
}

export default Feed;