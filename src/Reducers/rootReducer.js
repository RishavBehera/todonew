import { ADD_AVAIL_STATUS } from "../ActionConst/tConst";

const initialState = {
    availability: []
}

const rootReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_AVAIL_STATUS:
            return {availability:action.payload}
    
        default:
            return state;
    }
}

export default rootReducer;