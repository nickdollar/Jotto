import { combineReducers } from 'redux'
import success from './successReducer'
import guessedWord from './guessedWordsReducer'

export default combineReducers({
    
    success,
    guessedWord,
})

