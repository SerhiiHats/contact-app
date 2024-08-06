import "./ContactPage.css";
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import ContactCard from "../../features/ContactCard/ContactCard.jsx";
import {useSelector} from "react-redux";

const initialItem = {
  avatar_url: "",
  tags: [],
  fields:{}
}

const ContactPage = () => {
  const [item, setItem] = useState(initialItem);
  const {id} = useParams();
  const contacts = useSelector(state => state.contacts);


  useEffect(() => {
    setItem(contacts.resources.find(item=>item.id === id))
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
        <input type="submit" value="Add Tag" />
      </form>

    </div>
  );
};

export default ContactPage;