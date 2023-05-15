import { faUser } from "@fortawesome/free-regular-svg-icons"
import { faCartShopping, faSearch} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Navbar = () => {

  //const [token, setToken] = useState(localStorage.getItem("userToken") ?? null);
  console.log(localStorage.getItem('token'))
  const acceso = localStorage.getItem('token');
  return (
    <>
    <div>
        
        <nav className="navbar navbar-expand-lg p-3">
            <div className="container-fluid">
                <a className="navbar-brand fs-4" href="inicio" style={{color: "#5C593E"}} >e-Commerce</a>
                <div className="collapse navbar-collapse">
                
                  <div className="d-flex flex-row mb-0 position-absolute end-0 me-5">
                    <a href="#" className="ms-3"><FontAwesomeIcon icon={faSearch } size="2x" style={{color: "#5C593E"}} /></a>                
                    <a href={!!acceso ? "/inicio": "/login"} className="ms-3"><FontAwesomeIcon icon={faUser} size="2x" style={{color: "#5C593E",}} /></a>
                    <a href="/cart" className="ms-3" ><FontAwesomeIcon icon={faCartShopping} size="2x" style={{color: "#5C593E",}} /></a>
                  </div>
                </div>
            </div>
        </nav>
    </div>

    </>

  )
}
