import { Navigate, Route, Routes } from "react-router-dom"
import { Carrito } from "../tienda/pages/Carrito"
import { Login } from "../auth/pages/Login"
import { Header } from "../tienda/components/Header"
import { useState } from "react"
import { Search } from "../tienda/pages/Search"


export const AppRouter = () => {
  return (
    
    <Routes>
      <Route path = "/inicio" element= {<Header/>}/>
      <Route path = "/cart" element = {<Carrito/>}/>
      
      <Route path='/login' element={<Login/>} />
      <Route path = '/search' element = {<Search/>}/>

      <Route path='/*' element={<Navigate to = '/inicio'/>}/>
      
    </Routes>


  )
 
}
