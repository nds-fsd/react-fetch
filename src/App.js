import { useState } from "react";
import CreateProduct from "./components/createProduct/createProduct";
import ProductList from "./components/productList/productList";
import { About } from "./components/about/about";
import { Contact } from "./components/contact/contact";
import { NoMatch } from "./components/noMatch/noMatch";
import "./App.css";

import { Routes, Route, Link } from "react-router-dom";
import { ProductDetail } from "./components/productDetail/productDetail";
import Faqs from "./components/faq/faq";

function App() {
  const [reload, setReload] = useState(false);

  const reloadPage = () => {
    setReload(!reload);
  };

  return (
    <div>
      <h1> ROUTING EXAMPLES</h1>
      {/* <ProductList reload={reload} />
      <CreateProduct  reloadPage={reloadPage} /> */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="app">App</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
          <li>
            <Link to="/faqs">FAQs</Link>
          </li>
        </ul>
      </nav>
      <div className="main-router">
        <Routes>
          <Route path="app" element={<ProductList reload={reload} />}>
            <Route
              path="product/:idDelProducto" // (al ser dinamico se llama parametro "param")
              element={<ProductDetail />}
            />
            <Route
              path="create" // /app/create (se llama slug)
              element={<CreateProduct reloadPage={reloadPage} />}
            />
          </Route>

          <Route path="about" element={<About />} />
          <Route path="faqs" element={<Faqs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
        {/* <MyRouter /> */}
      </div>
    </div>
  );
}

export default App;
