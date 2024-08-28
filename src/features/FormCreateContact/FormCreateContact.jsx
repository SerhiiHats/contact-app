import {Paper} from "@mui/material";
import {useState} from "react";
import {prepareNewContact} from "./prepareNewContact.js";
import {client} from "../../api/nimble.js";
import {fetchContacts} from "../../redux/reducers/contactsReducer.js";
import {useDispatch} from "react-redux";


const initialEmptyContact = {
  firstName: "",
  lastName: "",
  email: "",
}


const FormCreateContact = () => {
  const [newContact, setNewContact] = useState(initialEmptyContact);
  const dispatch = useDispatch();

  const handleInput = (e, field) => {
    setNewContact({
      ...newContact,
      [field]: e.target.value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const contact = prepareNewContact(newContact);
    await client.createContact(contact);
    dispatch(fetchContacts());
    setNewContact(initialEmptyContact)
  }

  return (
    <Paper elevation={1} sx={{
      width: 280, ml: "auto", mr: "auto",
      "@media (min-width: 600px)": {
        mr: 0,
      },
    }}
    >
      <form className="form-add-contact" onSubmit={handleSubmit}>
        <h2>Create Contact</h2>

        <label className="area-input-text">
          <span>First Name</span>
          <input type="text" name="firstName"
                 value={newContact.firstName}
                 onChange={(e) => handleInput(e, "firstName")}
          />
        </label>

        <label className="area-input-text">
          <span>Last Name</span>
          <input type="text"
                 name="lastName"
                 value={newContact.lastName}
                 onChange={(e) => handleInput(e, "lastName")}
          />
        </label>

        <label className="area-input-text">
          <span>Email</span>
          <input type="email"
                 name="email"
                 value={newContact.email}
                 onChange={(e) => handleInput(e, "email")}
          />
        </label>

        <input className="submit" type="submit" name="submit" value="Add Contact"/>
      </form>
    </Paper>
  );
};

export default FormCreateContact;