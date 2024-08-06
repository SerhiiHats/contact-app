import initialStore from "../initialStore.js";

const contactsReducer = (contacts = initialStore.contacts, action) =>{
  switch (action.type){

    default: {
      return contacts
    }
  }


}

export default contactsReducer;