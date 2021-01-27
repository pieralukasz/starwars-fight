import { combineReducers } from 'redux'
import StarwarsReducer from "./StarwarsReducer";

const RootReducer = combineReducers({
  starwars: StarwarsReducer
})

export default RootReducer
