import "./ContactsListPage.css";
import {useNavigate} from "react-router-dom";
import Contact from "../../features/Contact/Contact.jsx";
import {useEffect} from "react";
import {client} from "../../api/nimble.js";
import {fetchContacts} from "../../redux/reducers/contactsReducer.js";
import {useDispatch, useSelector} from "react-redux";
import {Box, Container, Grid, List, ListItem, ListItemText, Typography} from "@mui/material";
import FormCreateContact from "../../features/FormCreateContact/FormCreateContact.jsx";
import {css} from "@emotion/react";


const ContactsList = () => {
  const loading = useSelector(store => store.stateContacts.loading);
  const contacts = useSelector(store => store.stateContacts.contacts);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log("Render")

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  const handlerClickContact = (id) => {
    navigate(`/contact/${id}`);
  }


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
                        <Typography component="span"
                                    variant="body"
                                    color="text.primary"
                                    sx={css`
                                        width: fit-content;
                                        font-weight: inherit;
                                        font-family: inherit;
                                        font-size: inherit;
                                        clip-path: inset(0 100% 0 0);
                                        animation: l5 1.5s steps(11) infinite;
                                        margin-left: 7px;

                                        &:before {
                                            content: ".........";
                                        }

                                        @keyframes l5 {
                                            to {
                                                clip-path: inset(0 -1ch 0 0)
                                            }
                                        }
                                    `}
                        >
                        </Typography>}
                    />


                    {/*<h3>Contacts loading*/}
                    {/*  <span className="loader"> </span>*/}
                    {/*</h3>*/}
                  </ListItem>)
                : (contacts.map(item => (
                  // <li className="contact-card" key={item.id} onClick={() => handlerClickContact(item.id)}>
                  <Contact
                    key={item.id}
                    onClick={() => handlerClickContact(item.id)}
                    removeContact={(e) => handleDelete(e, item.id)}
                    avatar={item.avatar_url}
                    tags={item.tags}
                    fields={item.fields}
                  />
                  // </li>
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