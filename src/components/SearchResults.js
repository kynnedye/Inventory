import React from 'react'
import { Container } from 'react-bootstrap'
import noImg from "../images/No-image.png"

export default function SearchResults({query, bookSearch}) {
    console.log(bookSearch)
        let handleClick = (e)=>{
            console.log(e.target)
        }
    
    
        let searchList = bookSearch.map( book => {
            return(
                <div key ={book.id}className="d-flex flex-column w-50 justify-content-center mb-5 book-card">
                    <h2>{book.volumeInfo.title}</h2>
                    <p>{book.volumeInfo.authors}</p>
                    <div className="img-container">
                    <img src={
                         book.volumeInfo.imageLinks === undefined
                         ? `${noImg}`
                         : `${book.volumeInfo.imageLinks.thumbnail}`
                    }
                    />
                    <div className="overlay">
                        <h3>Summary:</h3>
                        <p>{book.volumeInfo.description}</p>
                        <button onClick={handleClick}className="add">Add to library</button>

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
