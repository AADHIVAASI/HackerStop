import { getTags } from "./operations";

export const checkLoginForm = (currentUser) => {
  return (
    currentUser.fName.length > 0 &&
    currentUser.lName.length > 0 &&
    currentUser.empId.length > 0
  );
};

export const checkChallengeForm = (currentChallenge) => {
  return (
    currentChallenge.title.length > 0 &&
    currentChallenge.description.length > 0 &&
    getTags().length > 0
  );
};
