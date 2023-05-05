import { Route, Routes } from "react-router-dom"
import { Header, Navbar } from "../components"

export const AppRouter = () => {
  
  return (
    
    <Routes>
      <Route path = "/*" element= {<Navbar/>}/>
    </Routes>
  )
}
