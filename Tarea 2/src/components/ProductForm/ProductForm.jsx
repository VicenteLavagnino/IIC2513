import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useParams } from "react-router-dom";

function ProductForm({ onSaveProduct, categories }) {

  const { id } = useParams();

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [images, setImages] = useState('');
  const [redirectTo, setRedirectTo] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (id) {
      axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
        .then(response => {
          const product = response.data;
  
          setTitle(product.title);
          setPrice(product.price);
          setDescription(product.description);
          setCategory(product.category.id);

          // https://stackoverflow.com/questions/5619202/converting-a-json-string-to-a-javascript-object
  
          setImages(JSON.parse(product.images).join(', '));
        })
        .catch(error => console.error(error));
    }
  }, [id]);

  // https://www.telerik.com/blogs/react-basics-react-forms-examples
  const submitHandler = async (event) => {
    event.preventDefault();

    if (!title || !price || !description || !category || !images) {
      setError("Debes rellenar todos los campos.");
      return;
    }

    const imageArray = images.split(',').map(image => image.trim());
    const productData = { title, price : Number(price), description, categoryId: Number(category), images: imageArray };
    

    const url = id ? `https://api.escuelajs.co/api/v1/products/${id}` : 'https://api.escuelajs.co/api/v1/products';
    const method = id ? 'put' : 'post';

    try {
      const response = await axios({ method: method, url: url, data: productData });
      console.log('Producto guardado:', response.data);

    if (onSaveProduct) {
      onSaveProduct(response.data);
    }

    setRedirectTo(true);

  } catch (error) {
      console.error('Error al guardar el producto:', error);
      setError('Failed to save product.');
  }
  }


  // https://www.telerik.com/blogs/react-basics-react-forms-examples

  return (
    <> {redirectTo && <Navigate to="/" replace />}
    <form onSubmit={submitHandler}>
      <div className="form">
      <label>
        Title:
        <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} />
      </label>

      <label>
        Description:
        <textarea name="description" value={description} onChange={e => setDescription(e.target.value)} />
      </label>

      <label>
        Price:
        <input type="number" name="price" value={price} onChange={e => setPrice(e.target.value)} />
      </label>

      <label>
        Category:
        <select id="category" value={category} onChange={e => setCategory(e.target.value)}>
          <option value="">Selecciona una categoría</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
      </label>

      <div className="image">
            {images.split(',').map((img, index) => (
              <img key={index} src={img.trim()} alt={`No hay imagen cargada o hubo un error`} />
            ))}
      </div>

      <label>
        Images:
        <input type="text" name="images" value={images} onChange={e => setImages(e.target.value)} />
      </label>
      {error && <div className="error-message">{error}</div>}
      <button type="submit">Submit</button>
      </div>\

        <a href="/">
        <button>Cancelar</button>
        </a>

    </form>
    </>
  );
}

export default ProductForm;

