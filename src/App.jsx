import React from 'react'

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Videos from './components/Videos'
import Rules from './components/Rules'
import Duelists from './components/Duelists'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Videos" element={<Videos />} />
      <Route path="/Rules" element={<Rules />} />
      <Route path="/Duelists" element={<Duelists />} />
    </Routes>
    </>
  )
}

export default App
