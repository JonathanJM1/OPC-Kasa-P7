import React from "react";
import collapseUp from "../../assets/arrowup.png";

function Collapse(props) {
  // Utiliser l'état local "collapse" pour gérer l'ouverture/fermeture du contenu
  const [collapse, setCollapse] = React.useState(props.open);

  // Détermine le contenu en fonction du titre
  let content = props.content;
  if (props.title === "Equipements") {
    content = props.content.map((equipement, index) => (
      // Utiliser un attribut "key" unique pour chaque élément de la liste
      <li key={index}>{equipement}</li>
    ));
  }

  // Gérer le clic pour basculer l'état du "collapse"
  function handleClick() {
    setCollapse((prevCollapse) => !prevCollapse);
  }

  return (
    <div className="collapse">
      <p className="collapse__title">
        {props.title}
        <img
          src={collapseUp}
          className={
            collapse
              ? "collapse__button collapse__up"
              : "collapse__button collapse__down"
          }
          alt="collapse"
          onClick={handleClick}
        />
      </p>
      {collapse && (
        <div className="collapse__content">
          {content}
        </div>
      )}
    </div>
  );
}

export default Collapse;
