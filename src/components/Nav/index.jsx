import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/kasa.png";

const Nav = () => {
    return (
        <nav className="nav">
            <NavLink to="/">
                <img className="nav__img" src={Logo} alt="logo" />
            </NavLink>
            <ul className="nav__link">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "nav__link__item nav__link__active"
                            : "nav__link__item"
                    }
                >
                    Accueil
                </NavLink>

                <NavLink
                    to="/apropos"
                    className={({ isActive }) =>
                        isActive
                            ? "nav__link__item nav__link__active"
                            : "nav__link__item"
                    }
                >
                    A Propos
                </NavLink>
            </ul>
        </nav>
    );
};

export default Nav;