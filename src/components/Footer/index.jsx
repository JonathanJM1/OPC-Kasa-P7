import React from "react";
import Logofooter from "../../assets/logofooter.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      {/* Crée un lien vers la page d'accueil */}
      <Link to="/">
        <img className="footer__img" src={Logofooter} alt="Logo Kasa" />
      </Link>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
