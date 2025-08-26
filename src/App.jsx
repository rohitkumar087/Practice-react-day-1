import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUp from './SignUp'
import LogIn from './LogIn'
import Nav from './Nav'
import Home from './Home'
import Data from './Data'
import ProtectedRoute from './Protected'
import Counter from './Counter'

import { Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/login' element={<LogIn />}></Route>
          <Route path='/data' element={<ProtectedRoute>
            <Data/>
          </ProtectedRoute>}></Route>
          <Route path='/counter' element={<Counter/>}></Route>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
