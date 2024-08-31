import "./ContactsListPage.css";
import {useNavigate} from "react-router-dom";
import Contact from "../../features/Contact/Contact.jsx";
import {useEffect} from "react";
import {client} from "../../api/nimble.js";
import {fetchContacts} from "../../redux/reducers/contactsReducer.js";
import {useDispatch, useSelector} from "react-redux";
import {Box, Container, Grid, List, ListItem, ListItemText} from "@mui/material";
import FormCreateContact from "../../features/FormCreateContact/FormCreateContact.jsx";
// import {css} from "@emotion/react";
import LoaderDot from "../../features/LoaderDot/LoaderDot.jsx";


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
    <Container maxWidth="lg">
      <Box component="section" sx={{border: '1px dashed grey'}}>
        <Grid container
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
              spacing={3}
              sx={{position: "relative",}}
        >
          <Grid item sm={6} xs={12} sx={{
            position: "sticky",
            top: 0,
          }}>
            <FormCreateContact/>
          </Grid>
          <Grid item sm={6} xs={12} sx={{
            border: '1px dashed grey'
          }}>
            <h2>Contacts</h2>
            <List sx={{width: '100%', maxWidth: 558, bgcolor: 'background.paper'}}>
              {loading ? (
                  <ListItem>
                    <ListItemText
                      primary="Contacts loading"
                      secondary={
                        <LoaderDot/>
                      }
                    />
                  </ListItem>)
                : (contacts.map(item => (
                  <Contact
                    key={item.id}
                    handlerClickContact={() => handlerClickContact(item.id)}
                    removeContact={(e) => handleDelete(e, item.id)}
                    avatar={item.avatar_url}
                    tags={item.tags}
                    fields={item.fields}
                  />
                )))
              }
            </List>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ContactsList;