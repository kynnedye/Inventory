import React, {useState, useEffect} from "react"
import useLocalStorage from "../hooks/useLocalStorage"
import { db } from "../firebase-config";

import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore"


const Context = React.createContext()

function ContextProvider({children}){
    
  const [item, setItem] = useState({
      name:"",
      count:0,
      used:0,
      wasted:0,
      
      
  })

const [updatedName, setUpdatedName] = useState("")
const [updatedCount, setUpdatedCount] = useState(0)
const [usedAmount, setUsedAmount] = useState(0)
const [wastedAmount, setWastedAmount] = useState(0)
const [list, setList]= useState([])
const [updatePage, setUpdatePage] = useState(true)

const listRef = collection(db, "list")

const createList = async () =>{
  await addDoc(listRef, {name:item.name, count:item.count, used:item.used, wasted: item.wasted})
  setUpdatePage(prev => !prev)
}
const deleteListItem = async (id) =>{
  const listDoc = doc(db ,"list", id)
  await deleteDoc(listDoc)
  setUpdatePage(prev => !prev)
}
const updateList = async (id, listDataName, updatedNum) => {
  const listDoc  = doc(db, "list", id)
  const newFields = { [listDataName]: updatedNum }
  await updateDoc(listDoc, newFields)
  setUpdatePage(prev => !prev)
}


useEffect(() => {
    const getList = () =>{
      try{
            
              
        getDocs(listRef)
            .then(data =>  setList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))))
            
        
       
    
    
   }catch(err){
   console.log(err)
   }
    }

  getList();
}, [updatePage]);

// const addToInventory = () =>{
//   setInventoryList(prev => {
//     [...prev, item]
//   })
// }
  
   
   

    const handleChange = (e) =>{
      let input = e.target.value
      setItem(prev => {

        return {
          ...prev,
          [e.target.name] : input}
      })
      console.log(item)
    }
    // const handleUpdateChange = (e, id) =>{
    //   const updatedArr = inventoryList.map(item =>{
    //     if(item.id === id){
         
    //       return {
    //         [e.target.name] : e.target.value
    //       }
    //     }
    //     return item
    //   })
    //   setInventoryList(updatedArr)
    // }
    
    // const removeItem = (id)=>{
    //    setInventoryList(prevItems => prevItems.filter(list => list.id !== id))
    // }


  
 

 
  //  const updateAmount = ( id, name , amount) =>{
  //   const updatedArr = inventoryList.map(item =>{
  //     if(item.id === id){
  //      return {...item, [name]: amount}
  //        }
  //        return item
  //      })
       
     
  //    setInventoryList(updatedArr)
  //  }



    return(
       < Context.Provider value={{
         item,
         setItem,
         handleChange,
         list,
         setList,
         deleteListItem,
         updatedCount,
         updatedName,
         setUpdatedName,
         setUpdatedCount,
         setUpdatePage,
         usedAmount,
         setUsedAmount,
         usedAmount,
         createList,
         wastedAmount,
         setWastedAmount,
         updateList
         
       }} >
            {children}
       </Context.Provider>
    )
}

export {Context, ContextProvider}