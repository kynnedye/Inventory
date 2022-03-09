import React,{useState, useContext} from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { Context } from '../context/AppContext';
import { v4 as uuid } from 'uuid'

export default function InputModal() {
   
const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { item,setItem, setInventoryList, handleChange, inventoryList} = useContext(Context)
  const handleSubmit = () =>{
   
    setInventoryList(prev => [...prev, item])
    setItem({name:"", count:0, id: uuid()})
    
    handleClose()
    console.log(inventoryList.id)
  }
  



  return (
    <>
      <Button className="add-btn" onClick={handleShow}>
        Add
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Form  onSubmit={handleSubmit}>
         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Item name</Form.Label>
            <Form.Control 
                required type="text" 
                placeholder="Coke.." 
                name="name" 
                value={item.name || ""} 
                onChange={(e)=> handleChange(e)}
                />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Current amount</Form.Label>
            <Form.Control 
                required 
                type="number" 
                name="count"
                value={item.count || ""} 
                onChange={(e)=> handleChange(e)}
                />
        </Form.Group>
       
         </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleSubmit}>Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
    
}
