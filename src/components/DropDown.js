import { Button, Accordion, Card, useAccordionButton, Form } from 'react-bootstrap';
import React, {useState, useContext} from 'react'
import InputCount from './InputCount';
import { Context } from '../context/AppContext'




export default function DropDown({item}) {

  const [hover, setHover] = useState(false)
  const [clicked, setClicked] = useState({
      button1: false,
      button2: false,
      button3:false
  })
  const {removeItem, setUpdatedCount, setUpdatedName, setUsedAmount, updatedCount, usedAmount, wastedAmount, setWastedAmount  } = useContext(Context)
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
        if(hover){
            return <Button  
                variant="danger" 
                size="sm" 
                onClick={()=> removeItem(item.id)}
                className="danger">X</Button>
        } else if(hover !== true){
            return ""
        }
    }

   
    
      let actualTotal = () =>{
        const used = parseInt(item.used)
        const count = parseInt(item.count)
        const wasted = parseInt(item.wasted)
        let added = wasted + used
        return count - added
       
      }
  
   
    return (
        <Accordion onMouseEnter={()=> setHover(true)} onMouseLeave={()=> setHover(false)} className="accordion">
          
        <Card>
          
          <Card.Header className="toggle-container">
            <div className="btn-container">
            {closeIcon()}
            <Button variant="secondary">{item.name}</Button>
            </div>
          
            <CustomToggle eventKey="0">{actualTotal()}</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
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
                    button="button3"/>}
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
       
      </Accordion>
    );
  
    
}
