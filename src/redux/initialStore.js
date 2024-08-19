const initialStore = {
  stateContacts: {
    contacts: [],
    loading: false,
  },

  stateContact: {
    contact: {
      avatar_url: "",
      tags: [],
      fields: {}
    },
    loading: false,
  },

}


export default initialStore;