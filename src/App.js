import { useState } from "react";
import CreateProduct from "./components/createProduct/createProduct";
import ProductList from "./components/productList/productList";


function App() {

  const [reload, setReload] = useState(false);

  const reloadPage = () => {
    setReload(!reload);
  }

  return (
    <div>
      <ProductList reload={reload} />
      <CreateProduct  reloadPage={reloadPage} />
    </div>
  );
}

export default App;
