import {createReducer} from "../utils.js";
import initialStore from "../initialStore.js";

const initialContact = {
  avatar_url: "",
  tags: [],
  fields: {}
}


export const contactLoaded = (contact) => ({
  type: "contact/loaded",
  payload: contact,
});

export const contactUpdate = (contact) => ({
  type: "contact/updated",
  payload: contact,
});

export const contactLoading = () => ({
  type: "contact/loading",
});

export const contactClear = () => ({
  type: "contact/clear",
});

const contactReducer = createReducer(
  initialStore,
  {
    "contact/loaded": (store, action) => {
      return {
        ...store,
        contact: action.payload,
        loading: false,
      }
    },

    "contact/updated": (store, action) => {
      return {
        ...store,
        contact: action.payload,
        loading: false,
      }
    },

    "contact/loading": (store, action) => {
      return {
        ...store,
        loading: true,
      }
    },

    "contact/clear": (store, action) => {
      return {
        ...store,
        contact: initialContact,
        loading: false,
      }
    }

  }
);

export default contactReducer;