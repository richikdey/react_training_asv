import { combineReducers } from "redux";
import UserData from './Users-data-reducers'
import UserClicked from "./User-clicked-reducer";
import updateFieldReducer from "./update-field-reducer";
const allReducers = combineReducers({
   allUsers: UserData,
   UserClicked:UserClicked,
   UpdateField:updateFieldReducer
})

export default allReducers;