import React from "react";
import "../styles/BodyIndex.css";
import Box from "@mui/material/Box";
import WovenImageList from "./WovenImageList"; // Asegúrate de que la ruta sea correcta
import { Typography } from "@mui/material";
import ContactoLineas from "./ContactoLineas"; // Asegúrate de que la ruta sea correcta
const BodyIndex = () => {
  return (
    <>
      <div className="cajaBodyIndex">
        <div className="cajaImgMain">
          <Box
            sx={{
              width: "100%", // Ajusta el ancho según necesites
              height: "500px", // Se ajusta para expandirse según el contenido
              backgroundImage: 'url("img/enviadaBannerUrbano.jpg")', // Asegúrate de que la ruta de la imagen sea correcta
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "30% 30%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly", // Cambiado para alinear contenido desde el inicio
              alignItems: "center",
            }}
          >
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
                fontWeight: '400',
                
              }}
            >
              ¡Descubre Kechuaukan! Un centro de eventos vibrante y
              acogedor, perfecto para celebraciones familiares y reuniones
              corporativas. Reserva ahora y disfruta de un espacio moderno y
              equipado para hacer de tu evento una experiencia inolvidable.
            </Typography>
          </Box>
        </div>
        <div className="cajaImgLis">
          <WovenImageList />
        </div>
        <div className="cajaFormulario">
         
          <ContactoLineas />
        </div>
      </div>
    </>
  );
};

export default BodyIndex;
