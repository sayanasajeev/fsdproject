import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Add from './components/Add'
import Front from './components/Front'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      {/* <Front/> */}
      {/* <Home/> */}
      {/* <Add/> */}
      <Routes>
      <Route path='/v' element={ <Home/> }/>
      <Route path='/o' element={  <Add/>}/>
       <Route path='/' element={  <Front/> }/>
      </Routes>
    </>
  )
}

export default App
