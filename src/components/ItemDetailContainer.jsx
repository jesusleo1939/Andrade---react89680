import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getOneProduct } from "../assets/mock/mock";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id)
      .then((res) => setDetalle(res))
      .catch((error) => console.log(error));
  }, [id]);

  if (!detalle) {
    return <p>Cargando producto...</p>;
  }

  return (
    <div>
      <ItemDetail detalle={detalle} />
    </div>
  );
};

export default ItemDetailContainer;