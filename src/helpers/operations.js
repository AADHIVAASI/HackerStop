export const getTags = () => {
  let elements = document.querySelectorAll(".chip");
  let tagsArray = [];
  for (let i = 0; i < elements.length; i++) {
    tagsArray.push({ tag: elements[i].firstChild.textContent });
  }
  return tagsArray;
};

export const findChallenge = (challenges, id) => {
  return challenges.find((challenge) => id === challenge.id);
};
export const fetchUserName = (users, challenge) => {
  return users.find(({ empId }) => challenge.empId === empId);
};

export const checkChallenges = (challenges, currentUser) => {
  return challenges.find(({ empId }) => empId === currentUser.empId)
    ? true
    : false;
};
