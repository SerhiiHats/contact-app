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
  const [updateTags, setUpdateTags] = useState(null);
  const [tag, setTag] = useState("");

  const {id} = useParams();


  useEffect(() => {

    async function loadData() {
      const resources = await client.getContactById(id)
      if (resources.length) {
        setItem(resources[0]);
      }
    }

    loadData();
  }, [updateTags]);

  const handlerSubmit = async (e) => {
    e.preventDefault();

    if (!tag) {
      return;
    }

    const newTags = tag.split(",");

    const oldTags = item.tags.map(tag=>tag.tag);

    const newArrayOfTags = [...oldTags, ...newTags]

    const newTagsForSave = {
      tags: newArrayOfTags
    }
    const response = await client.updateContactTags(id, newTagsForSave);

    setUpdateTags(newArrayOfTags)
    setTag("");

  }

  return (
    <div className="container-contact-page">
      ContactPage coming soon...
      <Link to={"/"}> come back</Link>
      <ContactCard
        avatar={item.avatar_url}
        tags={item.tags}
        fields={item.fields}
      />
      <form className="form-add-tag" onSubmit={e => handlerSubmit(e)}>
        <input
          type="text"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        />
        <input type="submit" value="Add Tag"/>
      </form>

    </div>
  );
};

export default ContactPage;