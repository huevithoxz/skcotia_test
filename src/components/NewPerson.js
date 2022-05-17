import React, { useState, useEffect } from "react";
import { Modal,Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setShowModal } from "../action";

const NewPerson = () => {
const dispatch = useDispatch()
const show = useSelector(state=>state.showModal)
  /* cierra modal */
  const handleClose = () => {
    dispatch(setShowModal(false))
  };

  return (
    <div >
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nuevo destinatario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div >
      {" "}

    
      <p>Rut</p>
  
      <input 
        className="form_input"
        placeholder="Ingrese Rut"
       
        maxLength="9"
      />

<p>Nombre/ razón social</p>
      <input
        className="form_input"
        
        placeholder="Ingrese nombre completo"
        maxLength="9"
      />
    
    <p>N° cuenta</p>
      <input
        className="form_input"
       
        placeholder="Ingrese N° de cuenta"
      />
        <p>E-mail</p>
      <input
        className="form_input"
       
        placeholder="Ingrese e-mail"
      />
        <p>Alias</p>
      <input
        className="form_input"
       
        placeholder="Ingrese un alias"
      />
        <p>Moneda</p>
      <input
        className="form_input"
       
        placeholder="Moneda"
      />
      <p>Banco</p>
      <input
        className="form_input"
       
        placeholder="Bancos"/>
      
      <Button
       
      >
        Cancelar
      </Button>
      <Button
       
      >
        Aprobar
      </Button>
    </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default NewPerson;
