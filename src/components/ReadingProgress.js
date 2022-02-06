import React, {useContext} from 'react'
import { Context } from '../context/BookContext'
import { ProgressBar,Button } from 'react-bootstrap'
import useLocalStorage from '../hooks/useLocalStorage'
import GoalModal from './GoalModal'

export default function ReadingProgress() {
    const [numberOfBooks, setNumberOfBooks] = useLocalStorage("goal", 0)
    const [savedGoal, setSavedGoal] = useLocalStorage("reading",0)
    const {bookRead, bookLibrary} = useContext(Context)

    const bookAmount = bookLibrary.filter(book => book.isRead === true)
    const bookRatio = ((bookAmount.length-1)/savedGoal) * 100

    return (
        <div className="progress-container">
            <p>Reading progress:</p>
            <ProgressBar variant ="info"className="progress"now={ bookRatio} />
            <p>{bookRead}/{savedGoal}</p>
            <GoalModal setNumber ={setNumberOfBooks} number={numberOfBooks} saved={savedGoal} setSaved={setSavedGoal}/>

        </div>
    )
}
