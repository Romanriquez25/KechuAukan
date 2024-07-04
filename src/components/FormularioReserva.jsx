import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { FaTimes, FaBars } from "react-icons/fa";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import "../styles/FormularioReserva.css";

function FormularioReserva() {
  const [openMenureserva, setOpenMenureserva] = useState(false);
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");

  const toggleMenureserva = () => {
    setOpenMenureserva(!openMenureserva);
  };

  return (
    <>
      <div className="cajaMainFormulario">
        <div className="hamburger2" onClick={toggleMenureserva}>
          <p
            className={`cajaTitleReserva ${
              openMenureserva ? "hidenReserva" : ""
            }`}
          >
            Reserva
          </p>
          {openMenureserva ? <CloseIcon /> : <SendIcon />}
        </div>

        <form
          className={
            openMenureserva ? "menu-shownReserva" : "menu-hiddenReserva"
          }
        >
          <FormControl component="fieldset">
            <FormLabel component="legend">Name</FormLabel>
            <TextField
              label="Name"
              variant="outlined"
              margin="normal"
              fullWidth
            />
          </FormControl>
          <FormControl component="fieldset">
            <FormLabel component="legend">Mail</FormLabel>
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              margin="normal"
              fullWidth
              inputProps={{
                pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$",
              }}
            />
          </FormControl>
          <FormControl component="fieldset">
            <FormLabel component="legend">N° Visitantes</FormLabel>
            <TextField
              label="Name"
              variant="outlined"
              margin="normal"
              fullWidth
            />
          </FormControl>

          <FormControl component="fieldset">
            <FormLabel component="legend">Tipo De Servicio</FormLabel>
            <RadioGroup colums>
              <FormControlLabel
                value="servicio1"
                control={<Radio />}
                label="Servicio 1"
              />
              <FormControlLabel
                value="servicio2"
                control={<Radio />}
                label="Servicio2"
              />
              <FormControlLabel
                value="servicio3"
                control={<Radio />}
                label="Servicio3"
              />
            </RadioGroup>
          </FormControl>

          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
}

export default FormularioReserva;
