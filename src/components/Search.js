import React from 'react'
import {AiOutlineSearch}from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux";
import "../assets/style/sass/components/Search.scss"

const Search = () => {
  return (
    <>
        <input className='find-description' placeholder='Buscar'/> 
        <AiOutlineSearch className='icon' size={20}/>
    </>
  )
}

export default Search