import React from 'react'
import './Editprofile.css'
const EditProfile = () => {
  return (
    <>
      <div id='Profile-page-header'>
        <img id='Profile-page-header-img' src="https://images.livemint.com/sso/newLogos/prod/ht_logo.svg?v2" alt="" />
      </div>
      <div id='Profile-page-header-2'>
        <div id='go'><i class="fa-solid fa-arrow-left"></i><span>Go Back</span></div>
        <div><h1 id='EditProfileH1'>Edit Profile</h1></div>
        <div id='profile-content'>
          <div className='edit-sec'><i class="fa-solid fa-pen"></i></div>
          <div className='edit-sec'></div>
          <div className='edit-sec'><i class="fa-solid fa-plus"></i></div>
          <div className='edit-sec'><i class="fa-solid fa-pen"></i></div>

        </div>

      </div>





    </>
  )
}

export default EditProfile
