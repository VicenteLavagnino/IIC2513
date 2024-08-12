import { useState, useEffect } from "react";
import axios from "axios";
import ProductForm from "../../components/ProductForm/ProductForm";
import VITE_BACKEND_URL from "../../config";
import "./ProductFormPage.css";

function FormPage() {

    const [categories, setCategories] = useState([]);



    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/categories')
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.error("error", error);
            });
    }, []);

    return (
        <div className="content">
            <ProductForm categories={categories} />
        </div>
    );
}

export default FormPage;
