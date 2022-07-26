import React from "react";
import { useUserContext } from "../../contexts/UserContextProvider";
import { useChallengeContext } from "../../contexts/ChallengeContextProvider";
import ChallengeList from "./ChallengeList";
import { checkChallenges } from "../../helpers/operations";

const MyChallenges = () => {
  const { currentUser } = useUserContext();
  const { challenges } = useChallengeContext();
  const haveChallenges = checkChallenges(challenges, currentUser);
  return (
    <div className="dashboard container">
      <h5 className="pink-text text-lighten-2 center">Start grinding...</h5>
      {haveChallenges && (
        <ChallengeList
          challenges={challenges}
          own={true}
          currentUser={currentUser}
        />
      )}
    </div>
  );
};

export default MyChallenges;
