import { ADD_AVAIL_STATUS, UPDATE_SPECIFIC_AVAIL_STATUS } from "../ActionConst/tConst";

const initialState = {
    availability: []
}

const rootReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_AVAIL_STATUS:
            return {availability:action.payload}
        case UPDATE_SPECIFIC_AVAIL_STATUS:
            let updatedAvail = state.availability.map(item => item.id === action.payload.id ? {...item, status:false} : item)
            return {availability:updatedAvail}
        default:
            return state;
    }
}

export default rootReducer;