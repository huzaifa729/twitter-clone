// import { Avatar } from '@material-ui/core'
// import React from 'react'
// import './Post.css'
// import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
// import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
// import RepeatIcon from "@material-ui/icons/Repeat";
// import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
// import PublishIcon from "@material-ui/icons/Publish";

// function Post({displayName, username, verified, timestamp, text, image, avatar}) {
//   return (
//     <div className='post'>
//           <div className='post-avatar'>
//              <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"/>
//            </div>

//            <div className='post-body'>
//              <div className='post-header'>
//                <div className='post-headerText'>
//                  <h3>
//                    Huzaifa Dabir {" "} 
//                    <span className='post-headerSpecial'>
//                      <VerifiedUserIcon className="post-badge"/>
//                    </span>
//                  </h3>
//                </div>

//                <div className='discrption'>
//                  <p>I challenge you to build a twitter clone</p>
//                </div>
//              </div>
//              <img src="https://media3.giphy.com/media/65ATdpi3clAdiomZ239/giphy.gif" alt=""/>
          
//               <div className='post-footer'>
//               <ChatBubbleOutlineIcon fontSize="small" />
//             <RepeatIcon fontSize="small" />
//             <FavoriteBorderIcon fontSize="small" />
//             <PublishIcon fontSize="small" />
//               </div>
//            </div>
//     </div>
//   )
// }

// export default Post




import { Avatar } from '@material-ui/core'
import React, { forwardRef} from 'react'
import './Post.css'
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

const Post = forwardRef(({displayName, username, verified, text, image, avatar}, ref) => {
  return (
    <div className='post' ref={ref}>
          <div className='post-avatar'>
             <Avatar src={avatar}/>
           </div>

           <div className='post-body'>
             <div className='post-header'>
               <div className='post-headerText'>
                 <h3>
                   {displayName} {" "} 
                   <span className='post-headerSpecial'>
                    {verified && <VerifiedUserIcon className="post-badge"/>} @{username}
                   </span>
                 </h3>
               </div>

               <div className='discrption'>
                 <p>{text}</p>
               </div>
             </div>
             <img src={image} alt=""/>
          
              <div className='post-footer'>
              <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
              </div>
           </div>
    </div>
  )
});

export default Post