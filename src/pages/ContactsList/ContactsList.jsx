import "./ContactsListPage.css";
import {useNavigate} from "react-router-dom";
import Contact from "../../features/Contact/Contact.jsx";
import {useEffect} from "react";
import {client} from "../../api/nimble.js";
import {fetchContacts} from "../../redux/reducers/contactsReducer.js";
import {useDispatch, useSelector} from "react-redux";
import {Box, Container, Grid, List, ListItem, Typography} from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';
import BasicModal from "../../features/BasicModal/BasicModal.jsx";
import CreateContact from "../../features/CreateContact/CreateContact.jsx";


const ContactsList = () => {
  const loading = useSelector(store => store.stateContacts.loading);
  const contacts = useSelector(store => store.stateContacts.contacts);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log("Render");

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  const handlerClickContact = (id) => {
    navigate(`/contact/${id}`);
  };

  const handleDelete = async (e, idClient) => {
    e.stopPropagation();
    await client.deleteContactById(idClient);
    dispatch(fetchContacts());
  }

  return (
    <Container maxWidth="lg" sx={{pt: 5}}>
      <Box component="section">
        <Grid container
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
              spacing={5}
              sx={{position: "relative",}}
        >
          <Grid item sm={6} xs={12} sx={{
            position: "sticky",
            top: 0,
          }}>
            <CreateContact/>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Typography sx={{fontSize: 20}}>Contacts</Typography>
            <List dense={false} sx={{width: '100%', maxWidth: 558, bgcolor: 'background.paper'}}>
              <ListItem>
                {loading && (
                  <Box sx={{width: '100%'}}>
                    <LinearProgress color="success"/>
                  </Box>
                )}
              </ListItem>
              {contacts.map(item => (
                <Contact
                  key={item.id}
                  handlerClickContact={() => handlerClickContact(item.id)}
                  removeContact={(e) => handleDelete(e, item.id)}
                  avatar={item.avatar_url}
                  tags={item.tags}
                  fields={item.fields}
                />
              ))}
            </List>
          </Grid>
        </Grid>
      </Box>
      <BasicModal open={loading}/>
    </Container>
  );
};

export default ContactsList;