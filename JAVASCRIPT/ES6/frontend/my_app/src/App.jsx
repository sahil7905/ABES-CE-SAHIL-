import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'
import Nav from './component/Nav'

function App() {
  
  return (
   <div>
    <Nav />
    <br />
    <Card name="mohan" edu="phd" />
   </div>
  )
}

export default App
