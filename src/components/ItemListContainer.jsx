import { useEffect, useState } from "react";
import { getProducts } from "../assets/mock/mock";
import ItemList from "./ItemList";

const ItemListContainer = ({ saludo = "Productos" }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProducts()
      .then((res) => setData(res))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2 className="text-center mb-4">{saludo}</h2>
      <ItemList data={data} />
    </div>
  );
};

export default ItemListContainer;