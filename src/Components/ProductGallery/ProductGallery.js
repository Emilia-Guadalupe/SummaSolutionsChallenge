import React from 'react';
import './productGalleryStyles.css';

//Components
import ProductCard from '../ProductCard/ProductCard';

function ProductGallery() {
    return(
        <div className="product-gallery-container">
            <ProductCard />
        </div>
    )
}

export default ProductGallery;