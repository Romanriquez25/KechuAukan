import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Typography } from "@mui/material";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <div className="header">
        <div className="cajaTitle">
          <Typography variant="h2" component="h1" className="title">
            <span className="fontL">K</span>echu
          </Typography>
          <Typography variant="h2" component="h1" className="title">
            <span className="fontL2">A</span>ukan
          </Typography>
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
      <style jsx global>{`
        @keyframes growIn {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
        }
        @keyframes shrinkOut {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(0);
          }
        }
      `}</style>
    </>
  );
};

export default Header;
