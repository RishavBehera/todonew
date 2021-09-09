import React from 'react'
import './SlotDetails.css'

const SlotDetails = (props) => {
    const {props: {id, day, time, status}, onUpdateSelection} = props

    // console.log(props)

    const bookSlotHandler = () => {
        onUpdateSelection({id, day, time, status});
    }

    return (
        <div className="teach_stat_box">
            <p>{day}</p>
            <p>{time}</p>
            <p>{status? 'Free-Slot': 'Booked'}</p> 

            {status ? <button onClick={bookSlotHandler}>Book</button> : <></>}  
        </div>
    )
}


  

export default SlotDetails;
