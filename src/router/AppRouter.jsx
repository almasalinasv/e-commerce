import { Navigate, Route, Routes } from "react-router-dom"
import { Carrito } from "../tienda/pages/Carrito"
import { Login } from "../auth/pages/Login"
import { Header } from "../tienda/components/Header"
import { useState } from "react"


export const AppRouter = () => {
  return (
    
    <Routes>
      <Route path = "/inicio" element= {<Header/>}/>
      <Route path = "/cart" element = {<Carrito/>}/>
      <Route path='/*' element={<Navigate to = '/inicio'/>}/>
      <Route path='login' element={<Login/>} />
      
      
    </Routes>


  )
 
}
