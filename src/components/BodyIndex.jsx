import React from "react";
import "../styles/BodyIndex.css";
import Box from "@mui/material/Box";
import WovenImageList from "./WovenImageList"; // Asegúrate de que la ruta sea correcta
import { Typography } from "@mui/material";
import ContactoLineas from "./ContactoLineas"; // Asegúrate de que la ruta sea correcta
import Footer from "./Footer";
const BodyIndex = () => {
  return (
    <>
      <div className="cajaBodyIndex">
          

          <WovenImageList />
          <ContactoLineas />
       
       
       
      </div>
    </>
  );
};

export default BodyIndex;
