import React from "react";
import moment from "moment";
import { Chip } from "react-materialize";
import { useUserContext } from "../../contexts/UserContextProvider";

const ChallengeSummary = ({ challenge }) => {
  const { users } = useUserContext();
  const { fName, lName } = users.find(({ empId }) => challenge.empId === empId);
  return (
    <div className="card grey-text text-darken-3">
      <div className="card-content ">
        <p className="card-title bolder">{challenge.title}</p>
        {challenge.tags.length > 0 &&
          challenge.tags.map((tag, i) => {
            return (
              <Chip close={false} options={null} key={i}>
                {tag.tag}
              </Chip>
            );
          })}
        <p style={{ marginTop: "10px" }}>Posted by {fName + " " + lName}</p>
        <p className="grey-text">{moment(challenge.createDate).fromNow()}</p>
      </div>
      <div className="card-action row">
        <h5
          className="col s1 pink-text text-lighten-1"
          style={{ margin: 0, paddingRight: 0, width: "max-content" }}
        >
          {challenge.likes}
        </h5>
        <i
          className="col s1 small material-icons pink-text text-lighten-1"
          style={{ paddingLeft: 0 }}
        >
          favorite_border
        </i>
      </div>
    </div>
  );
};

export default ChallengeSummary;
