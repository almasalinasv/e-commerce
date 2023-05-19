import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../../store/carrito/cartSlice';

export const GetImages = (product) => {

const dispatch = useDispatch();

const onClickNewItem = (product) => {
 // dispatch(addNewItem(product));
 dispatch(addItem(product))
}

  return (
    <div className="col-md-3 " >
        <div className="card h-100 text-center p-4"  style={{width: "15rem"}}>
            <img src={product.url} className="card-img-top" alt={product.title} height="230px"/>
            <div className="card-body">
                <h5 className="card-title"><small>{product.title  }</small></h5>
                <p className="card-price">${product.price}</p>
                <button onClick={() => onClickNewItem(product)} className="btn btn-secondary btn-sm">Agregar</button>
            </div>
        </div>
        
  </div>

   

  )
}
