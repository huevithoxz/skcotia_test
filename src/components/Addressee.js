import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import useGetList from "../customHook/useGetList";
import { Table, Button } from "react-bootstrap";
import Header from "./Header";
import { setShowModal } from "../action";
import NewPerson from "./NewPerson";
const Addressee = () => {
  const { getAddressess } = useGetList();
  const dispatch = useDispatch();
  useEffect(() => {
    getAddressess();
  }, []);
  const list = useSelector((state) => state.addressees);
  const handleShowModal = () => {
    dispatch(setShowModal(true));
  };
  console.log(list);
  return (
    <div>
      <NewPerson />
      <Header />
      <h2>Destinatarios</h2>
      <input placeholder="Buscar" />{" "}
      <Button
        onClick={() => {
          handleShowModal();
        }}
      >
        Agregar
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Rut</th>
            <th>Nombre</th>
            <th>Alias</th>
            <th>Banco</th>
            <th>Cuenta</th>
          </tr>
        </thead>
        <tbody>
          {list.map((value, i) => {
            console.log(value, i);
            return (
              <>
                <tr key={i}>
                  <td>{value.rut}</td>
                  <td>{value.name}</td>
                  <td>{value.alias}</td>
                  <td>{value.detail.bank_name}</td>
                  <td>{value.detail.acc_numbr}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Addressee;
