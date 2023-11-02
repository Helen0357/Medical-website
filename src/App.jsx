import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import CreateAccount from './pages/CreateAccount'
import Login from './pages/Login'

function App() {

  return (

 <Routes>
  
  <Route path='/' element={<MainPage />} />
  <Route path='/create_account' element={<CreateAccount />} />
  <Route path='/login' element={<Login />} />

 </Routes>
 
  )
}

export default App
