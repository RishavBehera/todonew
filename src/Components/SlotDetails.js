import React,{useState} from 'react'

const SlotDetails = (props) => {
    const [click,setClick]=useState(false);
    const clickHandler=()=>{
        setClick(true);
        props.onClick(click);
    }
    return (
        <div>
            <li>{props.day} {props.time} {props.status}</li>
            <button type="button" onClick={clickHandler}>{props.text}</button>
            
        </div>
    )
}

export default SlotDetails
