import { Products } from "../pages/Products"
import { Navbar } from "./Navbar"


export const Header = () => {
  return (
   <>
   <Navbar/>
    <div className="card text-bg-dark border-0 mt-3">
        <img src="src/assets/header.png" className="card-img" alt="header" height='450px'/>
        <div className="card-img-overlay">
           <h1 className="position-absolute top-50 start-50 translate-middle display-1" style={{color: "#5C593E",}}>Bienvenido</h1>
        </div>
    </div>
   <Products/>
   </>
  )
}
