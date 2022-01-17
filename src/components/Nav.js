import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Nav({setQuery, query, submit}) {
    return (
      <nav onSubmit={submit} className="navbar navbar-light bg-light border-bottom p-5">
      <a className="navbar-brand">FindBooks📚</a>
      <form className="form-inline d-flex justify-content-between w-50" >
        <input className="form-control" type="search" placeholder="Search" aria-label="Search" value={query} onChange={(e) => setQuery(e.target.value)} />
        <Link to ="/results">
          <button className="btn bg-info text-white " type="submit">Search</button>
        </Link>
      </form>
    </nav>
    )
}
