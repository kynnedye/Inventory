import React from 'react'
import { Container } from 'react-bootstrap'

export default function SearchResults({query, bookSearch}) {
    console.log(bookSearch)
    let books = bookSearch.items
    
        let searchList = books.map( book => {
            return(
                
                    <h2>{book.volumeInfo.title}</h2>
                
               
            )
        })

    

   
    return (
       <Container className="d-flex flex-column mt-4 mb-4" >
           <h4>Showing results for "{query}"</h4>
          {searchList}
            
       </Container>
    )
}
