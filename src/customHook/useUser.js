import React from "react";
import { setLoged } from "../action";
import { useDispatch } from "react-redux";
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
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return { loger };
};

export default useUser;
