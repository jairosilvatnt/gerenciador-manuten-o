import React from "react"
import { Routes, Route } from "react-router-dom"

import Home from "./components/Home"
import Admin from "./components/Admin"
import Locations from "./components/Locations"
function App() {

  return (
  <Routes>      
    <Route path="/" element={<Home />}/>
    <Route path="/locations" element={<Locations />}/>
    <Route path="/admin" element={<Admin />}/>     
  </Routes> 
  )
}

export default App
