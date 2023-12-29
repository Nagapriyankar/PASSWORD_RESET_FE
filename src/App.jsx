import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Reset from './components/Reset'
import Dashboard from './components/Dashboard'
import ValidateOtp from './components/ValidateOtp'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register/> } />
        <Route path='/' element={<Login/> } />
        <Route path='/reset' element={<Reset/> } />
        <Route path='/dashboard' element={<Dashboard/> } />
        <Route path='*' element={<Navigate to='/'/> } />
        <Route path='/validateOtp' element={<ValidateOtp/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App