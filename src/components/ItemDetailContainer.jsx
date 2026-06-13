import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getOneProduct } from "../assets/mock/mock";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getOneProduct(id)
      .then((res) => setDetalle(res))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

  if (!detalle) {
    return <p>Cargando producto...</p>;
  }

  return (
    <div>
     {
      loading
      ? <LoaderComponent text="Cargando producto..." />
      : <ItemDetail detalle={detalle} />
     }
    </div>
  );
};

export default ItemDetailContainer;