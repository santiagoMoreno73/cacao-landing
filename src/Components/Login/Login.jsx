import { useState } from "react";
// services
import { login } from "../../services/auth/auth";
// redux
import { useDispatch } from "react-redux";
import { addToken, addUser } from "../../redux/userSlice";
// components
import Register from "../Register/Register";
import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  const [register, setRegister] = useState(false);
  const [formState, setFormState] = useState({
    values: {
      user: "",
      password: "",
    },
    validations: {
      user: "",
      password: "",
    },
  });
  const { user: userVal, password: passwordVal } = formState.validations;

  const handleRegister = () => {
    setRegister(!register);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState(() => ({
      values: {
        ...formState.values,
        [name]: value,
      },
      validations: { ...formState.validations },
    }));
  };

  const validateAll = () => {
    const { user, password } = formState.values;
    const validations = { user: "", password: "" };
    let isValid = true;

    if (!user) {
      validations.user = "Usuario es requerido";
      isValid = false;
    }

    if (!password) {
      validations.password = "Contraseña es requerida";
      isValid = false;
    }

    if (!isValid) {
      setFormState(() => ({
        values: { ...formState.values },
        validations: validations,
      }));
    }

    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateAll();

    if (!isValid) return false;

    const values = formState.values;
    login(values)
      .then(({ data }) => {
        if (data && data.status == 200 && data.body) {
          const token = data.body.token;
          const user = data.body.user[0];

          dispatch(addUser(user));
          dispatch(addToken(token));
        }
      })
      .catch((error) => {
        console.log("error", error);
        toast.error("Error, no es posible iniciar sesion");
      });
  };

  return (
    <div className="login">
      {!register ? (
        <form onSubmit={handleSubmit}>
          <div className="inputDiv">
            <label htmlFor="user">Correo Electrónico</label>
            <input
              type="text"
              name="user"
              id="user"
              value={formState.values.user}
              onChange={handleChange}
              placeholder="Ingresa tu correo electrónico"
            />
            <span className="has-error">{userVal}</span>
          </div>
          <div className="inputDiv">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formState.values.password}
              onChange={handleChange}
              placeholder="Ingresa tu contraseña"
            />
            <span className="has-error">{passwordVal}</span>
          </div>

          <div className="buttonsDiv">
            <button type="submit" className="btn">
              Login
            </button>
          </div>

          <div className="registerDiv">
            <p>No tienes una cuenta ?</p>
            <a onClick={handleRegister}>Registrate</a>
          </div>
        </form>
      ) : (
        <>
          <Register handleRegister={handleRegister} />
        </>
      )}
    </div>
  );
};

export default Login;
