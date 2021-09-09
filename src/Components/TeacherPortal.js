import React, {useState,useEffect,useMemo} from 'react'
import { addAvailStatus } from '../Actions/tAction';
import { connect } from 'react-redux';


const TeacherPortal = ({addAvailStatus, storeAvail}) => {
    const [day,setDay]=useState('');
    const [time,setTime]=useState('');
    const [availability,setAvailability]=useState([]);

    useMemo(()=>{
        setAvailability(storeAvail);
    },[storeAvail])

    useEffect(()=>{
       addAvailStatus(availability); 
    },[availability, addAvailStatus])
    

const dayHandler=(e)=>{
    setDay(e.target.value);

}
const timeHandler=(e)=>{
    setTime(e.target.value);

}
const onAddHandler = () => {
    setAvailability([...availability, {day, time, status:'Free-slot'}])
    setDay('');
    setTime('');
}
    return (
        
           
        // <Context.Provider value={availability}>
        <div>
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
            </div>
        // </Context.Provider>
    )
}

const mapStateToProps = state => {
    return { storeAvail: state.availability };
};

function mapDispatchToProps(dispatch) {
    return {
      addAvailStatus: payload => dispatch(addAvailStatus(payload))
    };
  }


  const ExTeacherPortal = connect(
    mapStateToProps,
    mapDispatchToProps
  )(TeacherPortal);
  

export default ExTeacherPortal
