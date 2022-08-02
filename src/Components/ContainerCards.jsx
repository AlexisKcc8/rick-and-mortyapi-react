import React from "react";
import { CardCharacter } from "./CardCharacter";

export const ContainerCards = (props) => {
  const { data } = props;
  return (
    <div className="container">
      <div className="row">
      {data &&
          data.map((el) => (
            <CardCharacter key={el.id} 
                name={el.name}
                species={el.species}
                status={el.status}
                image={el.image}
                location={el.location.name}
            />
          ))}
      </div>
    </div>
  );
};
