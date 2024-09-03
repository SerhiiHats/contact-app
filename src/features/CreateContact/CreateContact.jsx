import {Button, InputLabel, Paper, TextField, Typography} from "@mui/material";
import {useState} from "react";
import {CircularProgress} from "@mui/material";
import {prepareNewContact} from "./prepareNewContact.js";
import {client} from "../../api/nimble.js";
import {fetchContacts} from "../../redux/reducers/contactsReducer.js";
import {useDispatch} from "react-redux";


const initialNewContact = {
  "firstName": "",
  "lastName": "",
  "email": "",
};


const CreateContact = () => {
  const [clickAddContact, setClickAddContact] = useState(false)
  const [newContact, setNewContact] = useState(initialNewContact);
  const dispatch = useDispatch();

  const styleLabel = {
    color: "inherit",
    px: "6px",
    fontWeight: 400,
  };

  const styleInput = {
    color: "inherit",
    borderRadius: "8px",
    mb: 2,
  };

  const handleOnChange = (e) => {
    setNewContact(newContact => (
      {
        ...newContact,
        [e.target.name]: e.target.value
      }
    ))
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setClickAddContact(true);
    const contact = prepareNewContact(newContact);
    await client.createContact(contact);
    dispatch(fetchContacts());
    setNewContact(initialNewContact);
    setClickAddContact(false);
  }

  return (
    <Paper elevation={0} sx={{
      width: 280, ml: "auto", mr: "auto",
      "@media (min-width: 600px)": {
        mr: 0,
      },
    }}
    >
      <Typography sx={{fontSize: 20, mb: 2}}>CreateContact</Typography>
      <form onSubmit={handleSubmit}>
        <InputLabel sx={styleLabel} shrink htmlFor="input-create-firstName">First Name</InputLabel>
        <TextField sx={styleInput} name="firstName" fullWidth type="text" id="input-create-firstName"
                   value={newContact.firstName}
                   onChange={handleOnChange}
        />
        <InputLabel sx={styleLabel} shrink htmlFor="input-create-lastName">Last Name</InputLabel>
        <TextField sx={styleInput} name="lastName" fullWidth type="text" id="input-create-lastName"
                   value={newContact.lastName}
                   onChange={handleOnChange}
        />
        <InputLabel sx={styleLabel} shrink htmlFor="input-create-email">Email</InputLabel>
        <TextField sx={styleInput} name="email" fullWidth type="email" id="input-create-email"
                   value={newContact.email}
                   onChange={handleOnChange}
        />
        <Button type="submit"
                disabled={clickAddContact}
                fullWidth sx={{height: 44, textTransform: "capitalize", fontSize: 16, mt: 1}} color="third"
                variant="outlined">
          {!clickAddContact ? "Add Contact" : (
            <>
              <CircularProgress size={24} sx={{mr: 1}}/>
              <Typography component="span">Save</Typography>
            </>)}
        </Button>
      </form>
    </Paper>
  );
};

export default CreateContact;