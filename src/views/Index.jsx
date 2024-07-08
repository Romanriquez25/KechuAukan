import React from "react";
import Header from "../components/Header";
import BodyIndex from "../components/BodyIndex";
import Footer from "../components/Footer";
import { Box } from "@mui/material";
import FormularioReserva from "../components/FormularioReserva";

const Index = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          overflowY: "auto" // Asegura que solo el contenedor principal tenga el comportamiento de scroll
        }}
      >
        <Header />
        <Box
          sx={{
            flex: 1, // Permite que el contenido principal ocupe el espacio disponible
            display: "flex",
            flexDirection: "column"
          }}
        >
          <BodyIndex />
          <FormularioReserva />
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Index;
