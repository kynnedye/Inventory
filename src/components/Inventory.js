import React, {useContext} from 'react'
import { Card, Container, Button } from 'react-bootstrap'
import { Context } from '../context/AppContext'
import InputModal from './InputModal'
import Popup from './Popup'
import DropDown from './DropDown'




export default function Inventory() {
    
    const {inventoryList} = useContext(Context)

    const inventoryDisplay = inventoryList.map(item=>{
        return (    
            <DropDown key={item.id} item={item}/>
        )

    })
   
    return (
       <Container className="mt-5 page-box">
         <Card>
             <Card.Header className="card-head">
                 <h4>Inventory</h4>
                <InputModal />
             </Card.Header>
         </Card>
           {inventoryDisplay}
       </Container>
    )
}
