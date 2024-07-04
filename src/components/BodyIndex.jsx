import React from "react";
import "../styles/BodyIndex.css";
import Box from "@mui/material/Box";
import WovenImageList from "./Carrusel"; // Asegúrate de que la ruta sea correcta
import { Typography } from "@mui/material";
import FormularioReserva from "./FormularioReserva";

const BodyIndex = () => {
  return (
    <>
      <div className="cajaBodyIndex">
        <div className="cajaImgMain">
          <Box
            sx={{
              width: "100%", // Ajusta el ancho según necesites
              height: "500px", // Ajusta la altura según necesites
              backgroundImage: 'url("/img/enviadaBannerUrbano.jpg")', // Asegúrate de que la ruta de la imagen sea correcta
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "30% 30%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center ",
            }}
          >
            <Typography
              variant="h3"
              component="h1"
              sx={{
                color: "#5d2e74",
                textAlign: "center",
                fontWeight: "lighter",
                fontFamily: "poppins",
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                opacity: 0,
                transform: "translateY(20px)", // Ajusta el valor según necesites
                animation: "slideUp 0.5s ease forwards", // Asegúrate de que el nombre de la animación coincida
                animationDelay: "0.5s",
              }}
            >
            </Typography>
          </Box>
        </div>
        <div className="cajaImgLis">
          <WovenImageList />
        </div>
        

      </div>
    </>
  );
};

export default BodyIndex;
