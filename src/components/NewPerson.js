import React, { useState, useEffect } from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setShowModal } from "../action";
import useUser from "../customHook/useUser";
import "../assets/style/sass/components/NewPerson.scss";

const NewPerson = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.showModal);
  const list = useSelector((state) => state.addressees);
  const { addAddressee } = useUser();
  /* cierra modal */

  const [rut, setRut] = useState("");
  const [name, setName] = useState("");
  const [account, setAccount] = useState("");
  const [email, setEmail] = useState("");
  const [alias, setAlias] = useState("");
  const [currency, setCurrency] = useState("");
  const [bank, setBank] = useState("");
  const [flagUser, setFlagUser] = useState("");
  const [id, setId] = useState(0);
  const handleClose = () => {
    dispatch(setShowModal(false));
    setRut("");
    setName("");
    setAccount("");
    setEmail("");
    setAlias("");
    setCurrency("");
    setBank("");
    setFlagUser("");
  };
  const handleRut = (e) => {
    var rt = e.target.value;
    if (rt.length > 0) {
      setFlagUser(false);
    }
    setRut(rt);
  };
  const handleName = (e) => {
    var nm = e.target.value;
    if (nm.length > 0) {
      setFlagUser(false);
    }
    setName(nm);
  };
  const handleAccount = (e) => {
    var acc = e.target.value;
    if (acc.length > 0) {
      setFlagUser(false);
    }
    setAccount(acc);
  };
  const handleEmail = (e) => {
    var em = e.target.value;
    if (em.length > 0) {
      setFlagUser(false);
    }
    setEmail(em);
  };
  const handleAlias = (e) => {
    var al = e.target.value;
    if (al.length > 0) {
      setFlagUser(false);
    }
    setAlias(al);
  };
  const handleCurrency = (e) => {
    var cur = e.target.value;
    if (cur.length > 0) {
      setFlagUser(false);
    }
    setCurrency(cur);
  };
  const handleBank = (e) => {
    var bnk = e.target.value;
    if (bnk.length > 0) {
      setFlagUser(false);
    }
    setBank(bnk);
  };
  const handleSendData = () => {
    var json = {
      id: id,
      rut: rut,
      name: name,
      alias: alias,
      detail: {
        currency: currency,
        acc_numbr: account,
        adr_email: email,
        bank_id: "37",
        bank_name: bank,
      },
    };
    if ((rut, name, account, email, alias, currency, bank !== "")) {
      addAddressee(json);
      setId(list.length + 1);
      setTimeout(() => {
        handleClose();
      }, 2000);
    }
    console.log(rut, name, account, email, alias, currency, bank, id);
  };
  return (
    <div>
      <Modal show={show} onHide={handleClose}      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header closeButton>
          <Modal.Title>Nuevo destinatario
            <hr className="line"></hr>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {" "}
            <Row>
              <Col xs={"6"}>
                {" "}
                <p>Rut</p>
                <input
                  className="form_input"
                  placeholder="Ingrese Rut"
                  onChange={(e) => {
                    handleRut(e);
                  }}
                  maxLength="9"
                />
                <p>Nombre/ razón social</p>
                <input
                  className="form_input"
                  onChange={(e) => {
                    handleName(e);
                  }}
                  placeholder="Ingrese nombre completo"
                />
                <p>N° cuenta</p>
                <input
                  className="form_input"
                  onChange={(e) => {
                    handleAccount(e);
                  }}
                  placeholder="Ingrese N° de cuenta"
                />
              </Col>
              <Col xs={"6"}>
                {" "}
                <p>E-mail</p>
                <input
                  onChange={(e) => {
                    handleEmail(e);
                  }}
                  className="form_input"
                  placeholder="Ingrese e-mail"
                />
                <p>Alias</p>
                <input
                  onChange={(e) => {
                    handleAlias(e);
                  }}
                  className="form_input"
                  placeholder="Ingrese un alias"
                />
                <p>Moneda</p>
                <input
                  className="form_input"
                  onChange={(e) => {
                    handleCurrency(e);
                  }}
                  placeholder="Moneda"
                />
                <p>Banco</p>
                <input
                  className="form_input"
                  onChange={(e) => {
                    handleBank(e);
                  }}
                  placeholder="Bancos"
                />
              </Col>
            </Row>
            <Button className="button"
              onClick={() => {
                handleClose();
              }}
            >
              Cancelar
            </Button>
            <Button
            className="button"
              onClick={() => {
                handleSendData();
              }}
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
