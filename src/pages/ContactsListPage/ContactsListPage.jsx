import "./ContactsListPage.css";
import {useNavigate} from "react-router-dom";
import ContactCard from "../../features/ContactCard/ContactCard.jsx";
import {useEffect, useState} from "react";
import {client} from "../../api/nimble.js";
import {prepareNewContact} from "./prepareNewContact.js";

const initialEmptyContact = {
  firstName: "",
  lastName: "",
  email: "",
}

const ContactsListPage = () => {
  const [resources, setResources] = useState([]);
  const [createdContact, setCreatedContact] = useState(null);
  const navigate = useNavigate();
  const [newContact, setNewContact] = useState(initialEmptyContact);

  useEffect(() => {

    async function loadData() {
      const resources = await client.getContactList()
      setResources(resources);
    }

    loadData();

    console.log("EseEffect")
  }, [createdContact]);

  const handlerClick = (id) => {
    navigate(`/contact/${id}`);
  }

  const handleInput = (e, field) => {
    setNewContact({
      ...newContact,
      [field]: e.target.value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const contact = prepareNewContact(newContact);
    const resources = await client.createContact(contact);
    setCreatedContact(resources)
    setNewContact(initialEmptyContact)
  }

  const handleDelete = async (e, idClient) => {
    e.stopPropagation();
    const response = await client.deleteContactById(idClient);
    console.log(response)
    setCreatedContact(resources)
  }

  return (
    <div className="container-contacts">

      <section className="contacts">
        <div className="contacts-left-card">
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
        </div>
        <div className="contacts-right-card">
          <h2>Contacts</h2>
          <ul>
            {resources.map(item => (
              <li className="contact-card" key={item.id} onClick={() => handlerClick(item.id)}>
                <ContactCard
                  removeContact={(e)=>handleDelete(e, item.id)}
                  // idClient={item.id}
                  avatar={item.avatar_url}
                  tags={item.tags}
                  fields={item.fields}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ContactsListPage;