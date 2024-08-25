import "./ContactsListPage.css";
import {useNavigate} from "react-router-dom";
import ContactCard from "../../features/ContactCard/ContactCard.jsx";
import {useEffect} from "react";
import {client} from "../../api/nimble.js";
import {fetchContacts} from "../../redux/reducers/contactsReducer.js";
import {useDispatch, useSelector} from "react-redux";
import {Box, Container, Grid} from "@mui/material";
import FormCreateContact from "../../features/FormCreateContact/FormCreateContact.jsx";


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
            <ul>
              {loading ? (<li className="contact-card">
                  <h3>Contacts loading
                    <span className="loader"> </span>
                  </h3>
                </li>)
                : (contacts.map(item => (
                  <li className="contact-card" key={item.id} onClick={() => handlerClickContact(item.id)}>
                    <ContactCard
                      removeContact={(e) => handleDelete(e, item.id)}
                      avatar={item.avatar_url}
                      tags={item.tags}
                      fields={item.fields}
                    />
                  </li>
                )))
              }
            </ul>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ContactsList;