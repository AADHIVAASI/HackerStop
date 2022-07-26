import React from "react";
import { Button } from "react-materialize";

const ChallengeListSorter = ({ dateSortHandler, likeSortHandler }) => {
  return (
    <>
      <Button
        node="button"
        flat
        waves="light"
        small
        onClick={() => dateSortHandler()}
      >
        <i className="material-icons right">swap_vert</i>
        Date
      </Button>
      <Button
        node="button"
        flat
        waves="light"
        small
        onClick={() => likeSortHandler()}
        style={{ marginLeft: "5px" }}
      >
        <i className="material-icons right">swap_vert</i>
        Like
      </Button>
    </>
  );
};

export default ChallengeListSorter;
