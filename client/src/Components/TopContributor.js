import React from 'react';
import Story from './Story';
import logo from './logo.jpeg';
import './TopContributor.css';
let TopContributor = ()=>{
    return(
    <div className='Top_Contributor'>
        {/* story >> img, profilepic, title */}
        <Story
        image = "https://cdn-web.heartfulness.org/en/wp-content/uploads/2019/05/13114730/environment-need-fromyou-img.jpg"
        profileSrc={logo}
        title=' Andrew '
        
        />
        <Story
        image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYDiTa86vzKmrMM3beKK5YCmtZHo0XpdIMHukOuemZT_ldiNCFXjWfkM-1SjLMTeMzRis&usqp=CAU"
        profileSrc={logo}
        title='Enda Wilson'
        />
        <Story
        image = "https://images.theconversation.com/files/187794/original/file-20170927-24149-i6vsca.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
        profileSrc={logo}
        title='James Bond '
        />
         {/* <Story
        image = {logo}
        profileSrc={logo}
        title='User 4'
        />  */}
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
export default TopContributor;