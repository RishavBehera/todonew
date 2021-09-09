import React, {useState} from 'react'
import StudentPortal from './StudentPortal';
import Context from '../Store/Context'

const TeacherPortal = (props) => {
    const [day,setDay]=useState('');
    const [time,setTime]=useState('');
    const [availability,setAvailability]=useState([{
        day:'Mon',
        time:'10.30-11.30',
        status:'free-slot'
    },  
    {
        day:'Tue',
        time:'1.30-11.30',
        status:'free-slot'
    }  
     
]);
console.log(availability);
const dayHandler=(e)=>{
    setDay(e.target.value);

}
const timeHandler=(e)=>{
    setTime(e.target.value);

}
const onAddHandler = () => {
    setAvailability((prevdata)=>{
        return [...prevdata,{
            day:day,
            time:time,
            status:'Free-slot'
        }]
    })
    setDay('');
    setTime('');
}
    return (
        
           
            <Context.Provider value={availability
            }>
            <input list="dayselect" value={day} onChange={dayHandler}/>
            <datalist id="dayselect">
                <option value="Mon"/>
                <option value="Tue"/>
                <option value="Wed"/>
                <option value="Thu"/>
                <option value="Fri"/>
                <option value="Sat"/>
                <option value="Sun"/>
            </datalist>
            <input list="timeselect" value={time} onChange={timeHandler}/>
            <datalist id="timeselect">
        
                <option value="10.30-11.30"/>
                <option value="11.30-12.30"/>
                <option value="12.30-1.30"/>
                <option value="3.00-4.00"/>

            </datalist>
        
            <button type="button" onClick={onAddHandler}>Add Slot</button>
            </Context.Provider>
            
        
        

    )
}

export default TeacherPortal
