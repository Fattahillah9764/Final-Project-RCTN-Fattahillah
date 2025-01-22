import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/homepage'
import DetailPage from './pages/DetailPage'
import NavbarComponent from './component/NavbarComponent'
//import './App.css'

function App() {
  

  return (
    <>
      <NavbarComponent/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/detail/:id' element={<DetailPage/>}/>
      </Routes>
    </>
  )
}

export default App
