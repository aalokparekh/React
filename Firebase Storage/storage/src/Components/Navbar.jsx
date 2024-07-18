import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between " }}>
        <Link to={"/login"}>Login</Link>
        <Link to={"/dashboard"}>Dashboard</Link>
        <Link to={"/post"}>Post</Link>
        <Link to={"/postwithformik"}>PostWithFormik</Link>
        <br />
      </div>
    </div>
  );
};

export default Navbar;
