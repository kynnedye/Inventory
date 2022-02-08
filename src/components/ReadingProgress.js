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
    }

    return (
        <div className="progress-container">
            {savedGoal > 0 ? <p>Reading progress:</p> : <p>No reading goal set</p> }
            
            <ProgressBar variant ="info"className="progress"now={ bookRatio} />
            <p>{bookRead}/{savedGoal}</p>
            <GoalModal setNumber ={setNumberOfBooks} number={numberOfBooks} saved={savedGoal} setSaved={setSavedGoal}/>
           
            {savedGoal > 0 ?    
                 <Button className="reset"variant="danger" onClick={resetGoal}>Reset</Button>: ""
                 }

        </div>
    )
}
