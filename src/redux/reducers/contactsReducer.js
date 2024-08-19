import initialStore from "../initialStore.js";
import {createReducer} from "../utils.js";
import {client} from "../../api/nimble.js";


const contactsLoaded = (contacts) => ({
  type: "contacts/loaded",
  payload: contacts,
});

const contactsLoading = () => ({
  type: "contacts/loading",
});

export function fetchContacts() {
  return async (dispatch, getState) => {
    dispatch(contactsLoading());
    const results = await client.getContactList();

    const mappedResults = results.resources.map((contact) => (
      {
        id: contact.id,
        avatar_url: contact.avatar_url,
        fields: contact.fields,
        tags: contact.tags,
      }
    ));

    dispatch(contactsLoaded(mappedResults));
  }
}


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