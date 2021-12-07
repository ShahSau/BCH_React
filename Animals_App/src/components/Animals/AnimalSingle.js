import React from "react";
import { useParams, useHistory } from "react-router-dom";

const AnimalSingle = () => {
  let { animal } = useParams();
  let history = useHistory();

  return (
    <div>
      <h1>This is the page for {animal}</h1>
      <div>
        <button onClick={() => history.goBack()}>Back to animals</button>
      </div>
    </div>
  );
};

export default AnimalSingle;
