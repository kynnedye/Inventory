import React, {useState, useEffect} from "react"
import "../App.css"
import Navbar from "./Navbar"
import Login from "./Login"
import Inventory from "./Inventory"


import {Routes, Route, useNavigate} from "react-router-dom"



export default function App(){
    
  
  

  return(
      <>

        <Navbar/>  
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route path="/inventory" element={<Inventory/>}/>
        
       
             
           
        </Routes>
        
        
      </>
  )
}