import React from "react";
import { NavLink } from "react-router-dom";
import LoggedInOptions from "./LoggedInOptions";
import { useUserContext } from "../../contexts/UserContextProvider";

const NavBar = () => {
  const { loggedOut } = useUserContext();
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <NavLink to="/" className="brand-logo">
          Hack Ideas
        </NavLink>
        {!loggedOut && <LoggedInOptions />}
      </div>
    </nav>
  );
};

export default NavBar;
