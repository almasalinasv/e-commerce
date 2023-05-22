import React, { useState } from 'react'
import { Navbar } from '../components/Navbar'
import { useFetchProducts } from '../../hooks/useFetchProducts';
import { GetImages } from '../components/GetImages';

export const Search = () => {

  const  [inputValue, setinputValue] = useState('');

  const onInputChange = (event) => {  
     setinputValue(event.target.value);
  
  }

  const {data:images, isLoading} = useFetchProducts('products');
  
const [filter, setFilter] = useState(images);

const filterProduct = (cat) => {
  const filtrar = images.filter((image) => image.title.includes(cat));
  setFilter(filtrar);

}

const onSubmit = (event) =>{
  event.preventDefault();
  console.log(inputValue)
  filterProduct(inputValue)
}
  return (
    <>
    <Navbar/>
    <hr/>
    <form className="d-flex flex-row mx-5" onSubmit={onSubmit}>
      <div className="col-12">  
        <h5>Búsqueda de productos por nombre</h5>
        <input 
          type="text" 
          className="form-control" 
          placeholder="Search" 
          value={inputValue} 
          onChange={(event) => onInputChange(event)}/>
        <button type="submit" className="btn btn-outline-secondary mt-3">Buscar</button>
      </div>
    </form>

    <div className="container mt-5">
      <div className="row">
        <div className="col-12 text-center">
        
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
