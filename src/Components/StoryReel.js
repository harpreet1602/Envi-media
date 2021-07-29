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
        title='Ashmeet Singh'
        />
        <Story
        image = {logo}
        profileSrc={logo}
        title='Ashmeet Singh'
        />
        <Story
        image = {logo}
        profileSrc={logo}
        title='Ashmeet Singh'
        />
    </div>
    );
}
export default StoryReel;