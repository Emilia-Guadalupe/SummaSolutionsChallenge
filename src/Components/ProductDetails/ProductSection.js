import React, {useState, useEffect} from 'react';
import './productDetailsStyles.scss';
import { useParams, Link } from 'react-router-dom';
import { productDetails } from '../ProductCard/productDetails';

function ProductSection() {

    const {id} = useParams();

    const [details, setDetails] = useState([]);

    useEffect(() => {

        setTimeout(() => {
            const promise = new Promise((res, rej) => {
                res(productDetails);
            });
            promise.then(productDetails => {
                setDetails(productDetails)
            })
        }, 300)

    }, [])

    return(
        <div className="complete-section-container">
            <div className="title-section">
                <div className="link-container">
                    <Link to="/" className="link-home">
                        <button className="back-to-home">Volver a la Página Principal</button>
                    </Link>
                </div>
                <h3 className="title-details">Detalles del Producto:</h3>
            </div>
            {details.map((item) => {
                return(
                    item.id === id ? 
                    <div key={item.id} className="product-section">
                        <div className="product-photo-container">
                            <img src={item.img} alt="car parts" className="part-img" />
                        </div>
                        <div className="specifications">
                            <div className="product-name">
                                <p className="product">{item.name}</p>
                            </div>
                            <div className="product-price">
                                <p className="details-price">${item.price}</p>
                                <p className="details-discount">Antes: ${item.discount}</p>
                            </div>
                            <div className="product-description">
                                <h4 className="description-title">Descripción del producto</h4>
                                <p className="description-text">{item.description}</p>
                            </div>
                            <div className="buy-button-container">
                                <button className="details-button">COMPRAR</button>
                            </div>
                        </div>
                    </div> : null
                ) 
            })}
        </div>
    )
}

export default ProductSection;