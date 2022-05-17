import React,{useState} from 'react'
import {AiOutlineSearch}from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux";
import { filterAddressee,filterMovements,setListAddressees,setListMovements } from '../action';
import DatePicker from "react-datepicker"
import "../assets/style/sass/components/Search.scss"

const Search = ({flag}) => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const table = useSelector((state) => state.copyAddressees);
  const list = useSelector((state) => state.copyMovements);

  const handleSearchAdd = (e) => {
    var filtrar = (name) => {
      dispatch(filterAddressee());
      var result = table.filter((e) => {
        if (e.name.toString().toLowerCase().includes(name.toLowerCase())) {
          return e;
        }
      });
  
      result.map((d) => {
        dispatch(setListAddressees(d));
      });
    };
    setSearch(e.target.value);
    filtrar(e.target.value);
  };
  const handleSearchMov = (e) => {
    var filtrar = (description) => {
      dispatch(filterMovements());
      var result = list.filter((e) => {
        if (e.description.toString().toLowerCase().includes(description.toLowerCase())) {
          return e;
        }
      });
  
      result.map((d) => {
        dispatch(setListMovements(d));
      });
    };
    setSearch(e.target.value);
    filtrar(e.target.value);
  };


  return (
    <>
        <input className='find-description' placeholder='Buscar' value={search}   onChange={flag === "add" ?handleSearchAdd : handleSearchMov}/> 
        <AiOutlineSearch className='icon' size={20}/>
        
    </>
  )
}

export default Search