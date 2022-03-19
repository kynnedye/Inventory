import React from 'react'
import { Form, Button } from 'react-bootstrap'

export default function CountForm({item, inputName, amount, updateList, setFunction, inputType, closeButton}) {
    return (
        <Form   key={item.id} className={`input-control ${inputType}`}>
        <Form.Control  onChange={(e)=> {
          setFunction(e.target.value)
          
        }}className="count-input"  type={inputType} name={inputName} value={amount}/>
        <Button 
            className="btn-margin form-btns"
            variant="success"
            onClick={()=> {
                updateList(item.id, inputName, amount)
                closeButton()
            }}
            size="sm">
                &#x2713;
            </Button>
       
      </Form>
    )
}
