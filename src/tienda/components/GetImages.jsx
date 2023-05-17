import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewItem } from '../../store/carrito/thunks';

export const GetImages = (image) => {

const dispatch = useDispatch();

const onClickNewItem = () => {
  dispatch(addNewItem());
}

  return (
    <div className="col-md-3 " >
        <div className="card h-100 text-center p-4"  style={{width: "15rem"}}>
            <img src={image.url} className="card-img-top" alt={image.title} height="230px"/>
            <div className="card-body">
                <h5 className="card-title"><small>{image.title  }</small></h5>
                <p className="card-price">${image.price}</p>
                <button onClick={onClickNewItem} className="btn btn-secondary btn-sm">Agregar</button>
            </div>
        </div>
        
  </div>

   

  )
}
