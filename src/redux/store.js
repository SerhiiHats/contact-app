import {createStore} from "redux";
import rootReducer from "./rootReducer.js";
import initialStore from "./initialStore.js";


const store = createStore(rootReducer, initialStore);

export default store;