export const initCurrentChallenge = {
  id: "",
  title: "",
  description: "",
  tags: [
    {
      tag: "Feature",
    },
    {
      tag: "Tech",
    },
    {
      tag: "Idea",
    },
  ],
  createDate: null,
  empId: "",
  likes: "",
};

export const initCurrentUser = {
  fName: "",
  lName: "",
  empId: "",
  likes: [],
};

export const challengeCreated = {
  icon: "success",
  title: "May the best win...",
};

export const validateChallengeForm = {
  icon: "warning",
  title: "Stop being lazy, FILL EVERYTHING!",
};

export const userLoggedOut = {
  icon: "question",
  title: "Bored?? Do you even hack bro?",
};

export const validateLoginForm = {
  icon: "warning",
  title: "No Entry Buddy... Show some ID please",
};

export const welcomeMessage = (currentUser) => {
  return {
    icon: "success",
    title: "Hiii " + currentUser.fName + " " + currentUser.lName,
  };
};
