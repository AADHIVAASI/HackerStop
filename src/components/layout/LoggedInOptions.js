import React from "react";
import { NavLink } from "react-router-dom";
import { SideNavItem, SideNav } from "react-materialize";
import { useUserContext } from "../../contexts/UserContextProvider";
import "materialize-css";

const LoggedInOptions = () => {
  const { logOut, currentUser } = useUserContext();
  return (
    <div>
      <nav className="nav-wrapper grey darken-3">
        <SideNav
          id="SideNav-55"
          trigger={
            <i className="material-icons menu right hide-on-large-only">menu</i>
          }
          options={{}}
        >
          <SideNavItem
            user={{
              background: "https://placeimg.com/640/480/tech/grayscale",
              email: "ID : " + currentUser.empId,
              name: currentUser.fName + " " + currentUser.lName,
            }}
            userView
          />
          <NavLink to="/create" className="pink-text text-lighten-1">
            New Challenge
          </NavLink>
          <SideNavItem divider />
          <NavLink to="/myChallenges" className="pink-text text-lighten-1">
            My Challenges
          </NavLink>
          <SideNavItem divider />
          <NavLink
            to="/login"
            className="pink-text text-lighten-1"
            onClick={() => logOut()}
          >
            Log Out
          </NavLink>
          <SideNavItem divider />
        </SideNav>
        <ul className="right hide-on-med-and-down">
          <li>
            <NavLink to="/create">New Challenge</NavLink>
          </li>
          <li>
            <NavLink to="/myChallenges">My Challenges</NavLink>
          </li>
          <li>
            <NavLink to="/login" onClick={() => logOut()}>
              Log Out
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="btn btn-floating pink lighten-1">
              {currentUser.fName.charAt(0).toUpperCase() +
                currentUser.lName.charAt(0).toUpperCase()}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LoggedInOptions;
