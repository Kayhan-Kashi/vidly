import React from "react";

const MovieForm = ({ match, history }) => {
  return (
    <div>
      <h4>MovieForm {match.params.id}</h4>
      <button
        className="btn btn-primary"
        onClick={() => history.push("/movies")}
      >
        Save
      </button>
    </div>
  );
};

export default MovieForm;
