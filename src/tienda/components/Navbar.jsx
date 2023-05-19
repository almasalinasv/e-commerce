import { faUser } from "@fortawesome/free-regular-svg-icons"
import { faCartShopping, faSearch, faSignOut} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useSelector } from "react-redux"
import { Link, Navigate } from "react-router-dom"

export const Navbar = () => {

  console.log(localStorage.getItem('token'))
  console.log(localStorage)
  var acceso = localStorage.getItem('token');

  const items = useSelector((state) => state.cart)

  const onClickLogout = () => {
    localStorage.clear();
    acceso = localStorage.getItem('token');
    console.log('accesoogout', acceso)
  }
  return (
    <>
     
        <nav className="navbar navbar-expand-lg  p-3">
            <div className="container-fluid">
                <a className="navbar-brand fs-4" href="inicio" style={{color: "#5C593E"}} >e-Commerce</a>
                <button 
                  className="navbar-toggler" 
                  type="button" 
                  data-toggle="collapse" 
                  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex flex-row mb-0 position-absolute end-0 me-5">
                    <li className="nav-item"><Link to="#" className="nav-link ms-3 fs-2 text"><FontAwesomeIcon icon={faSearch }  style={{color: "#5C593E"}} /></Link></li>             
                    <li className="nav-item"><Link to={!!acceso ? "/inicio": "/login"} className="nav-link ms-3 fs-2 text"><FontAwesomeIcon icon={faUser} style={{color: "#5C593E",}}/></Link></li>
                    <li className="nav-item"><Link to = "/cart"className="nav-link ms-3 fs-2 text text-decoration-none text-decoration-none" style={{color: "#5C593E",}} ><FontAwesomeIcon icon={faCartShopping}/>({items.length})</Link></li>
                    <li className="nav-item"> <button onClick={onClickLogout} type="button" className=" nav-link ms-3 fs-2 text btn"><FontAwesomeIcon icon={faSignOut}  style={{color: "#5C593E"}} />
                    {
                      acceso === null && <Navigate to = "/login"/>
                    }
                    </button></li> 
                </ul>
                </div>
            </div>
        </nav>


    </>

  )
}
