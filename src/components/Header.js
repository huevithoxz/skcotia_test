import React from 'react'
import { Link } from "react-router-dom";
import { Nav,Navbar,Container } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import "../assets/style/sass/components/Header.scss"
const Header = () => {
  return (
    <div className='contenedor'>
         <Navbar bg="light" variant="light" stiky='top' >
    <Container className='container-menu'>

    <Nav className="me-auto">
      <Nav.Link to="/"> <Link className='menu' to="/">Ultimos Movimientos</Link></Nav.Link>
      <Nav.Link to="/addressee"> <Link className='menu'  to="/addressee">Destinatarios</Link> </Nav.Link>
    </Nav>
    </Container>
  </Navbar>
 
 
    </div>
  )
}

export default Header