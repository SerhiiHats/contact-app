import {Link} from "react-router-dom";

const Home = () => {
  return (
    <ul>
      <li><Link to={"/contacts"}>Contacts List</Link></li>
      <li><Link to={"/contact"}>Contact</Link></li>
    </ul>
  );
};

export default Home;