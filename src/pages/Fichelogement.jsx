import React from "react";
import { Navigate, useParams } from "react-router-dom";
import cardsData from "../logements.json";

import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";
import starColor from "../assets/star_color.svg";
import starGray from "../assets/star_gray.svg";

const Fichelogement = () => {
    const params = useParams();
    let starRating = [];
    //console.log(params.id);

    const logement = cardsData.find((logement) => logement.id === params.id);
    if (logement) {
        const imagesUrl = logement.pictures.map((image) => image);
        const logementTags = logement.tags.map((tag) => (
            <li key={tag} className="ficheLogement__tags">
                {tag}
            </li>
        ));
        const [firstName, lastName] = logement.host.name.split(" ");

        for (let i = 0; i < 5; i++) {
            starRating = [
                ...starRating,
                <li key={i}>
                    <img
                        className="ficheLogement__starRating"
                        src={logement.rating > i ? starColor : starGray}
                        alt="star icon"
                    />
                </li>,
            ];
        }

        return (
            <section className="ficheLogement">
                <Slideshow imagesUrl={imagesUrl} />
                <div className="ficheLogement__index">
                    <div className="ficheLogement__main">
                        <h1>{logement.title}</h1>
                        <h4>{logement.location}</h4>
                        <ul>{logementTags}</ul>
                    </div>
                    <div className="ficheLogement__host">
                        <div className="ficheLogement__host__data">
                            <div className="ficheLogement__host__name">
                                <p>{firstName}</p>
                                <p>{lastName}</p>
                            </div>
                            <img
                                className="ficheLogement__hostpic"
                                src={logement.host.picture}
                                alt="host profile"
                            />
                        </div>
                        <ul>{starRating}</ul>
                    </div>
                </div>
                <div className="ficheLogement__data">
                    <Collapse
                        title="Description"
                        content={logement.description}
                        open={false}
                    />
                    <Collapse
                        title="Equipements"
                        content={logement.equipments}
                        open={false}
                    />
                </div>
                {/* <Link to="../" className="ficheLogement__link">
                    &larr; <span>Retour à la page d'accueil</span>
                </Link> */}
            </section>
        );
    }
    return <Navigate to="*" />;
};

export default Fichelogement;