const ContactCard = ({
                       avatar = "/person_default.png",
                       tags,
                       fields
                     }) => {

  const userFields = {
    email: '',
    firstName: '',
    lastName: ''
  }

  for (let key in fields) {

    if (fields[key][0].label === "first name") {
      userFields.firstName = fields[key][0].value;
    }
    if (fields[key][0].label === "last name") {
      userFields.lastName = fields[key][0].value;

    }
    if (fields[key][0].label === "email") {
      userFields.email = fields[key][0].value;

    }

  }


  return (
    <div>
      <div className="user">
        <div className="wrap-avatar">
          <img
            src={avatar}
            alt="avatar"
          />
        </div>
        <div className="user-fields">
          <p>
            <span>{userFields.firstName} </span>
            <span> {userFields.lastName}</span>
          </p>
          <p>{userFields.email}</p>
        </div>
      </div>
      <div>
        {tags.map(tag => (
          <button key={tag.id} className="tag-btn">{tag.tag}</button>
        ))}
      </div>
    </div>
  );
};

export default ContactCard;