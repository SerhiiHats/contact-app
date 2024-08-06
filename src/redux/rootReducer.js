import {combineReducers} from "redux";
import contactsReducer from "./reducers/contactsReducer.js";

export default combineReducers({
  contacts: contactsReducer
});