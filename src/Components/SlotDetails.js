import React from 'react'

const SlotDetails = (props) => {
    return (
        <div>
            <li>{props.day} {props.time} {props.status}</li>
            <button type="button">Book</button>
            
        </div>
    )
}

export default SlotDetails
