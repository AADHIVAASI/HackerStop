import React, { createContext, useState, useContext, useEffect } from "react";
import superjson from "superjson";
import { currentChallengeData, challengesData } from "../helpers/callbacks";

export const ChallengeContext = createContext();

const ChallengeContextProvider = (props) => {
  const [challenges, setChallenges] = useState(challengesData());
  const [currentChallenge, setCurrentChallenge] = useState(
    currentChallengeData()
  );
  useEffect(() => {
    sessionStorage.setItem("challenges", superjson.stringify(challenges));
  }, [challenges]);
  useEffect(() => {
    sessionStorage.setItem(
      "currentChallenge",
      superjson.stringify(currentChallenge)
    );
  }, [currentChallenge]);
  const addChallenge = (obj) => {
    setChallenges((prevChallenges) => {
      return [...prevChallenges, obj];
    });
  };
  const setChallenge = (obj) => {
    setCurrentChallenge(obj);
  };
  const incrementLikes = (challengeID) => {
    setChallenges((prev) =>
      prev.map((challenge) => {
        if (challenge.id === challengeID) {
          return {
            ...challenge,
            likes: (parseInt(challenge.likes) + 1).toString(),
          };
        }
        return challenge;
      })
    );
  };
  return (
    <ChallengeContext.Provider
      value={{
        challenges,
        addChallenge,
        currentChallenge,
        setChallenge,
        incrementLikes,
      }}
    >
      {props.children}
    </ChallengeContext.Provider>
  );
};

export const useChallengeContext = () => useContext(ChallengeContext);

export default ChallengeContextProvider;
