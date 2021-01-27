import { combineReducers } from 'redux'
import StarwarsReducer from "./StarwarsReducer";
import SelectReducer from "./SelectReducer";

const RootReducer = combineReducers({
  starwars: StarwarsReducer,
  select: SelectReducer
})

export default RootReducer
