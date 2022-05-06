import { Routes,Route, useNavigate } from 'react-router-dom'
import { Navbar } from '../Component/Navbar'
import Sidebar from '../Component/Sidebar'
import Home from '../Pages/Home'
// import React, { useEffect } from 'react'


const MainRoute = () => {

  return (
    <div>
  
      <Navbar/>
      <Routes>
          <Route path='/' default element={<Home/>}/>
          <Route path='Home'  element={<Home/>}/>
          {/* <Route path='about' element={<About/>}/>
          <Route path='login/*' element={<Login/>}>

          <Route path='SignIn' element={ <SignIn/>}/>
         <Route path='SignUp' element={<SignUp/>}/>
         <Route path='Google' element={ <Google/>}/>
            </Route> */}
            {/* <Route path="Counter/:initialCount" element={<Counter/>}/> */}
            <Route path='Navbar/*' element={<Navbar/>}>
            <Route path=':id' element={<Sidebar/>}/>
              </Route>
          
        
      </Routes>
     
    
      
    </div>
  )
}

export default MainRoute
