import React from "react";

const Card = (personas) => {
     return(
        <div>
          <h2> Colores </h2>
          {personas.map((persona, index)=>(
            <div key={index} className="card">
              <h3>{persona.nombre} {persona.color} </h3>
              </div>
          ))}
        </div>
      );
};

export default Card;