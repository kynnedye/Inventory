import React, {useState, useContext} from 'react'
import { OverlayTrigger, Popover, Button, Form } from 'react-bootstrap'
import { Context } from '../context/AppContext'


export default function Popup({item}) {
    
    const [hover, setHover] = useState(false)
    const {removeItem, handleChangeAmount, updateAmount, handleChangeName,updatedCount, updatedName, updateName, handleChangeUsed, updateUsed, usedAmount} = useContext(Context)
    const closeIcon = () =>{
        if(hover){
            return <Button  
                variant="danger" 
                size="sm" 
                onClick={()=> removeItem(item.id)}
                className="mr-5">X</Button>
        } else if(hover !== true){
            return ""
        }
    }

     const popoverName = (
        <Popover id="popover-basic">
          <Popover.Header as="h3">Change name?</Popover.Header>
          <Popover.Body>
           <Form>
               <Form.Group>
                   <Form.Label>Item name</Form.Label>
                   <Form.Control    
                   type="text" 
                   onChange={(e)=> handleChangeName(e)} 
                   name="name" 
                   value={updatedName}
                   placeholder="Coke..."/>
               </Form.Group>
               <Button type="submit" onClick={()=> updateName(item.id)}className="mt-2">Update</Button>
           </Form>
          </Popover.Body>
        </Popover>
      )
      const popoverCount = (
        <Popover id="popover-basic">
          <Popover.Header as="h3">Change amount?</Popover.Header>
          <Popover.Body>
           <Form>
               <Form.Group>
                   <Form.Label>New amount</Form.Label>
                   <Form.Control    
                    type="number" 
                    onChange={(e)=> handleChangeAmount(e)}
                    value = {updatedCount}
                    name="count" />
               </Form.Group>
               <Button type="submit" onClick={()=> updateAmount(item.id)}className="mt-2">Update</Button>
           </Form>
          </Popover.Body>
        </Popover>
      )
      const popoverUsed = (
        <Popover id="popover-basic">
          <Popover.Header as="h3">How many used?</Popover.Header>
          <Popover.Body>
           <Form>
               <Form.Group>
                   <Form.Label>Amount used</Form.Label>
                   <Form.Control 
                        type="number" 
                        onChange ={(e)=> handleChangeUsed(e)}
                        
                        value={usedAmount}
                        name="used" />
               </Form.Group>
               <Button type="submit" onClick = {()=> updateUsed(item.id)} className="mt-2">Update</Button>
           </Form>
          </Popover.Body>
        </Popover>
      )
      
      
      
     
    return (
        <>
             <tr key={item.name} onMouseEnter={()=> setHover(true)} onMouseLeave={()=> setHover(false)}>
            
            <td>    
            {closeIcon()}
                <OverlayTrigger trigger="click" rootClose placement="top" overlay={popoverName}>
                    <Button variant="outline-primary">{item.name}</Button>
                </OverlayTrigger>
            </td>
            <td> <OverlayTrigger rootClose trigger="click" placement="top" overlay={popoverCount}>
                    <Button variant="outline-primary">{item.count}</Button>
                </OverlayTrigger>
            </td>
            <td> <OverlayTrigger rootClose trigger="click" placement="top" overlay={popoverUsed}>
                    <Button variant="outline-primary">0</Button>
                </OverlayTrigger>
            </td>
            <td> {item.count}
            </td>
      </tr>
      
        
      
        </>
    )
 
}
