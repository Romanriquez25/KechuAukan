import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import "../styles/Header.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Typography, Box, Button } from "@mui/material";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <Box className="header">
      <Box className="cajaHeaderContent1">
        <Box className="cajaHeaderContent2">
          <Box className="cajaTitle">
            <Typography variant="h2" component="h1" className="title">
              <span className="fontL">K</span>echu
            </Typography>
            <Typography variant="h2" component="h1" className="title">
              <span className="fontL2">A</span>ukan
            </Typography>
          </Box>
          <Box className="hamburger" onClick={toggleMenu}>
            {openMenu ? <FaTimes /> : <FaBars />}
          </Box>
        </Box>
        <Box className="cajaHeaderContent3">
            <Typography
              variant="h3"
              component="h1"
              sx={{
                color: "black",
                fontSize: "25px",
                width: "100%",
                padding: "10px",
                textAlign: "center",
                fontWeight: "lighter",
                fontFamily: "Poppins",
                backgroundColor: "rgba(175, 239, 248, 0.5)",
                opacity: 0,
                transform: "translateY(20px)", // Ajusta el valor según necesites
                animation: "slideUp 0.5s ease forwards", // Asegúrate de que el nombre de la animación coincida
                animationDelay: "0.5s",
              }}
            >
              Centro de Eventos y recreación
            </Typography>

            <Typography
              color="black"
              textAlign="center"
              fontWeight="lighter"
              fontFamily="Poppins"
              backgroundColor="rgba(175, 239, 248, 0.5)"
              sx={{
                opacity: 0,
                transform: "translateY(20px)", // Ajusta el valor según necesites
                animation: "slideUp 0.5s ease forwards", // Asegúrate de que el nombre de la animación coincida
                animationDelay: "1s",
                fontWeight: "400",
              }}
            >
              ¡Descubre Kechuaukan! Un centro de eventos vibrante y acogedor,
              perfecto para celebraciones familiares y reuniones corporativas.
              Reserva ahora y disfruta de un espacio moderno y equipado para
              hacer de tu evento una experiencia inolvidable.
            </Typography>
          
        </Box>
      </Box>

      <Box className="navbar">
        <Box component="ul" className={openMenu ? "menu-shown" : "menu-hidden"}>
          <li>
            <Button component={RouterLink} to="/" className="link">
              Home
            </Button>
          </li>
          <li>
            <Button component={RouterLink} to="/servicios" className="link">
              Servicios
            </Button>
          </li>
          <li>
            <Button component={RouterLink} to="/sobrenosotros" className="link">
              Sobre Nosotros
            </Button>
          </li>
          <li>
            <Button component={RouterLink} to="/contacto" className="link">
              Contacto
            </Button>
          </li>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
