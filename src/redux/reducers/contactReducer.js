import {createReducer} from "../utils.js";
import initialStore from "../initialStore.js";
import {client} from "../../api/nimble.js";

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

const contactLoading = () => ({
  type: "contact/loading",
});

export const contactClear = () => ({
  type: "contact/clear",
});

export function fetchContact(contactId) {
  return async (dispatch, getState) => {
    dispatch(contactLoading());
    const result = await client.getContactById(contactId);

    if (result.length) {
      const mappedResult = {
        id: result[0].id,
        avatar_url: result[0].avatar_url,
        fields: result[0].fields,
        tags: result[0].tags,
      }

      dispatch(contactLoaded(mappedResult))
    }
  }
}


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