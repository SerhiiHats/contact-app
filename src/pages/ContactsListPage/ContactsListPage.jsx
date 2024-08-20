import "./ContactsListPage.css";
import {useNavigate} from "react-router-dom";
import ContactCard from "../../features/ContactCard/ContactCard.jsx";
import {useEffect} from "react";
import {client} from "../../api/nimble.js";
import {fetchContacts} from "../../redux/reducers/contactsReducer.js";
import {useDispatch, useSelector} from "react-redux";
import {Box, Grid} from "@mui/material";
import FormCreateContact from "../../features/FormCreateContact/FormCreateContact.jsx";


const ContactsListPage = () => {
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
    <Box component="section" sx={{border: '1px dashed grey'}}>
      <Grid container spacing={2}>
        <Grid item lg={5} md={6} sm={12}>
          <FormCreateContact/>
        </Grid>
        <Grid item lg={7} md={6} sm={12}>
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
  );
};

export default ContactsListPage;