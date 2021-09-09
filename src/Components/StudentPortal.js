import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import SlotDetails from './SlotDetails'
import { updateAvailSpecificStatus } from '../Actions/tAction'
import './StudentPortal.css'

const StudentPortal = ({availability, updateAvailSpecificStatus}) => {
    const [selection, setSelection] = useState({});

    useEffect(()=>{
        updateAvailSpecificStatus(selection);
    },[selection, updateAvailSpecificStatus])

    const updateSelection = (select) => {
        setSelection(select);
    }

    return (
        <div>
            <div className="teach_stat_box">
                <h3>Day</h3>
                <h3>Time</h3>
                <h3>Status</h3>
            </div>
            {availability.map(({id, day, time, status})=>
                <SlotDetails key={id} props={{id, day, time, status}} onUpdateSelection={updateSelection}/>
            )}
        </div>
    )
} 

const mapStateToProps = state => {
    return { availability: state.availability };
};

const mapDispatchToProps = (dispatch) => {
    return {
      updateAvailSpecificStatus: payload => dispatch(updateAvailSpecificStatus(payload))
    };
  }

const ExStudentPortal = connect(mapStateToProps,mapDispatchToProps)(StudentPortal);

export default ExStudentPortal;
