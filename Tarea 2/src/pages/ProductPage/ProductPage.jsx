import React from "react";
import './ProductPage.css';
import axios from "axios";
import { Link, Navigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const ProductPage = () => {

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [currentImage, setCurrentImage] = useState(0);

    // Función para eliminar un producto
    // https://stackoverflow.com/questions/74060012/how-do-i-delete-product-with-axios-delete-in-my-react-app
    // https://stackoverflow.com/questions/46742759/axios-delete-not-executing-then-neither-catch-block

    const onDelete = (id) => {

     try {
        axios.delete('https://api.escuelajs.co/api/v1/products/' + id).then((response) => {
            console.log(response);
            window.location.reload();
        });

        } catch (error) {
            console.error("Error al eliminar el producto:", error);
        }
     }


    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/products/' + id).then((response) => {
            setProduct(response.data);
            setCurrentImage(0);
        } ); 
    } , [id]);

    const nextImage = () => {
        setCurrentImage((currentImage + 1) % product.images.length);
    }

    const prevImage = () => {
        setCurrentImage((currentImage - 1 + product.images.length) % product.images.length);
    }

    return (
        <div className="content">

        {/*  https://www.freecodecamp.org/espanol/news/encadenamiento-opcional-en-javascript-explicado/ */}
        
        {!product && <a href="/">Estamos teniendo problemas en estos momento, intentalo más tarde</a>}

        {product && (
            <div className="product-card">

                <div className="product-image-container">

                    {console.log("Product data:", currentImage)}
                    
                    <img src={product?.images[currentImage].replace(/[\[\]"]/g, '')} alt={product?.title} />
                    <div className="image-buttons">
                        <button onClick={prevImage}>Anterior</button>
                        <button onClick={nextImage}>Siguiente</button>
                    </div>
                </div>
                <div className="product-info">
                    <h2 className="title">{product?.title}</h2>
                    <p className="description">{product?.description}</p>
                    <p className="price">$ {product?.price}</p>
                </div>

                <div className="buttons">

                <Link to={`/product-form/${id}`} className="button-edit">
                <button className="button-edit">Editar</button>
                </Link>

                
                
                <Link to="/" className="button-delete">
                <button onClick={() => onDelete(product.id)}>Eliminar</button>
                </Link>

                <a href="/">
                 <button>Volver</button>
                </a>
                
                </div>
            </div>
        )}
    </div>
    )
}

export default ProductPage;