import React, {useContext} from "react"
import { Card, Button } from "react-bootstrap"
import InputCount from "./InputCount"
import { Context } from "../context/AppContext"
export default function InputCardBody({clicked, setClicked, item}){
    const {setUpdatedCount, setUsedAmount, updatedCount, usedAmount, wastedAmount, setWastedAmount } = useContext(Context)
    return(
        <Card.Body>
              <div className="count-container">
                <p>Current Count:</p>
                {clicked.button1 !== true ? <Button onClick={()=> setClicked(prev =>{
                  return {...prev, button1:true}
                })}>{item.count}</Button> : 
                <InputCount 
                  setClicked ={setClicked}
                  amount ={updatedCount} 
                  item={item} 
                  inputName="count" 
                  button="button1" 
                  inputType="number"
                  setFunction={setUpdatedCount}/> }
                
              </div>
              <div className="count-container">
                <p>Used:</p>
                {clicked.button2 !== true ? <Button onClick={()=> setClicked(prev =>{
                  return {...prev, button2:true}
                })}>{item.used}</Button> : 
                  <InputCount 
                    setClicked={setClicked} 
                    amount ={usedAmount}
                    item={item} 
                    inputName="used" 
                    button="button2" 
                    inputType="number"
                    setFunction={setUsedAmount}/>}
              </div>
              <div className="count-container">
                <p>Wasted:</p>
                {clicked.button3 !== true ? <Button onClick={()=> setClicked(prev =>{
                  return {...prev, button3:true}
                })}>{item.wasted}</Button> : 
                  <InputCount 
                    setClicked={setClicked} 
                    amount ={wastedAmount} 
                    item={item} 
                    inputName="wasted" 
                    setFunction={setWastedAmount}
                    inputType="number"
                    button="button3"/>}
              </div>
            </Card.Body>
    )
}