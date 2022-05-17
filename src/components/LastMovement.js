import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import useGetList from "../customHook/useGetList";
import { Table, Button } from "react-bootstrap";
import Header from "./Header";
import "../assets/style/sass/components/Last-movements.scss"
import Search from "./Search";
const LastMovement = () => {
  const { getLastMovements } = useGetList();
  const list = useSelector((state) => state.movements);
  useEffect(() => {
      if(list.length === 0)
      {
          getLastMovements();
        
       }
    
  }, []);
  
  console.log(list);
  return (
      <div> <Header />  <div className="last-movements">
 
      <h4>Cuentas</h4>
      <h2>Ultimos Movimientos</h2>
      <hr></hr>
      <Search/>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Descripción</th>
            <th>N° Operación</th>
            <th>Monto</th>
            <th>saldo</th>
          </tr>
        </thead>
        <tbody>
          {list.map((value, i) => {
            console.log(value.amount.substr(0,1));
            return (
              <>
                <tr key={i}>
                  <td>{value.date}</td>
                  <td>{value.description}</td>
                  <td>{value.operationRef}</td>
                  <td className={value.amount.substr(0,1) === "-" ? "negative" : null}>{value.amount}</td>
                  <td className={value.balance.substr(0,1) === "-" ? "negative" : null}>{value.balance}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </div></div>
  
  );
};

export default LastMovement;
