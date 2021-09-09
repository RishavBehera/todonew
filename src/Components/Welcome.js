import React,{useState} from 'react'
import Button from '../UI/Button'
import './Welcome.css'
import StudentPortal from './StudentPortal'
import TeacherPortal from './TeacherPortal'
const Welcome = () => {
    const [studentClick,setstudentClick]=useState(false);
    const [teacherClick,setTeacherClick]=useState(false);
    const studentHandler=()=>{
        setstudentClick(true);
        setTeacherClick(false);

    }
    const teacherHandler=()=>{
        setTeacherClick(true);
        setstudentClick(false);
    }
    return (
        <div className='welcome'>
            <header className='welcome__header'>
                <h1>Class Management</h1>
                <Button type='button' onClick={studentHandler}className=''>For Student</Button>
                <Button type='button' onClick={teacherHandler}className=''>For Teacher</Button>
                
            </header>
            {
                studentClick && <StudentPortal />
                
            }
            {
                teacherClick && <TeacherPortal click={teacherClick} />
            }
            
            
        </div>
    )
}

export default Welcome
