import Swal from "sweetalert2";
import { initCurrentUser, initCurrentChallenge } from "../constants/objects";
import superjson from "superjson";

export const toast = () => {
  return Swal.mixin({
    toast: true,
    position: "bottom-end",
    showConfirmButton: false,
    timer: 3000,
    color: "#fff",
    iconColor: "#fff",
    background: "#ec407a",
    timerProgressBar: true,
  });
};

export const usersData = () => {
  return () => {
    const localData = sessionStorage.getItem("users");
    return localData ? superjson.parse(localData) : [];
  };
};
export const currentUserData = () => {
  return () => {
    const localData = sessionStorage.getItem("currentUser");
    return localData ? superjson.parse(localData) : initCurrentUser;
  };
};
export const loggedOutData = () => {
  return () => {
    const localData = sessionStorage.getItem("loggedOut");
    return localData ? superjson.parse(localData) : true;
  };
};
export const challengesData = () => {
  return () => {
    const localData = sessionStorage.getItem("challenges");
    return localData ? superjson.parse(localData) : [];
  };
};
export const currentChallengeData = () => {
  return () => {
    const localData = sessionStorage.getItem("currentChallenge");
    return localData ? superjson.parse(localData) : initCurrentChallenge;
  };
};
