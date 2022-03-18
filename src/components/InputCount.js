import React, {useContext, useEffect} from 'react'
import { Form, Button } from 'react-bootstrap'
import { Context } from '../context/AppContext'
import CountForm from './CountForm'
import useComponentVisible from '../hooks/useComponentVisible'
export default function InputCount({inputName, button, setFunction, item, amount, setClicked, inputType}) {
    const { updateList } = useContext(Context)
    const { ref, isComponentVisible } = useComponentVisible(true)

    const closeButton = () =>{
        setClicked(prev => {
            return {...prev, [button]:false}
          })
    }
    useEffect(()=>{
        if(isComponentVisible !== true){
          setClicked({
          button1: false,
          button2: false,
          button3:false,
          button4:false
          })
        }
      }, [isComponentVisible])
   
    return (
            <div ref={ref}>
                    {isComponentVisible && <CountForm inputType={inputType} inputName ={inputName} item={item}  amount={amount} setFunction={setFunction} updateList={updateList} closeButton={closeButton}/>}
            </div>
        
            
    )
}
