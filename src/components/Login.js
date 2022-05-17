import React, { useState } from "react";
import { Button } from "react-bootstrap";
import useUser from "../customHook/useUser";
import { useSelector } from "react-redux";
import { AiOutlineShop,AiOutlineUser,AiOutlineLock } from "react-icons/ai";
import "../assets/style/sass/components/Login.scss";

const Login = () => {
  const [companyRut, setCompanyRut] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [flagCompany,setFlagCompany] = useState(false);
  const [flagUser,setFlagUser] = useState(false);
  const [flagPass,setFlagPass] = useState(false);
  const { loger } = useUser();
  const loged = useSelector((state) => state.loged);
  const handleCompany = (e) => {
    var company = e.target.value;
    if(company.length>0)
    {
        setFlagCompany(false)
    }
    setCompanyRut(company);
  };
  const handleUser = (e) => {
    var usr = e.target.value;
    if(usr.length>0)
    {
        setFlagUser(false)
    }
    setUser(usr);
  };
  const handlePassword = (e) => {
    var pass = e.target.value;
    if(pass.length>0)
    {
        setFlagPass(false)
    }
    setPassword(pass);
  };
  const handleSignIn = () => {
    if(companyRut.length>0 && user.length>0 && password.length>0)
    {
        loger(user, password);}
    else
    {
        setFlagCompany(true)
        setFlagUser(true)
        setFlagPass(true)
    }
    
  };

  return (
    <div className="login shadow p-3 mb-5 bg-white rounded">
      {" "}
      <h2>Bienvenido a su Portal Empresa</h2>
      <p>Acceda al portal ingresando sus datos</p>
      <p></p>
      <AiOutlineShop className="icon" size={"20"}/>
      <input 
        className="form_input"
        placeholder="RUT Empresa"
        onChange={(e) => {
          handleCompany(e);
        }}
        maxLength="9"
      />
      {
          flagCompany==false ? <p></p> : <p className="error">Ingrese Rut compañia</p>
      }
      
      <AiOutlineUser className="icon" size={"20"}/>
      <input
        className="form_input"
        onChange={(e) => {
          handleUser(e);
        }}
        placeholder="RUT Usuario"
        maxLength="9"
      />
       {
          flagUser==false ? <p></p> : <p className="error">Ingrese Rut usuario</p>
      }
      <AiOutlineLock className="icon" size={"20"}/>
      <input
        className="form_input"
        type={"password"}
        onChange={(e) => {
          handlePassword(e);
        }}
        placeholder="Clave"
      />
      {
          flagPass==false ? <p></p> : <p className="error">Ingrese Contraseña</p>
      }
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
