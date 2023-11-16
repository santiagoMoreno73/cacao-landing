import PropTypes from "prop-types";
import { useState } from "react";
//  misc
import { emailRegexp } from "../../misc/misc";
// services
import { createUser } from "../../services/auth/auth";
// toast
import { toast } from "react-toastify";

const Register = ({ handleRegister }) => {
  const [formState, setFormState] = useState({
    values: {
      name: "",
      user: "",
      email: "",
      address: "",
      password: "",
      active: 1,
    },
    validations: {
      name: "",
      user: "",
      email: "",
      address: "",
      password: "",
    },
  });
  const {
    name: nameVal,
    user: userVal,
    email: emailVal,
    address: addressVal,
    password: passwordVal,
  } = formState.validations;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState((prevFormState) => ({
      ...prevFormState,
      values: {
        ...formState.values,
        [name]: value,
      },
    }));
  };

  const handleOneValidation = (event) => {
    const { name, value } = event.target;
    let message = "";

    if (value && name == "name" && (value.length < 3 || value.length > 30)) {
      message = "El nombre debe contener entre 3 y 30 carácteres";
    }

    if (value && name == "user" && (value.length < 4 || value.length > 10)) {
      message = "El usuario debe contener entre 4 y 10 carácteres";
    }

    if (value && name == "email" && !emailRegexp.test(value)) {
      message = "El formato de email debe ser: ejemplo@hotmail.com";
    }

    if (value && name == "password" && (value.length < 4 || value.length > 8)) {
      message = "La contraseña debe contener entre 4 y 8 carácteres";
    }

    setFormState((prevFormState) => ({
      ...prevFormState,
      validations: { ...formState.validations, [name]: message },
    }));
  };

  const validateAll = () => {
    const { name, email, user, address, password } = formState.values;
    const validations = {
      name: "",
      email: "",
      user: "",
      address: "",
      password: "",
    };
    let isValid = true;

    if (!name) {
      validations.name = "Nombre es requerido";
      isValid = false;
    }

    if (!email) {
      validations.email = "Email es requerido";
      isValid = false;
    }

    if (!user) {
      validations.user = "Usuario es requerido";
      isValid = false;
    }

    if (!address) {
      validations.address = "Dirección es requerida";
      isValid = false;
    }

    if (!password) {
      validations.password = "Contraseña es requerida";
      isValid = false;
    }

    if (!isValid) {
      setFormState((prevFormState) => ({
        ...prevFormState,
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

    createUser(values)
      .then(() => {
        toast.success("Usuario registrado correctamente");
        setTimeout(() => {
          handleRegister();
        }, 2000);
      })
      .catch((error) => {
        console.log("error", error);
        toast.error("El usuario no fue registrado correctamente");
      });
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="inputDiv">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formState.values.name}
            onChange={handleChange}
            onBlur={handleOneValidation}
            placeholder="Ingresa tu nombre completo"
          />
          <span className="has-error">{nameVal}</span>
        </div>
        <div className="inputDiv">
          <label htmlFor="user">Usuario</label>
          <input
            type="text"
            name="user"
            id="user"
            value={formState.values.user}
            onChange={handleChange}
            onBlur={handleOneValidation}
            placeholder="Ingresa tu usuario"
          />
          <span className="has-error">{userVal}</span>
        </div>
        <div className="inputDiv">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formState.values.email}
            onChange={handleChange}
            onBlur={handleOneValidation}
            placeholder="Ingresa tu email"
          />
          <span className="has-error">{emailVal}</span>
        </div>
        <div className="inputDiv">
          <label htmlFor="address">Dirección</label>
          <input
            name="address"
            id="address"
            value={formState.values.address}
            onChange={handleChange}
            placeholder="Ingresa tu dirección"
          />
          <span className="has-error">{addressVal}</span>
        </div>
        <div className="inputDiv">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formState.values.password}
            onChange={handleChange}
            onBlur={handleOneValidation}
            placeholder="Ingresa tu contraseña"
          />
          <span className="has-error">{passwordVal}</span>
        </div>
        <div className="buttonsDiv">
          <button className="btn" onClick={handleRegister}>
            Cancelar
          </button>
          <button className="btn" type="submit">
            Registrarse
          </button>
        </div>
      </form>
    </div>
  );
};

Register.propTypes = {
  handleRegister: PropTypes.func,
};

export default Register;
