import React, { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import "../styles/FormularioReserva.css";
import BasicDateCalendar from "./Calendario"; // Importa el nuevo componente de calendario
import { Typography } from "@mui/material";
import { set } from "date-fns";


function FormularioReserva() {
  // Estado para controlar la visibilidad del menú de reserva
  const [openMenureserva, setOpenMenureserva] = useState(false);

  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    visitantes: "",
    servicio: "",
    fecha: "", // Inicializa como string vacío para un solo valor de fecha
    comentarios: "",
  });

  const [mensaje, setMensaje] = useState(''); // Estado para mostrar mensajes de error

  

  // Define un tema personalizado para los componentes de Material-UI
  const theme = createTheme({
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'green', // Color del borde por defecto
              },
              '&:hover fieldset': {
                borderColor: 'orange', // Color del borde al pasar el mouse
              },
              '& .MuiInputBase-input': {
                color: 'green', // Color del texto
              },
            },
          },
        },
      },
    },
  });

  // Manejador de cambio de entrada del formulario
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Efecto para mostrar los datos actualizados del formulario en la consola
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  // Manejador de cambio de fecha
  const handleDateChange = (newDate) => {
    let formattedDate = "";

    if (newDate instanceof Date && !isNaN(newDate)) {
      const day = newDate.getDate().toString().padStart(2, "0");
      const month = (newDate.getMonth() + 1).toString().padStart(2, "0");
      const year = newDate.getFullYear();

      formattedDate = `${day}-${month}-${year}`;
    } else if (typeof newDate === "string") {
      formattedDate = newDate;
    } else {
      console.warn("Fecha no válida:", newDate);
    }

    setFormData((prevState) => ({
      ...prevState,
      fecha: formattedDate,
    }));
  };

  // Manejador para alternar la visibilidad del menú de reserva
  const toggleMenureserva = () => {
    setOpenMenureserva(!openMenureserva);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validarFormulario()) {
      console.log('Formulario válido, enviar datos:', formData);
      setMensaje('Formulario enviado con éxito.');
      
    } else {
      setMensaje('Por favor, complete todos los campos.');
    }
  };




  const validarFormulario = () => {
    // Verifica si alguno de los campos está vacío
    for (let name in formData) {
      if (!formData[name]) {
        return false;
      }
    }
    return true;
  };

  

  return (
    <ThemeProvider theme={theme}>
      <div className="cajaMainFormulario">
        
        <div className="hamburger2" onClick={toggleMenureserva}>
          <p className={`cajaTitleReserva ${openMenureserva ? "hidenReserva" : ""}`}>
            Reserva
          </p>
          {openMenureserva ? <CloseIcon /> : <SendIcon />}
        </div>

        <form
          className={openMenureserva ? "menu-shownReserva" : "menu-hiddenReserva"}
          onSubmit={handleSubmit}
        > 
           <Typography  variant="h4" component="h1" className="titleReserva"
           
           >
            Reserva
          </Typography>
          <FormControl component="fieldset">
            <FormLabel component="legend"></FormLabel>
            <TextField
              name="nombre"
              label="Nombre Completo"
              variant="outlined"
              margin="normal"
              color="success"
              onChange={handleChange}
              fullWidth
            />
          </FormControl>

          <FormControl component="fieldset">
            <FormLabel component="legend"></FormLabel>
            <TextField
              name="email"
              label="Email"
              type="email"
              variant="outlined"
              margin="normal"
              onChange={handleChange}
              fullWidth
              inputProps={{
                pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
              }}
            />
          </FormControl>

          <FormControl component="fieldset">
            <FormLabel component="legend"></FormLabel>
            <TextField
              name="telefono"
              label="Número de teléfono"
              type="tel"
              variant="outlined"
              margin="normal"
              fullWidth
              onChange={handleChange}
              inputProps={{
                pattern: "\\+?[1-9]\\d{1,14}",
              }}
            />
          </FormControl>

          <FormControl component="fieldset">
            <FormLabel component="legend"></FormLabel>
            <TextField
              name="visitantes"
              label="N° Visitantes"
              variant="outlined"
              margin="normal"
              onChange={handleChange}
              fullWidth
            />
          </FormControl>

          <FormControl component="fieldset">
            <FormLabel component="legend">Tipo De Servicio</FormLabel>
            <RadioGroup onChange={handleChange}>
              <FormControlLabel
                name="servicio"
                value="servicio1"
                control={<Radio />}
                label="Servicio 1"
              />
              <FormControlLabel
                name="servicio"
                value="servicio2"
                control={<Radio />}
                label="Servicio 2"
              />
              <FormControlLabel
                name="servicio"
                value="servicio3"
                control={<Radio />}
                label="Servicio 3"
              />
            </RadioGroup>
          </FormControl>

          <FormControl component="fieldset">
            <FormLabel component="legend"></FormLabel>
            <BasicDateCalendar onChange={handleDateChange} />
          </FormControl>

          <FormControl component="fieldset">
            <FormLabel component="legend"></FormLabel>
            <TextField
              name="comentarios"
              label="Comentarios Adicionales"
              variant="outlined"
              margin="normal"
              onChange={handleChange}
              fullWidth
            />
          </FormControl>

          <Button type="submit" variant="outlined">Enviar</Button>
        </form>
      </div>
    </ThemeProvider>
  );
}

export default FormularioReserva;
