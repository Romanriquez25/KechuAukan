import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="header">
      <div className="title">
        <h1>
          <span className="fontL">K</span>echu <span className="fontL">A</span>
          ukan
        </h1>
      </div>
      <nav className="navbar">
        <div className="hamburger" onClick={toggleMenu}>
          {openMenu ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={openMenu ? "menu-shown" : "menu-hidden"}>
          <li>
            <Link className="link" to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/servicios">
              Servicios
            </Link>
          </li>
          <li>
            <Link className="link" to="/sobrenosotros">
              Sobre Nosotros
            </Link>
          </li>
          <li>
            <Link className="link" to="/contacto">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
