import React from 'react'
import { Container } from 'react-bootstrap'

export default function SearchResults({query, bookSearch}) {
    console.log(bookSearch)
    
    
        let searchList = bookSearch.map( book => {
            return(
                <div className="d-flex flex-column w-50 justify-content-center mb-5 book-card">
                    <h2>{book.volumeInfo.title}</h2>
                    <p>{book.volumeInfo.authors}</p>
                    <img src={
                         book.volumeInfo.imageLinks === undefined
                         ? ""
                         : `${book.volumeInfo.imageLinks.thumbnail}`
                    }
                    />
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
