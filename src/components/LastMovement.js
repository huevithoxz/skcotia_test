import React, { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import useGetList from "../customHook/useGetList";
import { Table, Button } from "react-bootstrap";
import Header from "./Header";
import "../assets/style/sass/components/Last-movements.scss"
import Search from "./Search";
import Paginate from "./Paginate";
const LastMovement = () => {
  const { getLastMovements } = useGetList();
  const list = useSelector((state) => state.movements);
  const [currentPage, setCurrentPage] = useState(1);
  const [proposalsPerPage] = useState(5);
  const [active, setActive] = useState(null);
  const indexOfLastProposal = currentPage * proposalsPerPage;
  const indexOfFirstProposals = indexOfLastProposal - proposalsPerPage;
  const current = list.slice(indexOfFirstProposals, indexOfLastProposal);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
      <Search flag={"mov"} />
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
          {current.map((value, i) => {
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
      <Paginate
          proposalsPerPage={proposalsPerPage}
          current={current}
          totalProposals={list.length}
          paginate={paginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          act={active}
          setActive={setActive}
        />
    </div></div>
  
  );
};

export default LastMovement;
