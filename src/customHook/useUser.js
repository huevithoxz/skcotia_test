import React from "react";
import { setLoged } from "../action";
import { useDispatch } from "react-redux";
import { setListAddressees } from "../action";
import axios from "axios";
const useUser = () => {
  const dispatch = useDispatch();
  async function loger(user, password) {
    var config = {
      method: "get",
      url: `http://localhost:5000/api/login?user=${user}&pass=${password}`,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data.length);
        if (response.data.length > 0) {
          dispatch(setLoged(true));
          return response;
        }
        else{
            alert("Usuario o Contraseña incorrecto")
          window.location.reload()
           
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  async function deletAddressee(id) {
    var config = {
      method: "DELETE",
      url: `http://localhost:5000/api/addressee/${id}`,
    };

    axios(config)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
      
      });
  }
  
  async function addAddressee(json) {

    var config = {
      method: "post",
      url: `http://localhost:5000/api/addressee`,
      headers: { "Content-Type": "application/json" },
      data: json,
    };

    axios(config)
      .then(function (response) {
        dispatch(setListAddressees(response.data));
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return { loger,deletAddressee,addAddressee };
};

export default useUser;
