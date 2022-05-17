import React from 'react'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
const Header = () => {
  return (
    <div><nav>
    <ul>
      <li
      >
        <Link to="/">Ultimos Movimientos</Link>
      </li>
      <li
      >
        <Link to="/addressee">Destinatarios</Link>
      </li>
    </ul>
  </nav></div>
  )
}

export default Header