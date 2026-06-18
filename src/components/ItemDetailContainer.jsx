import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import LoaderComponent from "./LoaderComponent";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../service/firebase";

const ItemDetailContainer = () => {
  const [invalid, setInvalid] = useState(false);
  const [detalle, setDetalle] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    
    const docRef = doc(db, "items", id);
    getDoc(docRef)
      .then((res) => {
        if (res.data()) {
          setDetalle({ id: res.id, ...res.data() });
        } else {
          setInvalid(true);
        }
      })
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