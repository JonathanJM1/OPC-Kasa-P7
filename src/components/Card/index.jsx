import React from "react";
// Importer le composant "Link" de react-router-dom
import { Link } from "react-router-dom";

const Card = (props) => {

    return (
        // Créer un lien vers une page en utilisant "Link"
        <Link to={`fichelogement/${props.logement.id}`}>
            <div className="card">
                <img
                    src={props.logement.cover}
                    className="card__img "
                    alt="profile"
                />
                <div className="card__img__gradient"></div>
                <h2 className="card__img__title">{props.logement.title}</h2>
            </div>
        </Link>
    );
};

export default Card;
