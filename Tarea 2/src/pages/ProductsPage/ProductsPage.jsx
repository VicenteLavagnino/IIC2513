import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ProductCard from "../../components/Products/ProductCard";
import "./ProductsPage.css";

const ProductsPage = () => {

  // link productos: https://api.escuelajs.co/api/v1/products

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://api.escuelajs.co/api/v1/products').then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div className="content">
      <h1 style={{ fontSize: "40px", color: "white" }}>Productos</h1>
      <Link to={`/product-form/`} className="publish-button">Publicar Producto</Link>
      <div className="button-container">
      </div>

      <div className="products">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>
  );
};

export default ProductsPage;