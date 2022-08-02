import React from "react";

export const CardCharacter = (props) => {
  const {name, species, status, image, location} = props;
    const styleColCards = {
        minHeight: "25rem",
        margin:"1rem 0"
    }
    const styleCards = {
        height: "100%",
    }
    return (
    <div className="col-xs-12 col-sm-3" style={styleColCards}>
      <div className="card" style={styleCards}>
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            {species} - {status}
          </p>
          <div className="btn btn-primary">
            Location : {location}
          </div>
        </div>
      </div>
    </div>
  );
};
