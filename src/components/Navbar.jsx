import { faUser } from "@fortawesome/free-regular-svg-icons"
import { faCartShopping, faSearch} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Header } from "./Header"

export const Navbar = () => {
  return (
    <>
    <div>
        
        <nav className="navbar navbar-expand-lg p-3">
            <div className="container-fluid">
                <a className="navbar-brand fs-4" href="#" style={{color: "#5C593E"}} >e-Commerce</a>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-0 mb-lg-0">
                    
                </ul>
                <div className="d-flex flex-row mb-0">
                <a href="#" className="ms-3"><FontAwesomeIcon icon={faSearch } size="2x" style={{color: "#5C593E"}} /></a>
                
                <a href="#" className="ms-3"><FontAwesomeIcon icon={faUser} size="2x" style={{color: "#5C593E",}} /></a>
                <a href="#" className="ms-3" ><FontAwesomeIcon icon={faCartShopping} size="2x" style={{color: "#5C593E",}} /></a>
                
                </div>
                </div>
            </div>
        </nav>

    </div>

    <Header/>
    </>

  )
}
