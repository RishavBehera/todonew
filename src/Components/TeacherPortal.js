import React, {useState,useEffect,useMemo} from 'react'
import { addAvailStatus } from '../Actions/tAction';
import { connect } from 'react-redux';


const TeacherPortal = ({addAvailStatus, storeAvail}) => {
    const [id, setID] = useState(storeAvail.length + 1);
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
    
    const idHandler = (e)=> {
        const tID = parseInt(e.target.value);
        setID(tID);
    }

    const onAddHandler = () => {
        setAvailability([...availability, {id, day, time, status:true}])
        setDay('');
        setTime('');
        setID(storeAvail.length + 2);
    }
    
    return (
        <div>
            <input type="text" value={id} placeholder="Enter ID" onChange={idHandler}/>
            <input list="dayselect" value={day} onChange={dayHandler} placeholder="select day"/>
            <datalist id="dayselect">
                <option value="Mon"/>
                <option value="Tue"/>
                <option value="Wed"/>
                <option value="Thu"/>
                <option value="Fri"/>
                <option value="Sat"/>
                <option value="Sun"/>
            </datalist>
            <input list="timeselect" value={time} onChange={timeHandler} placeholder="select time"/>
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
