import {combineReducers} from 'redux'
import {quotesReducer as quotes} from './quoteReducer';

export default combineReducers({
    quotes
})