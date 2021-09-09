import React ,{useContext} from 'react'
import Teacher from './TeacherPortal'
import Context from '../Store/Context'
import SlotDetails from './SlotDetails'

const StudentPortal = () => {
    const ctx=useContext(Context);
    console.log(ctx);

    


    return (
        <div>
            {/* {
                details.map((slot)=>{
                   return <SlotDetails day={slot.day} time={slot.time} status={slot.status}/>
                   
                    

                })
                
            } */}
        </div>
    )
}

export default StudentPortal
