
import { useState } from "react";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import { GetImages } from "../components/GetImages";


export const Products = () => {

const {data:images, isLoading} = useFetchProducts('products');

return(
  <>

    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
        

          <h1 className="text-center">Nuestros Productos</h1>
          <div className="container p-2 text-center">
        
          </div>
          <div className="card-grid">
            {
              isLoading && <h2>Cargando ...</h2>
            }

            {
              images.map((image) => (
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
  