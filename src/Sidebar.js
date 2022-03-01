import React from 'react'
import './Sidebar.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from "@material-ui/core";

function Sidebar() {
  return (
    <div className='sidebar'>
        <TwitterIcon className='sidebar-twitterIcon'/>

        <SidebarOption active Icon={HomeIcon} text="Home"/>
        <SidebarOption Icon={ExploreIcon} text="Explore"/>
        <SidebarOption Icon={CircleNotificationsIcon} text="Notification"/>
        <SidebarOption Icon={LocalPostOfficeIcon} text="Messages"/>
        <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks"/>
        <SidebarOption Icon={ListAltIcon} text="Lists"/>
        <SidebarOption Icon={PermIdentityIcon} text="Profile"/>
        <SidebarOption Icon={MoreHorizIcon} text="More"/>


        {/* <button variant="outlined" className='sidebar-tweet' fullWidth>Tweet</button> */}
    
       <Button ariant="outlined" className='sidebar-tweet'>Tweet</Button>
    </div>

  )
}

export default Sidebar