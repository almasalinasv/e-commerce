import { useDispatch, useSelector } from "react-redux"
import { Navbar } from "../components/Navbar"
import { deleteItem } from "../../store/carrito/cartSlice";

export const Carrito = () => {

const products = useSelector((state) => state.cart);
console.log(products)
const dispatch = useDispatch();

const onClickDelete = (productId) => {
  dispatch(deleteItem(productId))
}

  return (
    <>
    <Navbar/>
     <h3>Mi carrito</h3>
      <hr/>
      <div className="card mb-3">
        {
          products.length === 0 && <h5>No hay productos agregados</h5>
        }
        {
          
            products.map((product) => (
          
          <div className="row g-0" key={product.id}>
            <div className="col-md-2 p-5">
              <img src={product.url} className="img-thumbnail" alt="..." />
            </div>
            <div className="col-md-10">
              <div className="card-body m-3">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text fs-6 text text-start">{product.description}</p>
                <p className="card-text text-start">${product.price}</p>
                <button type="button" className="btn btn-secondary d-flex" onClick={() =>  onClickDelete(product.id)}>Eliminar</button>
              </div>
            </div>
          </div>
         
            ))
        }
      </div>
   
    
    </>
  )
}
