import React from 'react'
import './SidebarOption.css'
function SidebarOption({ text, Icon}) {
  return (
    <div className='sidebaroption'>
        <Icon/>
        <h2>{text}</h2>
    </div>
  )
}

export default SidebarOption