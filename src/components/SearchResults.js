
import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { Prev } from 'react-bootstrap/esm/PageItem'
import noImg from "../images/No-image.png"

export default function SearchResults({query, bookSearch, setLibrary,library, setBookSearch}) {
    
        let addToLibrary = (book)=>{
           
            // adds new book to library
            let newLibrary = [...library, book]
            setLibrary(newLibrary)
            // adds in library property to see if book is already in library
           let updatedSearch = bookSearch.map( item =>{
                if(item.id === book.id){
                    return {...item, inLibrary:true}
                }
                return item
            })
            setBookSearch(updatedSearch)
        
           
        }
    
    
        let searchList = bookSearch.map( book => {
            return(
                <div key ={book.id}className="d-flex flex-column w-50 justify-content-center mb-5 book-card">
                    <h2>{book.volumeInfo.title}</h2>
                    <p>{book.volumeInfo.authors}</p>
                    <div className="img-container1">
                    <img src={
                         book.volumeInfo.imageLinks === undefined
                         ? `${noImg}`
                         : `${book.volumeInfo.imageLinks.thumbnail}`
                    }
                    />
                    <div className="overlay1">
                        <h3>Summary:</h3>
                        <p>{book.volumeInfo.description}</p>
                        {book.inLibrary ? "" : <Button variant="light" onClick={()=> addToLibrary(book)} className="add">Add to library</Button>}
                        

                    </div>
                    </div>
                   
                </div>
                
                    
                
               
            )
        })

    

   
    return (
       <Container className="d-flex flex-column mt-4 mb-4" >
           <h4>Showing results for "{query}"</h4>
           <div className="d-flex flex-column align-items-center mt-5">
            {searchList}
           </div>
         
            
       </Container>
    )
}
