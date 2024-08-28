import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography
} from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import "./Contact.css";
import PrimaryTextAboutContact from "../PrimaryTextAboutContact/PrimaryTextAboutContact.jsx";
import TagsForContact from "../TagsForContact/TagsForContact.jsx";


const Contact = ({
                   removeContact = null,
                   avatar = "/person_default.png",
                   tags = [],
                   fields = []
                 }) => {

  const userFields = {
    email: '',
    firstName: '',
    lastName: ''
  }

  for (let key in fields) {

    if (fields[key][0].label === "first name") {
      userFields.firstName = fields[key][0].value;
    }
    if (fields[key][0].label === "last name") {
      userFields.lastName = fields[key][0].value;

    }
    if (fields[key][0].label === "email") {
      userFields.email = fields[key][0].value;

    }

  }


  return (
    <ListItem
      alignItems="flex-start"
      sx={{
        position: "relative",
        mt: 2, mb: 2, bgcolor: "#EDEDED", borderRadius: 1,
        "&>.MuiListItemSecondaryAction": {top: "2px"},
      }}
      secondaryAction={
        <IconButton sx={{position: 'absolute', top: "-40%", right: "-7px"}} onClick={() => {
        }}>
          <HighlightOffIcon sx={{fontSize: "26px"}}/>
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="avatar" src={avatar} sx={{width: 54, height: 54, mr: 2}}/>
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography variant="body2" component="div">
              <PrimaryTextAboutContact
                firstName={userFields.firstName}
                lastName={userFields.lastName}
                email={userFields.email}/>
            </Typography>
          }
          secondary={
            <Typography variant="body2" component="div">
              <TagsForContact tags={tags}/>
            </Typography>
          }
        />
      </ListItemButton>
    </ListItem>
  );
};

export default Contact;