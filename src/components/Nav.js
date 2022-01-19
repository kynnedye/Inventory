import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Nav({setQuery, query, submit}) {
  
   
    
    return (
      <nav  className="navbar navbar-light bg-light border-bottom p-5">
      <p className="navbar-brand">FindBooks📚</p>
      <Link to="/"><p className="navbar-text">My Library</p></Link>
      <form onSubmit ={submit} className="form-inline d-flex justify-content-between w-50" >
        <input className="form-control" type="search" placeholder="Search" aria-label="Search" value={query} onChange={(e) => setQuery(e.target.value)} />
        
         
         <button className="btn bg-info text-white " type="submit" >Search</button>
        
        
         
        
      </form>
    </nav>
    )
}
