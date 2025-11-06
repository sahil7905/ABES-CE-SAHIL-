import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Menu from './components/Menu'


function App() {
  

  return (
    <>
      <div>
        <Nav/>
        <h2>Welcome TO Our Hotel</h2>
        <h3>Our Menu</h3>
        <p>
          {/* Menu items will go here */}
          <Menu imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAv_a9ADDswB38b7E2yD6iMSStTUWm5tiIOw&s" />

        </p>

      </div>
    </>
  )
}

export default App