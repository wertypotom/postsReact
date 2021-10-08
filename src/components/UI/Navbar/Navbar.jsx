import React from "react";
import { Link } from "react-router-dom";
import Button from "./../Button/Button";
import { AuthContext } from "./../../../context/Context";
function Navbar() {
  const { isAuth, setIsAuth } = React.useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  return (
    <div className="navbar">
      <Button onClick={logout}>Log Out</Button>
      <div className="navbar__links">
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
      </div>
    </div>
  );
}

export default Navbar;
