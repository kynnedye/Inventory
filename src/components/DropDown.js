import { Button, Accordion, Card, useAccordionButton, Form } from 'react-bootstrap';
import React, {useState, useContext, useEffect} from 'react'
import InputCount from './InputCount';
import { Context } from '../context/AppContext'
import useComponentVisible from '../hooks/useComponentVisible';
import InputCardBody from './InputCardBody';





export default function DropDown({item}) {

  const [hover, setHover] = useState(false)
  const [clicked, setClicked] = useState({
      button1: false,
      button2: false,
      button3:false,
      button4:false
     
  })
  const { isComponentVisible } = useComponentVisible(true)


  
  
  const {deleteListItem,  setUpdatedName, updatedName, setUpdatedCount, setUsedAmount, updatedCount, usedAmount, wastedAmount, setWastedAmount } = useContext(Context)
    function CustomToggle({ children, eventKey }) {
        const decoratedOnClick = useAccordionButton(eventKey, () =>
          console.log('totally custom!'),
        );
      
        return (
          <Button
            
            variant={item.count < 10 ? "danger" : "primary"}
            onClick={decoratedOnClick}
          >
            {children}
          </Button>
        );
      }

      const closeIcon = () =>{
        if(hover !== true || clicked.button4 ){
          return ""
            
        } else if(hover){
          return <button
          
          onClick={()=> deleteListItem(item.id)}
          className="danger">X</button>
        }
    }

   
    
      let actualTotal = () =>{
        const used = parseInt(item.used)
        const count = parseInt(item.count)
        const wasted = parseInt(item.wasted)
        const added = wasted + used
        const finalTotal = count - added
        
        return finalTotal

      
      }
  
   
    return (
        <Accordion onMouseEnter={()=> setHover(true)} onMouseLeave={()=> setHover(false)} className="accordion">
          
        <Card>
          
          <Card.Header className="toggle-container">
            <div className="btn-container">
            {closeIcon()}
            {clicked.button4 !== true ? <Button className="name-btn"variant="secondary" onClick={()=> setClicked(prev =>{
                  return {...prev, button4:true}
                })}>{item.name}</Button> : 
                <InputCount 
                  setClicked ={setClicked}
                  amount ={updatedName} 
                  item={item} 
                  inputName="name" 
                  button="button4" 
                  inputType="text"
                  setFunction={setUpdatedName}/> }
            </div>
        
            <CustomToggle eventKey="0">{actualTotal()}</CustomToggle>
          </Card.Header>
          <Accordion.Collapse   eventKey="0">
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
          </Accordion.Collapse>
        </Card>
       
      </Accordion>
    );
  
    
}
