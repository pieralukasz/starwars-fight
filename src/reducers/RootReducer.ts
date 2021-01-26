import { combineReducers } from 'redux'
import starwarsReducer from "./StarwarsReducer";

const RootReducer = combineReducers({
  starwars: starwarsReducer
})

export default RootReducer
