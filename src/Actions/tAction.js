import { ADD_AVAIL_STATUS } from "../ActionConst/tConst"
export function addAvailStatus(payload){
    return {type: ADD_AVAIL_STATUS, payload}
}