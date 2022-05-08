import React from 'react'
import { useDispatch } from 'react-redux'
import { ProfileSideBar } from '../Redux/Action'
import './Sidebar.css'
// import '../fontawesome-free-6.0.0-web/css/all.css'
const Sidebar = ({ flag }) => {
  const dispatch = useDispatch()
  const CloseSideBar = () => {
    dispatch(ProfileSideBar(false))
  }
  return (
    <div id={flag ? "sidebar" : "sidebar2"}>
      <div style={{ textAlign: "right", color: "white", fontSize: "28px", padding: "5px 20px 0px 0px", backgroundColor: "#011e29" }}><i onClick={CloseSideBar} class="fas fa-times"></i></div>
      <div id='sidebar-1'>
        <div id='sidebar-img'>G</div>
        <h2 className='h23'>Gyan Prakash Mishra</h2>
        <div className='h23'>gyan12081997@gmail.com</div>
        <button id='btn'>Edit Profile</button>
      </div>
      <div id='sidebar-2'>
        <div className='input'>Start 15 Days Free Trial</div>
        <div className='input'>Saved Articles</div>
        <div className='input'>Following</div>
        <div className='input'>My Reads</div>
        <div className='input'>Sign out</div>
      </div>
    </div>
  )
}

export default Sidebar