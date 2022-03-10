import React from 'react'
import './TweetBox.css'
import { Avatar, Button } from "@material-ui/core";


function TweetBox() {
  return (
    <div className="tweetbox">
  
        <form>
            <div className='tweetbox-input'>
            <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"
             />      
            <input placeholder="What's happpening?" type="text" />
           </div>
           <input  className='tweetbox-imageInput' placeholder="Optional: Enter image url" type="text" />
            <Button className='tweetbtn'>Tweet</Button>
        </form>
        
      

    </div>


  )
}

export default TweetBox