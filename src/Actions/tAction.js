import { ADD_AVAIL_STATUS,BOOK_SLOT } from "../ActionConst/tConst"
export function addAvailStatus(payload){
    return {type: ADD_AVAIL_STATUS,payload}
}
export function bookslot(payload){
    return {type: BOOK_SLOT,payload}
}