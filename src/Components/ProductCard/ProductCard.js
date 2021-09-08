import React, { useState, useEffect } from 'react';
import './productCardStyles.scss';
import { productDetails } from './productDetails';
import { Link } from 'react-router-dom';

//Components
import SeeDetailsButton from '../SeeDetails/SeeDetailsButton';

function ProductCard() {

    const [item, setItem] = useState([]);

    //Se llama a los productos con cierto delay, para simular el tiempo de respuesta desde una API o base de datos:

    useEffect(() => {

        setTimeout(() => {
            const promise = new Promise((res, rej) => {
                res(productDetails);
            });
            promise.then(productDetails => {
                setItem(productDetails)
            })
        }, 1000)

    }, [])


    return(
        <>
            {item.length === 0 ? (
                <div className="loading-container">
                    <p className="loading"> Cargando productos... </p>
                </div>
            ) : item.map((e) => {
                return(
                    <div key={e.id} className="card-container">
                        <div className="details-container">
                            <div className="car-photo-container">
                                <img className="car-photo" src={e.img} alt="car front" />
                            </div>
                            <div className="specifications">
                                <h3 className="element-name">{e.name}</h3>
                                <p className="discount">Antes: ${e.discount}</p>
                                <p className="price">${e.price}</p>
                            </div>
                            <Link className="link-to-section" to={`/detalles/${e.id}`}>
                            <SeeDetailsButton />
                            </Link>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default ProductCard;