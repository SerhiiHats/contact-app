import "./ContactsListPage.css";
import {Link, useNavigate} from "react-router-dom";
import {dbFake} from "../../dbFake.js";
import ContactCard from "../../features/ContactCard/ContactCard.jsx";

const ContactsListPage = () => {
  const navigate = useNavigate();

  const {resources} = dbFake;

  const handlerClick = (id)=>{
    navigate(`/contact/${id}`);
  }

  return (
    <div className="container">

      <section className="contacts">
        <div className="contacts-left-card">
          <form className="form-add-contact">
            <h2>Create Contact</h2>

            <label className="area-input-text">
              <span>First Name</span>
              <input type="text" name="firstName"/>
            </label>

            <label className="area-input-text">
              <span>Last Name</span>
              <input type="text" name="lastName"/>
            </label>

            <label className="area-input-text">
              <span>Email</span>
              <input type="email" name="email"/>
            </label>

            <input className="submit" type="submit" name="submit" value="Add Contact"/>
          </form>
        </div>
        <div className="contacts-right-card">
          <h2>Contacts</h2>
          <ul>
            {resources.map(item => (
              <li className="contact-card" key={item.id} onClick={()=>handlerClick(item.id)}>
                <ContactCard
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