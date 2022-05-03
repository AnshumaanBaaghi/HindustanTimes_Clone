import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'

import '../fontawesome-free-6.0.0-web/fontawesome-free-6.0.0-web/css/all.css'



export const Navbar = () => {
  // const Navigate=useNavigate()
  return (
      <>
  <header id='header-1'>
      <div id='header-2'>
    
          <div className='header-3'>
              <div id='header-search'>
                  <span><i class="fa-solid fa-bars" style={{color:"grey"}}></i> <strong>Explore</strong></span>
                 
                  <div><span><i class="fa-solid fa-magnifying-glass" style={{color:"white"}}></i>
                  <strong>Search</strong></span>
                 </div>
              </div>
              <div id='free-trial-1'><p>Tuesday, May 03, 2022 New Delhi 37C</p><span><i class="fa-solid fa-cloud"></i></span></div>
          </div>
          <div className='header-3'>
            <img id='header-3-img'src="https://www.hindustantimes.com/res/images/ht-logo.svg" alt="" />
          </div>
          <div className='header-3'>
          <div id='header-search-2'>
                  <span><i class="fa-solid fa-gamepad"style={{color:"grey"}}></i> <strong>Games</strong></span>
                 
                  <div><span><i class="fa-regular fa-newspaper" style={{color:"white"}}></i>
                  <strong>E-Paper</strong></span> </div>
                
                 <div><span><i class="fa-solid fa-user-large"></i>
                  <strong>Sign-in</strong></span> </div>  </div>
                
            <div id='free-trial'><p>Start 15 Days Free Trial</p><button>Subscribe</button></div>
          </div>
      </div>
      </header>
      {/* /////////////////////////////////////////////////////////////////////////////// */}
      <div id='list-item'>
          <div id='list-item-2'>
        
          <div> <Link to="/" className='Link'>Home</Link>   </div>
     
        <div><Link to="/about" className='Link'>Latest</Link></div>
        <div><Link to="/India" className='Link'>India</Link></div>
        <div><Link to="/World" className='Link'>World</Link></div>
        <div><Link to="/Cities" className='Link'>Cities</Link></div>
        <div><Link to="/Entertainment" className='Link'>Entertainment</Link></div>
        <div><Link to="/Cricket" className='Link'>Cricket</Link></div>
        
        <div><Link to="/LifeStyle" className='Link'>Lifestyles</Link></div>
        <div><Link to="/Astrology" className='Link'>Astrology</Link></div>
        <div><Link to="/Editorials" className='Link'>Editorials</Link></div>
        <div><Link to="/ForYou" className='Link'>For You</Link></div>
        <div><Link to="/Saved" className='Link'>Saved</Link></div>

          </div>
      </div>
       </>
  );
};