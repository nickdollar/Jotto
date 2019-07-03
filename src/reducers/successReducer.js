import { actionTypes } from "../actions";

/**
 * @function
 * @param { array } state - Array of guessed words.
 * @param { object } state - action to be reduced.
 * @param { boolean } state - new success state.
 */
export default (state=false, action) =>{
    switch(action.type){
        case (actionTypes.CORRECT_GUESS):
            return true
        default:
            return state
    }
}