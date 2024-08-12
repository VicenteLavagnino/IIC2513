import { useState } from "react";
import axios from "axios";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({product}) => {


  // console.log("Product data:", product);
  // console.log("Image URL:", product?.images[0]);

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % product.images.length);
  }

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + product.images.length) % product.images.length);
  }

  return (
    
    <div className="product-card">

      <div className="product-image-container">
        {console.log("Product data:", currentImage)}
        <img src={product?.images[currentImage].replace(/[\[\]"]/g, '')} alt={product?.title} />
        <div className="image-buttons">
          <button onClick={prevImage}>Anterior</button>
          <button onClick={nextImage}>Siguiente</button>
        </div>
      </div>
      
      <Link to={`/product/${product.id}`} className="product-link">
      <h2 className="title">{product.title}</h2>
      <p className="description">{product.description}</p>
      <p className="price">$ {product.price}</p>
      </Link>


    </div>
    
  );
};

export default ProductCard;

