import React, { createContext, useState, useContext, useEffect } from "react";
import superjson from "superjson";
import {
  toast,
  usersData,
  currentUserData,
  loggedOutData,
} from "../helpers/callbacks";
import { userLoggedOut, initCurrentUser } from "../constants/objects";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [users, setUsers] = useState(usersData());
  const [currentUser, setCurrentUser] = useState(currentUserData());
  const [loggedOut, setLoggedOut] = useState(loggedOutData());
  useEffect(() => {
    sessionStorage.setItem("loggedOut", superjson.stringify(loggedOut));
  }, [loggedOut]);
  useEffect(() => {
    sessionStorage.setItem("users", superjson.stringify(users));
  }, [users]);
  useEffect(() => {
    sessionStorage.setItem("currentUser", superjson.stringify(currentUser));
  }, [currentUser]);
  const checkUser = (obj) => {
    if (users.length > 0) {
      const existingUser = users.find(({ empId }) => empId === obj.empId);
      if (typeof existingUser === "undefined") {
        setUsers((prevUsers) => [...prevUsers, currentUser]);
        return;
      }
      setUsers((prevUsers) =>
        prevUsers.map((user) => {
          if (user.empId === obj.empId) {
            return { ...user, fName: obj.fName, lName: obj.lName };
          }
          return user;
        })
      );
      setCurrentUser(existingUser);
      return;
    }
    setUsers([obj]);
  };
  const liked = (challengeID, likedEmpId) => {
    setCurrentUser((prev) => {
      return { ...prev, likes: [...prev.likes, challengeID] };
    });
    setUsers((prev) =>
      prev.map((user) => {
        if (user.empId === likedEmpId) {
          return { ...user, likes: [...user.likes, challengeID] };
        }
        return user;
      })
    );
  };
  const setLoggedUser = (obj) => {
    setCurrentUser(obj);
  };
  const logOut = () => {
    toast().fire(userLoggedOut);
    setCurrentUser(initCurrentUser);
    setLoggedOut(true);
  };
  const logIn = () => setLoggedOut(false);
  return (
    <UserContext.Provider
      value={{
        currentUser,
        liked,
        setLoggedUser,
        logOut,
        loggedOut,
        logIn,
        checkUser,
        users,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);

export default UserContextProvider;
