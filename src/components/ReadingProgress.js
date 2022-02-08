import React, {useContext} from 'react'
import { Context } from '../context/BookContext'
import { ProgressBar,Button } from 'react-bootstrap'

import GoalModal from './GoalModal'

export default function ReadingProgress() {
   
    const {bookRead, setBookRead, setNumberOfBooks, numberOfBooks,savedGoal, setSavedGoal} = useContext(Context)

   
    const bookRatio = (bookRead/savedGoal) * 100

    // resets the reading goal

    const resetGoal = ()=>{
        setSavedGoal(0)
        setBookRead(0)
        window.location.reload()
    }
    const checkIfComplete = () =>{
        if(savedGoal === bookRead){
            return <p>Good job you completed your goal!!🎉</p>
        }else {
            return <p>Reading goal :</p>
        }
    }

    return (
        <div className="progress-container">
            {savedGoal > 0 ? checkIfComplete() : <p>No reading goal set</p> }
            
            <ProgressBar variant ="info"className="progress"now={ bookRatio} />
            <p>{bookRead}/{savedGoal}</p>
            <GoalModal setNumber ={setNumberOfBooks} number={numberOfBooks} saved={savedGoal} setSaved={setSavedGoal}/>
           
            {savedGoal > 0 ?    
                 <Button className="reset"variant="danger" onClick={resetGoal}>Reset</Button>: ""
                 }

        </div>
    )
}
