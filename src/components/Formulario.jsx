const Formulario = () => {
  return (
    <>
      <div className="cajaFormulario">
        <form>
          <label>Nombre:</label>
          <input type="text" name="nombre" required />
          <br />
          <label>Apellido:</label>
          <input type="text" name="apellido" required />
          <br />
          <label>Email:</label>
          <input type="email" name="email" required />
          <br />
        </form>
      </div>
    </>
  );
};

export default Formulario;
