import "./ContactPage.css";
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import ContactCard from "../../features/ContactCard/ContactCard.jsx";
import {client} from "../../api/nimble.js";

const initialItem = {
  avatar_url: "",
  tags: [],
  fields: {}
}

const ContactPage = () => {
  const [item, setItem] = useState(initialItem);
  const {id} = useParams();


  useEffect(() => {

    async function loadData() {
      const resources = await client.getContactById(id)
      if (resources.length) {
        setItem(resources[0]);
      }
    }

    loadData();
  }, []);


  return (
    <div className="container-contact-page">
      ContactPage coming soon...
      <Link to={"/"}> come back</Link>
      <ContactCard
        avatar={item.avatar_url}
        tags={item.tags}
        fields={item.fields}
      />
      <form className="form-add-tag">
        <input type="text"/>
        <input type="submit" value="Add Tag"/>
      </form>

    </div>
  );
};

export default ContactPage;