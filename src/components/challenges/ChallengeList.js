import React, { useState, memo } from "react";
import ChallengeSummary from "./ChallengeSummary";
import { NavLink } from "react-router-dom";
import ChallengeListSorter from "./ChallengeListSorter";
import { Navigate } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContextProvider";

const ChallengeList = ({ challenges, own, currentUser }) => {
  const { loggedOut } = useUserContext();
  const [sortDate, setSortDate] = useState(false);
  const [sortLike, setSortLike] = useState(false);
  const dateSortHandler = () => {
    setSortDate((date) => !date);
    sortDate
      ? challenges.sort((a, b) => b.createDate - a.createDate)
      : challenges.sort((a, b) => a.createDate - b.createDate);
  };
  const likeSortHandler = () => {
    setSortLike((like) => !like);
    sortLike
      ? challenges.sort((a, b) => b.likes - a.likes)
      : challenges.sort((a, b) => a.likes - b.likes);
  };
  return (
    <>
      {loggedOut && <Navigate to="/login" replace={true} />}
      <div className="challenge-list section">
        {challenges.length > 0 && (
          <div>
            <ChallengeListSorter
              dateSortHandler={dateSortHandler}
              likeSortHandler={likeSortHandler}
            />
            {challenges.map((challenge) => {
              if (own && challenge.empId === currentUser.empId) {
                return (
                  <NavLink to={"/challenge/" + challenge.id} key={challenge.id}>
                    <ChallengeSummary challenge={challenge} />
                  </NavLink>
                );
              } else if (!own) {
                return (
                  <NavLink to={"/challenge/" + challenge.id} key={challenge.id}>
                    <ChallengeSummary challenge={challenge} />
                  </NavLink>
                );
              }
              return <React.Fragment key={challenge.id} />;
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default memo(ChallengeList);
