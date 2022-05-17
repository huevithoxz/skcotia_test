import React from 'react'
import Login from '../components/Login'
import { useSelector } from 'react-redux'
import Addressee from '../container/Addressees';
import LastMovements from '../container/LastMovements';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../assets/style/sass/App.scss"

const App = () => {
  const loged = useSelector(state=>state.loged)
  return (
    <div>
    
      {
        loged === false ? (<Login/>) : ( <BrowserRouter>
       
            <Routes>
              
                <Route exact path="/addressee" element={<Addressee/>} />
                <Route exact path="/" element={<LastMovements/>} />
                <Route />
            </Routes>
        
        </BrowserRouter>)
         
      }
</div>
  )
}

export default App

