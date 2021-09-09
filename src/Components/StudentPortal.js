import { connect } from 'react-redux'
import './StudentPortal.css'

const StudentPortal = ({availability}) => {
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
        </div>
    )
} 

const mapStateToProps = state => {
    return { availability: state.availability };
};

const ExStudentPortal = connect(mapStateToProps)(StudentPortal);

export default ExStudentPortal;
