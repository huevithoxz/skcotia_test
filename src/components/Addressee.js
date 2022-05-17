import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import useGetList from "../customHook/useGetList";
import { Table, Button } from "react-bootstrap";
import Header from "./Header";
import { setShowModal,setDeleteAddressee } from "../action";
import NewPerson from "./NewPerson";
import { AiOutlineDelete } from "react-icons/ai";
import "../assets/style/sass/components/Addresseess.scss";
import useUser from "../customHook/useUser";

import Search from "./Search";
import Paginate from "./Paginate";
const Addressee = () => {
  const { getAddressess } = useGetList();
  const {deletAddressee} = useUser();
  const dispatch = useDispatch();
  const list = useSelector((state) => state.addressees);
  
  useEffect(() => {
    if (list.length === 0) {
     
      getAddressess();
    }
  }, []);

  const handleShowModal = () => {
    dispatch(setShowModal(true));
  };
const handleDelete =(value) =>
{
  
  dispatch(setDeleteAddressee(value))
  deletAddressee(value)
  
}
  return (
    <div>
      <NewPerson />
      <Header />
      <div className="addressee">
        <h2>Destinatarios</h2>
        <Search  flag={"add"}/>
        <Button
          variant="danger"
          onClick={() => {
            handleShowModal();
          }}
        >
          Agregar
        </Button>
        <hr />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Rut</th>
              <th>Nombre</th>
              <th>Alias</th>
              <th>Banco</th>
              <th>Cuenta</th>
              <th></th>
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
                    <td>{value.detail.acc_numbr} </td>
                    <AiOutlineDelete className="delete" size={"40"} onClick={() => {handleDelete(value.id)}} />
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>
     
      </div>
    </div>
  );
};

export default Addressee;
