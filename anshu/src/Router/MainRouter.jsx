import React from 'react'
import { Home } from '../Pages/Home'
import { Routes,Route } from 'react-router-dom'
import { BelowNavBar } from '../Components/styles'
import { LeftSideNewsContainer } from '../Pages/LeftSideNewsContainer'
import { RightSideNewsContainer } from '../Pages/RightSideNewsContainer'
export const MainRouter = () => {
  return (
    <>
    <BelowNavBar>
      <LeftSideNewsContainer/>
    <Routes>
        <Route path='/' element={<Home/>}/>
    </Routes>
      <RightSideNewsContainer/>
    </BelowNavBar>
    </>
  )
}
