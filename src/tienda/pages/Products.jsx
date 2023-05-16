
import { useState } from "react";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import { GetImages } from "../components/GetImages";


export const Products = () => {

const {data:images, isLoading} = useFetchProducts('products');
const [filter, setFilter] = useState(images);
const filterProduct = (cat) => {
  const filtrar = images.filter((image) => image.category === cat);
  setFilter(filtrar);

}

return(
  <>

    <div className="container mt-5">
      <div className="row">
        <div className="col-12 text-center">
        

          <h1 className="text-center">Nuestros Productos</h1>
          <button className="btn btn-outline-secondary m-3" onClick={() => setFilter(images)}>Todo</button>
          <button className="btn btn-outline-secondary m-3" onClick={() => filterProduct("electronics")}>Electrónicos</button>
            <button className="btn btn-outline-secondary m-3" onClick={() => filterProduct("jewelery")}>Joyería</button>
            <button className="btn btn-outline-secondary m-3" onClick={() => filterProduct("men's clothing")}>Ropa de hombre</button>
            <button className="btn btn-outline-secondary m-3" onClick={() => filterProduct("women's clothing")}>Ropa de mujer</button>

          <div className="card-grid">
            {
              isLoading && <h2>Cargando ...</h2>
            }

            {
              filter.map((image) => (
                <GetImages key={image.id}{...image}/>
              ))
            }
          </div>
        </div>

      </div>


    </div>

  </>
)
 
}
  