import React, {useState, useEffect} from "react"
import useLocalStorage from "../hooks/useLocalStorage"
import { v4 as uuid } from 'uuid';


const Context = React.createContext()

function ContextProvider({children}){
    
  const [item, setItem] = useState({
      name:"",
      count:0,
      used:0,
      wasted:0,
      id:uuid()
      
  })
const [inventoryList, setInventoryList] = useLocalStorage("inventory",[])
const [updatedName, setUpdatedName] = useState("")
const [updatedCount, setUpdatedCount] = useState(0)
const [usedAmount, setUsedAmount] = useState(0)
const [wastedAmount, setWastedAmount] = useState(0)




const addToInventory = () =>{
  setInventoryList(prev => {
    [...prev, item]
  })
}
  
   
   

    const handleChange = (e) =>{
      let input = e.target.value
      setItem(prev => {

        return {
          ...prev,
          [e.target.name] : input}
      })
      console.log(item)
    }
    const handleUpdateChange = (e, id) =>{
      const updatedArr = inventoryList.map(item =>{
        if(item.id === id){
         
          return {
            [e.target.name] : e.target.value
          }
        }
        return item
      })
      setInventoryList(updatedArr)
    }
    
    const removeItem = (id)=>{
       setInventoryList(prevItems => prevItems.filter(list => list.id !== id))
    }

    const handleChangeAmount = (e)=>{
      setUpdatedCount(e.target.value)
    }
    const handleChangeName = (e)=>{
      setUpdatedName(e.target.value)
    }
    const handleChangeUsed = (e)=>{
      setUsedAmount(e.target.value)
      console.log(usedAmount)
    }
  
 

 
   const updateAmount = ( id, name , amount) =>{
    const updatedArr = inventoryList.map(item =>{
      if(item.id === id){
       return {...item, [name]: amount}
         }
         return item
       })
       
     
     setInventoryList(updatedArr)
   }



    return(
       < Context.Provider value={{
         item,
         setItem,
         inventoryList,
         setInventoryList,
         handleChange,
         addToInventory,
         removeItem,
         updateAmount,
         handleChangeAmount,
         handleChangeName,
         updatedCount,
         updatedName,
         setUpdatedName,
         setUpdatedCount,
         
         usedAmount,
         setUsedAmount,
         usedAmount,
         handleChangeUsed,
         wastedAmount,
         setWastedAmount,
         handleUpdateChange
         
       }} >
            {children}
       </Context.Provider>
    )
}

export {Context, ContextProvider}