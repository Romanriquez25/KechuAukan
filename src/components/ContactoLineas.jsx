import React from "react";
import { Typography, Link, Box } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import InfoIcon from '@mui/icons-material/Info';

const ContactSection = () => {
  return (
    <Box sx={{ textAlign: "center", p: 2 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        CONTÁCTANOS
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        <WhatsAppIcon sx={{ verticalAlign: "middle", mr: 1 }} />
        <Link href="https://wa.me/yourwhatsapplink" target="_blank" rel="noopener" color="inherit">
          Escríbanos un WhatsApp AQUÍ
        </Link>
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        <EmailIcon sx={{ verticalAlign: "middle", mr: 1 }} />
        <Link href="mailto:reservas@kechuaukan.cl" color="inherit">
          reservas@kechuaukan.cl
        </Link>
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        <InfoIcon sx={{ verticalAlign: "middle", mr: 1 }} />
        Información sobre objetos perdidos
      </Typography>
    </Box>
  );
};

export default ContactSection;
