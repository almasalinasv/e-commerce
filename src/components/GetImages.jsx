import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const GetImages = (image) => {
  return (
    <div className="col-md-3 " >
    <div className="card h-100 text-center p-4"  style={{width: "15rem"}}>
        <img src={image.url} className="card-img-top" alt={image.title} height="230px"/>
        <div className="card-body">
            <h5 className="card-title"><small>{image.title  }</small></h5>
            <p className="card-price">${image.price}</p>
            <a href="#" className="btn btn-secondary btn-sm">Ver más</a>
        </div>
    </div>
  </div>
  )
}
