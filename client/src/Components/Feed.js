import React from 'react';
import Top_Contributor from './Top_Contributor';

import logo from './logo.jpeg';
import MessageSender from './MessageSender';
import Post from './Post';

const Feed = ()=>{
    return(
        <div className = 'feed' >
            <Top_Contributor />
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