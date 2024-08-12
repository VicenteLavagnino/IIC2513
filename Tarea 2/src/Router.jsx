import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage/ProductsPage';
import FormPage from './pages/ProductFormPage/ProductFormPage';
import ProductPage from './pages/ProductPage/ProductPage';

function Router(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<ProductsPage />}/>
        <Route path={"/product-form"} element={<FormPage/>}/>
        <Route path={"/product/:id"} element={<ProductPage/>}/>
        <Route path={"/product-form/:id"} element={<FormPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;