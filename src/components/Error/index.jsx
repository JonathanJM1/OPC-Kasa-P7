import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <section className="error">
                <h1 className="error__title">404</h1>
                <h2 className="error__subtitle">
                    Oups! La page que vous demandez n'existe pas.
                </h2>
                <NavLink className="error__link" to="/">
                    Retourner sur la page d’accueil
                </NavLink>
            </section>
        </div>
    );
};

export default Error;