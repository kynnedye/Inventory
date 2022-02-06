import React, {useState, useEffect} from "react"
import useLocalStorage from "../hooks/useLocalStorage"

const Context = React.createContext()

function ContextProvider({children}){
    const [query, setQuery] = useState("")
    const [search, setSearch] = useLocalStorage("search", "")
    const [bookSearch, setBookSearch] = useLocalStorage("results",[])
    const [descriptionPage, setDescriptionPage] = useLocalStorage("page",[])
    const [bookLibrary, setBookLibrary] = useLocalStorage("library",[])
    const [bookRead, setBookRead] = useLocalStorage("read",0)

   
   

    let url = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyBTm3nxpXVcbzjgCRH-uoImiVKa951GZ9U`

    useEffect(()=>{
        const searchBooks = ()=>{
            try{
            
              
                 fetch(url)
                     .then(res => res.json())
                     .then(data => setBookSearch(data?.items || []))
                 
                
             
             
            }catch(err){
            console.log(err)
            }
        }
      
      searchBooks()
      
        

    },[search])

    const displayRead = (id) =>{
        let readArr = bookLibrary.map(book =>{
          if(book.id === id){
            return {...book, isRead:true}
          }
          return book
        })
        setBookLibrary(readArr)
        setBookRead(prev => prev + 1)
    }

      // remove book from library

    const removeBook = (book) =>{
        setBookLibrary(prevBooks => {prevBooks.filter(item => item.id !== book.id)})
        
    }

    
   



    return(
       < Context.Provider value={{
           query,
           setQuery,
           search,
           setSearch,
           bookSearch,
           setBookSearch,
           descriptionPage,
           setDescriptionPage,
           bookLibrary,
           setBookLibrary,
           bookRead,
           setBookRead,
           displayRead,
           removeBook
           
       }} >
            {children}
       </Context.Provider>
    )
}

export {Context, ContextProvider}