import React from 'react'

import noImg from "../images/No-image.png"


export default function Library({library}) {
  console.log(library)

  // not working saying it cant map because variable is undefined

  // let libraryDisplay = library.map(book =>{
  //   return(
      
  //     <div className="library-slot">
  //         <img src={
  //                        book.volumeInfo.imageLinks === undefined
  //                        ? `${noImg}`
  //                        : `${book.volumeInfo.imageLinks.thumbnail}`
  //                   }
  //                   />
  //         <p className="book-title">{book.volumeInfo.title}</p>
  //         <small>by {book.volumeInfo.authors[0]}</small>
  //     </div>
  //     )
      
       
  //   })  
    // let display = ()=>{
    //   if(library.length === 0){
    //     return <p>You have no books in your library</p>
    //   } else{
    //     {libraryDisplay}
    //   }
    // }

    return (
        <>
         <h1 className="text-center text-white mb-4 bg-info border-bottom">Your Library </h1>
       
       <div className="library">
       {/* {display()} */}
       
       
       </div>
      </>
    )
}
