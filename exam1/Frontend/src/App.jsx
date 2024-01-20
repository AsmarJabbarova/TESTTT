import { useState } from 'react'
import { Outlet } from "react-router-dom";
import './App.css'
import Navbar from './pages/Navbar/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <Navbar/>
 <Outlet/>
    </>
  )
}

export default App
