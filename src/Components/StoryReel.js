import React from 'react';
import Story from './Story';
import logo from './logo.jpeg';
import './StoryReel.css';
let StoryReel = ()=>{
    return(
    <div className='storyReel'>
        {/* story >> img, profilepic, title */}
        <Story
        image = {logo}
        profileSrc={logo}
        title='User 1'
        
        />
        <Story
        image = {logo}
        profileSrc={logo}
        title='User 2'
        />
        <Story
        image = {logo}
        profileSrc={logo}
        title='User 3'
        />
          {/* <Story
        image = {logo}
        profileSrc={logo}
        title='User 4'
        /> */}
         {/* <Story
        image = {logo}
        profileSrc={logo}
        title='User 4'
        /> */}
         {/* <Story
        image = {logo}
        profileSrc={logo}
        title='User 4'
        /> */}
         {/* <Story
        image = {logo}
        profileSrc={logo}
        title='User 4'
        /> */}
    </div>
    );
}
export default StoryReel;