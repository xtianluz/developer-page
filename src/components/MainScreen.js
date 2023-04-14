import React from 'react'
import { Home } from './Home'
import { NavBar } from './navbar/NavBar'
import Projects from './Projects'

const MainScreen = () => {
  return (
    <div name="mainscreen">
        <NavBar />
        <Home />
        <Projects />
    </div>
  )
}

export default MainScreen