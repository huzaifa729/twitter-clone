import React, { useState } from 'react'
import './TweetBox.css'
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase"

function TweetBox() {
  const [tweetMessage, SetTweetMessage] = useState('');
  const [tweetImage, SetTweetImage] = useState('');

  const sendTweet = e =>{
    e.preventDefault();

      db.collection('posts').add({
        displayName: 'Huzaifa Dabir' ,
        username: 'cleverAK',
        verified: true,
        text: tweetMessage,
        image: tweetImage,
        avatar: 'https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png'
      });

      SetTweetMessage("");
      SetTweetImage("");
  }

  return (
    <div className="tweetbox">
  
        <form>
            <div className='tweetbox-input'>
            <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"
             />      
            <input value={tweetMessage} onChange={e => SetTweetMessage(e.target.value)} placeholder="What's happpening?" type="text" />
           </div>
           
           <input value={tweetImage} onChange={e => SetTweetImage(e.target.value)}  className='tweetbox-imageInput' placeholder="Optional: Enter image url" type="text" />
           
            <Button type='submit' onClick={sendTweet} className='tweetbtn'>Tweet</Button>
        </form>
        
      

    </div>


  )
}

export default TweetBox