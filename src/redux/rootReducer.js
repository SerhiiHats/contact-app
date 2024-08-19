import {combineReducers} from "redux";
import contactsReducer from "./reducers/contactsReducer.js";
import contactReducer from "./reducers/contactReducer.js";

export default combineReducers({
  stateContacts: contactsReducer,
  stateContact: contactReducer,
});