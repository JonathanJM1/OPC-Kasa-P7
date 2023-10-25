import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
    // const styleCard = {
    //     linearGradient: `(190deg, #fa7c30 30%, rgba(0, 0, 0, 0)30%), url(${props.logement.cover}`,
    // };
    return (
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