import { ADD_AVAIL_STATUS,BOOK_SLOT } from "../ActionConst/tConst";

const initialState = {
    availability: []
}

const rootReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_AVAIL_STATUS:
            return {availability:action.payload}
        case BOOK_SLOT:
            const avail=state.availability;
            console.log(avail);
            // let updatedAvailabilityItem;
            avail.forEach((item,index)=>{
                console.log(index);
                if(index===action.payload){
                    item.status='BOOKED'
                }
            })
            return {availability:avail}
        default:
            return state;
    }
}

export default rootReducer;