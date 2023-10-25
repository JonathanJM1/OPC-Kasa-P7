import React from "react";

function Banner(props) {
  // En fonction de la valeur de props.h1, il affiche ou non un titre
  return (
    <section className="banner">
      <div className={"banner__" + props.div + "img"}>
        {props.h1 && <h1 className="banner__title">{props.title}</h1>}
      </div>
    </section>
  );
}

export default Banner;