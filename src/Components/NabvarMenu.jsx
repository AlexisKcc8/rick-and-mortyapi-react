import React from "react";

export const NabvarMenu = (props) => {
  const {nextPage, prevPage, currentPage} = props;
  return (
    <div className="container-fluid bg-primary text-white">
      <div className="row">
        <div className="col-12 d-flex justify-content-between">
          <button type="button" className="btn btn-info" onClick={prevPage}>
            ⏮️
          </button>
          <h2>Current page: {currentPage}</h2>
          <button type="button" className="btn btn-info" onClick={nextPage}>
            ⏭️
          </button>
        </div>
      </div>
    </div>
  );
};
