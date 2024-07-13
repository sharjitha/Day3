import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Filim from './components/Filim'
import { Route,Routes } from 'react-router-dom'
import Add from './components/Add'

import Navbar from './components/Navbar'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="app">
     
     
    <h1 id="id1">MOVIE DATA</h1>
      
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Filim/>}> </Route> 
        <Route path='/add' element={<Add/>}> </Route> 
        
      </Routes>
      
      
      </div>
    </>
  )
}

export default App
