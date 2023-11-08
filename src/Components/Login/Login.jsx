const Login = () => {
  return (
    <div className="login">
      <div className="inputDiv">
        <label htmlFor="email">Correo Electrónico</label>
        <input
          type="text"
          name="email"
          placeholder="Ingresa tu correo electrónico"
        />
      </div>
      <div className="inputDiv">
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          name="password"
          placeholder="Ingresa tu contraseña"
        />
      </div>

      <div className="buttonsDiv">
        <button className="btn">Login</button>
      </div>

      <div className="registerDiv">
        <p>No tienes una cuenta ?</p>
        <a href="">Registrate</a>
      </div>
    </div>
  );
};

export default Login;
