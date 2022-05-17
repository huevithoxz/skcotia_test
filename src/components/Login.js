import React, { useState } from "react";
import { Button } from "react-bootstrap";
import useUser from "../customHook/useUser";
import { useSelector } from "react-redux";

const Login = () => {
  const [companyRut, setCompanyRut] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const { loger } = useUser();
  const loged = useSelector((state) => state.loged);
  const handleCompany = (e) => {
    var company = e.target.value;
    setCompanyRut(company);
  };
  const handleUser = (e) => {
    var usr = e.target.value;
    setUser(usr);
  };
  const handlePassword = (e) => {
    var pass = e.target.value;
    setPassword(pass);
  };
  const handleSignIn = () => {
    loger(user, password);
  };

  return (
    <div>
      {" "}
      <h2>Bienvenido a su Portal Empresa</h2>
      <p>Accede al portal ingresando sus datos</p>
      <p>Rut empresa</p>
      <input
        onChange={(e) => {
          handleCompany(e);
        }}
        maxLength="9"
      ></input>
      <p>Rut Usuario</p>
      <input
        onChange={(e) => {
          handleUser(e);
        }}
        maxLength="9"
      ></input>
      <p>Clave</p>
      <input
        type={"password"}
        onChange={(e) => {
          handlePassword(e);
        }}
      ></input>
      <Button
        onClick={() => {
          handleSignIn();
        }}
      >
        Ingresar
      </Button>
    </div>
  );
};

export default Login;
