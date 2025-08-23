import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUp from './SignUp'
import LogIn from './LogIn'
import Nav from './Nav'
import Home from './Home'
import AxiosApi from './AsiosApi'
import ProtectedRoute from './Protected'

import { Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/pr' element={
            <ProtectedRoute>
              <ProtectedRoute />
            </ProtectedRoute>
          }></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/login' element={<LogIn />}></Route>
          <Route path='/axiosapi' element={<AxiosApi />}></Route>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
