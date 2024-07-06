import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "../src/styles/App.css";
import Index from "./views/Index";
import Contacto from "./views/Contacto";
import SobreNosotros from "./views/SobreNosotros";
import Servicios from "./views/Servicios";

function App() {
  return (
    <>
      <div className="cajaPrincipal">
        <Router>
          <Routes>
            <Route path="/kechuaukan" element={<Index />} />
            <Route path="/" element={<Index />} />
            <Route path="home" element={<Index />} />
            <Route path="contacto" element={<Contacto/>} />
            <Route path="sobreNosotros" element={<SobreNosotros/>} />
            <Route path="servicios" element={<Servicios/>} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
