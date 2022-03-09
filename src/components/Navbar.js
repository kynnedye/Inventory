import React, {useContext} from 'react'
import { Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function Navbar() {

 

    return (
      <Nav  className="navbar navbar-light bg-light border-bottom p-2">
         <p className="navbar-brand inventory">InventoryCheck☑️</p>
    
      
      <NavDropdown title="Dropdown" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">My account</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Logout</NavDropdown.Item>
        
       
      </NavDropdown>
        
         
    </Nav>
    )
}
