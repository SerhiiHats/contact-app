import "./ContactPage.css";
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {dbFake} from "../../dbFake.js";
import ContactCard from "../ContactsListPage/ContactCard.jsx";

const initialItem = {
  avatar_url: "",
  tags: [],
  fields:{}
}

const ContactPage = () => {

  const [item, setItem] = useState(initialItem);
  const {id} = useParams();



  useEffect(() => {

    setItem(dbFake.resources.find(item=>item.id === id))
  }, []);


  return (
    <div className="contact-page">
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