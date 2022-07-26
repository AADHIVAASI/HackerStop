import React from "react";
import ChallengeList from "../challenges/ChallengeList";
import { useChallengeContext } from "../../contexts/ChallengeContextProvider";

const Dashboard = () => {
  let { challenges } = useChallengeContext();
  return (
    <div className="dashboard container">
      <h5 className="pink-text text-lighten-2 center">
        Let the Hacker Games begin!
      </h5>
      <ChallengeList challenges={challenges} own={false} currentUser={null} />
    </div>
  );
};

export default Dashboard;
