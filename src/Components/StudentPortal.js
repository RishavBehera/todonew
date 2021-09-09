import React ,{useContext,useState} from 'react'
import TeacherPortal from './TeacherPortal'
import Context from '../Store/Context'
import SlotDetails from './SlotDetails'

const StudentPortal = () => {
    const ctx=useContext(Context);
    const [click,setClick]=useState(false);
    console.log(ctx);
    const clickHandler=()=>{
        setClick(true);
        return click;

    }

    


    return (
        <div>
            <TeacherPortal onClick={clickHandler}/>
        </div>
    )
}

export default StudentPortal
