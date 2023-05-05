

import { useFetchProducts } from "../hooks/useFetchProducts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { GetImages } from "./GetImages";

export const Products = () => {

const {images, isLoading} = useFetchProducts();

console.log("images",images, isLoading);

return(
  <>

    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center">Nuestros Productos</h1>
          <div  className="card-grid">

          {
            isLoading && <h2>Cargando ...</h2>
          }

            {
              images.map((image) => (
               <GetImages key={image.id}{...image}/>
              )  
              )
            }
    </div>
        </div>

      </div>


    </div>

  </>
)
 
}
