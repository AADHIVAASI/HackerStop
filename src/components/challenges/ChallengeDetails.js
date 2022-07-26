import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContextProvider";
import { useChallengeContext } from "../../contexts/ChallengeContextProvider";
import { findChallenge, fetchUserName } from "../../helpers/operations";
import { Chip } from "react-materialize";
import moment from "moment";

const ChallengeDetails = () => {
  const { loggedOut, currentUser, liked, users } = useUserContext();
  const { challenges, incrementLikes } = useChallengeContext();
  const { id } = useParams();
  const challenge = findChallenge(challenges, id);
  const { fName, lName } = fetchUserName(users, challenge);
  const handleLikeClick = () => {
    liked(id, currentUser.empId);
    incrementLikes(id);
  };
  return (
    <div className="container section challenge-details">
      {loggedOut && <Navigate to="/login" replace={true} />}
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">
            Challenge Title - {challenge.title}
          </span>
          <p>{challenge.description}</p>
          <div style={{ paddingTop: "20px" }}>
            {challenge.tags.length > 0 &&
              challenge.tags.map((tag, i) => {
                return (
                  <Chip close={false} options={null} key={i}>
                    {tag.tag}
                  </Chip>
                );
              })}
          </div>
        </div>
        <div className="card-action lighten-4 grey-text">
          <div className="row">
            <div className="col s6">
              <div>Posted by {fName + " " + lName}</div>
              <div>{moment(challenge.createDate).format("MMM Do YYYY")}</div>
            </div>
            <div className="col s6">
              {currentUser.likes.includes(id) ? (
                <i className="small material-icons right pink-text text-lighten-1">
                  thumb_up
                </i>
              ) : (
                <i
                  className="small material-icons right black-text"
                  onClick={() => handleLikeClick()}
                >
                  thumb_up
                </i>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeDetails;
