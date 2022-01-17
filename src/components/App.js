import React, {useState, useEffect} from "react"
import Nav from "./Nav"
import Library from "./Library"
import SearchResults from "./SearchResults"
import {Routes, Route} from "react-router-dom"





export default function App(){
    const [query, setQuery] = useState("")
    const [bookSearch, setBookSearch] = useState([])

    let url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyBTm3nxpXVcbzjgCRH-uoImiVKa951GZ9U`

    const searchBooks = (e)=>{
        e.preventDefault()
        try{
            fetch(url)
                .then(res => res.json())
                .then(data =>{
                    setBookSearch(data)
                })

        } catch(err){
            console.log(err)
        }
    }
   
   


  return(
      <>
        <Nav setQuery = {setQuery} query={query} submit={searchBooks}/>
        <Routes>
            <Route  
                exact path="/" 
                element={<Library/>}
                />
               
            <Route  
                path="/results" 
                element={<SearchResults query={query} bookSearch={bookSearch}/>} 
                />
             
           
        </Routes>
        
        
      </>
  )
}