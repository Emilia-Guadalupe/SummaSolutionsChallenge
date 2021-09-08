import React, {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { productDetails } from '../../Components/ProductCard/productDetails';

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
        }, 1000)

    }, [])

    return(
        <div>
            <div>
                <div>
                    <Link to="/">
                        Volver a la Página Principal
                    </Link>
                </div>
                <h3>Detalles del Producto:</h3>
            </div>
            {details.map((item) => {
                return(
                    item.id === id ? 
                    <div key={item.id}>
                        <div>
                            <img src={item.img} alt="car parts" />
                        </div>
                        <div>
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                        </div>
                    </div> : null
                ) 
            })}
        </div>
    )
}

export default ProductSection;