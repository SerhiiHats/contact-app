export const prepareNewContact = (newContact) => {
  return {
    "avatar_url": "",
    "fields": {
      "email": [
        {
          "value": newContact.email
        }
      ],
      "first name": [
        {
          "value": newContact.firstName
        }
      ],
      "last name": [
        {
          "value": newContact.lastName
        }
      ]
    },
    "record_type": "person",
    "tags": "",
    "type": "person",
    "privacy":
      {
        "edit": null,
        "read": null
      },
    "owner_id": null,
  }
}