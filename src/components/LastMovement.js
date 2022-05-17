import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import useGetList from "../customHook/useGetList";
import { Table, Button } from "react-bootstrap";
import Header from "./Header";
const LastMovement = () => {
  const { getLastMovements } = useGetList();
  useEffect(() => {
    getLastMovements();
  }, []);
  const list = useSelector((state) => state.movements);
  console.log(list);
  return (
    <div>
      <Header />
      <h4>Cuentas</h4>
      <h2>Ultimos Movimientos</h2>
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
          {
            /*  <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr> */
            list.map((value, i) => {
              console.log(value, i);
              return (
                <>
                  <tr key={i}>
                    <td >{value.date}</td>
                    <td >{value.description}</td>
                    <td >{value.operationRef}</td>
                    <td >{value.amount}</td>
                    <td >{value.balance}</td>
                  </tr>
                </>
              );
            })
          }
        </tbody>
      </Table>
    </div>
  );
};

export default LastMovement;
