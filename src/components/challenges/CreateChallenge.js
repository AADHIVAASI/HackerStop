import React from "react";
import { Chip, Icon } from "react-materialize";
import { Navigate, useNavigate } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContextProvider";
import { useChallengeContext } from "../../contexts/ChallengeContextProvider";
import { Challenge, ResetCurrentChallenge } from "../../helpers/constructors";
import { toast } from "../../helpers/callbacks";
import { getTags } from "../../helpers/operations";
import { checkChallengeForm } from "../../helpers/validator";
import {
  challengeCreated,
  validateChallengeForm,
} from "../../constants/objects";
import "materialize-css";

const CreateChallenge = () => {
  const { loggedOut, currentUser } = useUserContext();
  const Nav = useNavigate();
  const {
    addChallenge,
    currentChallenge,
    setChallenge,
  } = useChallengeContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkChallengeForm(currentChallenge)) {
      toast().fire(challengeCreated);
      addChallenge(new Challenge(currentChallenge, currentUser));
      setChallenge(new ResetCurrentChallenge());
      Nav("/");
    } else {
      toast().fire(validateChallengeForm);
    }
  };
  const handleChange = (e) => {
    let temp = {
      ...currentChallenge,
      [e.target.id]: e.target.value,
    };
    setChallenge(temp);
  };
  return (
    <div className="container">
      {loggedOut && <Navigate to="/login" replace={true} />}
      <form className="white" onSubmit={(e) => handleSubmit(e)}>
        <h5 className="grey-text text-darken-3">Create Challenge</h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={currentChallenge.title}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="description">Description</label>
          <textarea
            className="materialize-textarea"
            onChange={(e) => handleChange(e)}
            id="description"
            value={currentChallenge.description}
          />
        </div>
        <Chip
          className="challenge-tags"
          close={false}
          closeIcon={<Icon className="close">Close</Icon>}
          options={{
            data: currentChallenge.tags,
            placeholder: "Enter a Tag",
            secondaryPlaceholder: " + Tag",
            limit: 6,
            onChipAdd: () =>
              setChallenge({ ...currentChallenge, tags: getTags() }),
            onChipDelete: () =>
              setChallenge({ ...currentChallenge, tags: getTags() }),
          }}
        />
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Create</button>
        </div>
      </form>
    </div>
  );
};

export default CreateChallenge;
