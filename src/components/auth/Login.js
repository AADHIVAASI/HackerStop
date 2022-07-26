import React from "react";
import { useUserContext } from "../../contexts/UserContextProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "../../helpers/callbacks";
import { checkLoginForm } from "../../helpers/validator";
import { welcomeMessage, validateLoginForm } from "../../constants/objects";

const SignIn = () => {
  const { currentUser, setLoggedUser, logIn, checkUser } = useUserContext();
  const navigate = useNavigate();
  const handleChange = (e) => {
    let temp = {
      ...currentUser,
      [e.target.id]: e.target.value,
    };
    setLoggedUser(temp);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkLoginForm(currentUser)) {
      toast().fire(welcomeMessage(currentUser));
      checkUser(currentUser);
      logIn();
      navigate("/");
    } else {
      toast().fire(validateLoginForm);
    }
  };
  return (
    <div className="container">
      <form className="white" onSubmit={(e) => handleSubmit(e)}>
        <h5 className="grey-text text-darken-3">Welcome Hackster</h5>
        <div className="input-field">
          <label htmlFor="empId">Employee ID</label>
          <input
            type="number"
            id="empId"
            value={currentUser.empId}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="fName">First Name</label>
          <input
            type="text"
            id="fName"
            value={currentUser.fName}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="lName">Last Name</label>
          <input
            type="text"
            id="lName"
            value={currentUser.lName}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Enter</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
