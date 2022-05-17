import React from 'react'
import { setLoged } from '../action';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setListMovements,setListAddressees } from '../action';
const useGetList = () => {

    const dispatch = useDispatch()
    async function getLastMovements() {

          var config = {
          method: "get",
          url: `http://localhost:5000/api/lastmov`,
        };
    
        axios(config)
          .then(function (response) {
           console.log(response.data)
           response.data.map((value)=>
           {
            dispatch(setListMovements(value))}
           )
           return response
    
            
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      async function getAddressess() {

        var config = {
        method: "get",
        url: `http://localhost:5000/api/addressee`,
      };
  
      axios(config)
        .then(function (response) {
         console.log(response.data)
         response.data.map((value)=>
         {
          dispatch(setListAddressees(value))}
         )
         return response
  
          
        })
        .catch(function (error) {
          console.log(error);
        });
    }
      return{getLastMovements,getAddressess}
}

export default useGetList