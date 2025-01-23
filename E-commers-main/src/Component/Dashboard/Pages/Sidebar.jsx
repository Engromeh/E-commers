import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <ul className="list-unstyled" style={{ marginTop: "8rem" }}>
        <li>
          <Link to={"/"} className="p-3">
            Home
          </Link>
        </li>

        <li>
          <Link to={"/Dashbord"}>Get all proudect</Link>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
