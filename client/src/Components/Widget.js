import React from 'react';
import './Widget.css';
const Widget = () =>{
    return(
        <div className='widgets'>
            {/* <iframe src="
            "
            width="340"
            height="1500"
            style={{border: "none", overflow: "hidden"}}
            scrolling="no"
            frameborder="0"
            allowTransparency="true"
            allow="encrypted-media"
            
            ></iframe> */}
        {/* <iframe src="
        https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FHarpreets1602%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
        width="340px"
         height="500px" 
         style={{border:"none",overflow:"hidden"}}
          scrolling="no" 
          frameborder="0" 
          allowfullscreen="true" 
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">

     
       >
          </iframe> */}
          <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FEnvi-Media-119333833669340&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
          width="340" 
          height="500" 
          style={{border:"none",overflow:"hidden"}}
           scrolling="no" 
           frameborder="0"
            allowfullscreen="true"
             allow="encrypted-media"></iframe>
        </div>
    );
}

export default Widget;