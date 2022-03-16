// import React, { useState, useEffect } from 'react'
// import './Feed.css'
// import TweetBox from './TweetBox'
// import Post from './Post';
// import db from './firebase';

 
 
//   return (
//    <div className="feed">

//      <div className='feed-header'>
//       <h2>Home</h2>
//       </div>

//           <TweetBox />


//           <Post displayName="Huzaifa Dabir" username="HD" verified={true} text="YOO is Working" avatar="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" image="https://media3.giphy.com/media/65ATdpi3clAdiomZ239/giphy.gif"/>
       

//     </div>
//   )
// }

// export default 


import React, { useState, useEffect } from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post';
import db from "./firebase"
import FlipMove from 'react-flip-move';

function Feed() {
 
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    db.collection('posts').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map((doc) => doc.data()))
    )) 
  },[])
 
    
 
  return (
   <div className="feed">

     <div className='feed-header'>
      <h2>Home</h2>
      </div>

          <TweetBox />

        <FlipMove>
          {posts.map(post =>(
             <Post
             key = {post.text}
            displayName={post.displayName} 
           username={post.username}
           verified={post.verified} 
           text={post.text} 
           avatar={post.avatar}
           image={post.image}
       
          />
          ))}
          </FlipMove>
    </div>
  )
}

export default Feed



