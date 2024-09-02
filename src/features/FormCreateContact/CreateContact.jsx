import {Button, InputLabel, Paper, TextField, Typography} from "@mui/material";
import {useState} from "react";
import {CircularProgress} from "@mui/material";


const CreateContact = () => {
  const [clickAddContact, setClickAddContact] = useState(false)

  const styleLabel = {
    color: "inherit",
    px: "6px",
    fontWeight: 400,
  }

  const styleInput = {
    color: "inherit",
    borderRadius: "8px",
    mb: 2,
  }

  return (
    <Paper elevation={0} sx={{
      width: 280, ml: "auto", mr: "auto",
      "@media (min-width: 600px)": {
        mr: 0,
      },
    }}
    >
      <Typography sx={{fontSize: 20, mb: 2}}>
        CreateContact
      </Typography>
      <InputLabel sx={styleLabel} shrink htmlFor="input-create-firstName">
        First Name
      </InputLabel>
      <TextField sx={styleInput} name="firstName" fullWidth type="text" id="input-create-firstName"/>
      <InputLabel sx={styleLabel} shrink htmlFor="input-create-lastName">
        Last Name
      </InputLabel>
      <TextField sx={styleInput} name="lastName" fullWidth type="text" id="input-create-lastName"/>
      <InputLabel sx={styleLabel} shrink htmlFor="input-create-email">
        Email
      </InputLabel>
      <TextField sx={styleInput} name="email" fullWidth type="email" id="input-create-email"/>

      <Button
        onClick={() => setClickAddContact(true)}
        disabled={clickAddContact}
        fullWidth sx={{height: 44, textTransform: "capitalize", fontSize: 16, mt: 1}} color="third" variant="outlined">
        {!clickAddContact ? "Add Contact" : (
          <>
            <CircularProgress size={24} sx={{mr:1}}/>
            <Typography component="span">
              Save
            </Typography>
          </>)}
      </Button>

    </Paper>
  );
};

export default CreateContact;