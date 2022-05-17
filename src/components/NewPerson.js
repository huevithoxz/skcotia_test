import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
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
          <Modal.Title>Agrega nuevo contacto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>hola</div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default NewPerson;
