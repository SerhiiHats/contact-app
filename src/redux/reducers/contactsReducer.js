import initialStore from "../initialStore.js";
import {createReducer} from "../utils.js";


export const contactsLoaded = (contacts) => ({
  type: "contacts/loaded",
  payload: contacts,
});

export const contactsLoading = () => ({
  type: "contacts/loading",
})


const contactsReducer = createReducer(
  initialStore,
  {
    "contacts/loaded": (store, action) => {
      return {
        ...store,
        contacts: action.payload,
        loading: false,
      }
    },

    "contacts/loading": (store, action) => {
      return {
        ...store,
        loading: true,
      }
    },

  }
);


export default contactsReducer;