import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div>
        <div id='sidebar'>
            <div id='sidebar-1'>
               <div id='sidebar-img'>G</div>
                <h2>Gyan Prakash Mishra</h2>
                <h3>gyan12081997@gmail.com</h3>
                <button id='btn'>Edit Profile</button>
            </div>
            <div id='sidebar-2'>
                <input type="text"  placeholder='Start 15 Days Free Trial'/>
                <input type="text" placeholder='Saved Articles' />
                <input type="text" placeholder='Following' />
                <input type="text" placeholder='My Reads'/>
                <input type="text" placeholder='Sign out'/>
            </div>

        </div>
      
    </div>
  )
}

export default Sidebar