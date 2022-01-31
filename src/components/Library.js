import React, {useState, useEffect} from 'react'
import { Button, Badge } from 'react-bootstrap'

import noImg from "../images/No-image.png"


export default function Library({setLibrary, library}) {
// change if book is read or not

const displayRead = (id) =>{
  let readArr = library.map(book =>{
    if(book.id === id){
      return {...book, isRead:true}
    }
    return book
  })
  setLibrary(readArr)
}

// remove book from library

const removeBook = (id) =>{
  setLibrary(prevBooks => prevBooks.filter(item => item.id !== id))
}
 
  
let libraryDisplay = library.map(book =>{
    return(
      
      <div className="library-slot" key ={book.id}>
          
        <div className="img-container" >
        {book.isRead ? <Badge bg="success" className="read">Read</Badge> : ""}
        <Button className="remove" variant="danger" size="sm" onClick={()=>{
          removeBook(book.id)
        }}>X</Button>
          
        <img src={
                         book.volumeInfo.imageLinks === undefined
                         ? `${noImg}`
                         : `${book.volumeInfo.imageLinks.thumbnail}`
                    }
                    />
          <div className="overlay d-flex flex-column align-items-center justify-content-center">
          {book.isRead ? "" :  <Button className= "mb-3 btn"variant="info" size ="sm" onClick={()=>displayRead(book.id)}>Finished?</Button> }
         
          <Button variant="light"  size ="sm">More..</Button> 
          </div>          
        </div>
     
          <p className="book-title">{book.volumeInfo.title}</p>
          <small>by {book.volumeInfo.authors[0]}</small>
          
      </div>
      )
      
       
    }) 
  

  
    let display = ()=>{
      if(library.length === 0){
        return <p className="text-center">You have no books in your library</p>
      } else{
        return libraryDisplay
      }
    }

    return (
        <>
         <h1 className="text-center text-white mb-4 bg-info border-bottom">Your Library </h1>
       
       <div className="library">
       {display()}
       
       
       </div>
      </>
    )
}
