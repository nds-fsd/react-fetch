import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  let params = useParams();

  console.log("PARAMS",params)

  const [prod, setProd] = useState(null);

  useEffect(() => {
    console.log("hola");
    fetch("http://localhost:3005/todo/" + params.idDelProducto)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setProd(res);
      });
  }, [params.idDelProducto]);

  if (!prod) return;
  return (
    <div>
      <p>{prod.id}</p>
      <p>
        {prod.name} {prod.price}€
      </p>
      <p>{prod.description}</p>
    </div>
  );
  
//   return (
//     {prod && <div>
//       <p>{prod.id}</p>
//       <p>
//         {prod.name} {prod.price}€
//       </p>
//       <p>{prod.description}</p>
//       <p>{prod.description}</p>
//       </div>}
//    );
};
