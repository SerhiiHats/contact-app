import "./ContactPage.css";
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import ContactCard from "../../features/ContactCard/ContactCard.jsx";
import {client} from "../../api/nimble.js";
import {useDispatch, useSelector} from "react-redux";
import {
  contactClear,
  contactUpdate,
  fetchContact
} from "../../redux/reducers/contactReducer.js";


const ContactPage = () => {
  const [newTag, setNewTag] = useState("");
  const item = useSelector(store => store.stateContact.contact);
  const loading = useSelector(store => store.stateContact.loading);
  const dispatch = useDispatch();
  const {id} = useParams();


  useEffect(() => {
    dispatch(fetchContact(id));

    return () => {
      dispatch(contactClear());
    }
  }, [dispatch]);


  const handlerSubmit = async (e) => {
    e.preventDefault();

    if (!newTag) {
      return;
    }

    const newTags = newTag.split(",").map(item => item.trim());

    const oldTags = item.tags.map(tag => tag.tag);

    const newArrayOfTags = [...oldTags, ...newTags]

    const newTagsForSave = {
      tags: newArrayOfTags
    }
    const response = await client.updateContactTags(id, newTagsForSave);

    dispatch(contactUpdate(response));

    setNewTag("");
  }

  return (
    <div className="container-contact-page">
      ContactPage coming soon...
      <Link to={"/"}> come back</Link>
      {loading && <span className="loaderContact"> </span>}
      <ContactCard
        avatar={item.avatar_url}
        tags={item.tags}
        fields={item.fields}
      />
      <form className="form-add-tag" onSubmit={e => handlerSubmit(e)}>
        <input
          type="text"
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
        />
        <input type="submit" value="Add Tag"/>
      </form>

    </div>
  );
};

export default ContactPage;