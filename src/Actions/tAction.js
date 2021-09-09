import { ADD_AVAIL_STATUS, UPDATE_SPECIFIC_AVAIL_STATUS } from "../ActionConst/tConst"

export function addAvailStatus(payload){
    return {type: ADD_AVAIL_STATUS, payload}
}

export function updateAvailSpecificStatus(payload){
    return {type:UPDATE_SPECIFIC_AVAIL_STATUS, payload}
}