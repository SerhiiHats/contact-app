import {applyMiddleware, createStore} from "redux";
import rootReducer from "./rootReducer.js";
import initialStore from "./initialStore.js";
import {composeWithDevTools} from "@redux-devtools/extension";
import {thunk} from "redux-thunk";


const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(rootReducer, initialStore, composedEnhancer);

export default store;