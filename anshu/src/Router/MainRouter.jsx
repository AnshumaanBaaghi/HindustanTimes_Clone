import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { BelowNavBar } from '../Components/styles'
import '../Components/common.css'
import { Sports } from '../Pages/Sports'
import { LifeStyle } from '../Pages/LifeStyle'
import { Astrology } from '../Pages/Astrology'
import { Editorial } from '../Pages/Editorial'
import { ForYou } from '../Pages/ForYou'
import { Home } from '../Pages/Home'
import { LeftSideNewsContainer } from '../Pages/LeftSideNewsContainer'
import { RightSideNewsContainer } from '../Pages/RightSideNewsContainer'
import { Entertainment } from '../Pages/Entertainment'
import { Latest } from '../Pages/Latest'
import { India } from '../Pages/India'
import { World } from '../Pages/World'
import { Cities } from '../Pages/Cities'
export const MainRouter = () => {
  return (
    <>
    <BelowNavBar id='BelowNavBar'>
      {/* <LeftSideNewsContainer/> */}
    <Routes>
        {/* <Route path='/' element={<Home/>}/> */}
        {/* <Route path='/' element={<Latest/>}/> */}
        {/* <Route path='/' element={<India/>}/> */}
        {/* <Route path='/' element={<World/>}/> */}
        {/* <Route path='/' element={<Cities/>}/> */}
        {/* <Route path='/' element={<Entertainment/>}/> */}
        {/* <Route path='/' element={<Sports/>}/> */}
        {/* <Route path='/' element={<LifeStyle/>}/> */}
        {/* <Route path='/' element={<Astrology/>}/> */}
        {/* <Route path='/' element={<Editorial/>}/> */}
        {/* <Route path='/' element={<ForYou/>}/> */}
    </Routes>
      {/* <RightSideNewsContainer/> */}
    </BelowNavBar>
    </>
  )
}
