import { connect } from 'react-redux'
import { bookslot } from '../Actions/tAction'
import './StudentPortal.css'

const StudentPortal = ({availability,findIndex}) => {
    const bookSlot=()=>{
        const index=0;
        bookslot(index);
    }
    return (
        <div>
            <div className="teach_stat_box">
                <h3>Day</h3>
                <h3>Time</h3>
                <h3>Status</h3>
            </div>
            {availability.map(({day, time, status}, index)=>
                <div key={index} className="teach_stat_box">
                    <p>{day}</p>
                    <p>{time}</p>
                    <p>{status}</p>   
                </div>
            )}
            <button type="button" onClick={bookSlot}>BOOK</button>
        </div>
    )
} 

const mapStateToProps = state => {
    return { availability: state.availability };
};
const mapDispatchToProps = dispatch => {
    return {bookslot:payload => dispatch(bookslot(payload))};

}

const ExStudentPortal = connect(mapStateToProps,mapDispatchToProps)(StudentPortal);

export default ExStudentPortal;
