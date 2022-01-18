import React from 'react'
import { Container } from 'react-bootstrap'

export default function SearchResults({query, bookSearch}) {
    console.log(bookSearch)
    let books = bookSearch.items
    
        let searchList = books.map( book => {
            return(
                <div className="d-flex flex-column w-50 justify-content-center mt-4">
                    <h2>{book.volumeInfo.title}</h2>
                    <p>{book.volumeInfo.authors}</p>
                    <img  className="mx-auto" src={book.volumeInfo.imageLinks.large}/>
                    
                </div>
                
                    
                
               
            )
        })

    

   
    return (
       <Container className="d-flex flex-column mt-4 mb-4" >
           <h4>Showing results for "{query}"</h4>
           <div className="d-flex flex-column align-items-center">
            {searchList}
           </div>
         
            
       </Container>
    )
}
