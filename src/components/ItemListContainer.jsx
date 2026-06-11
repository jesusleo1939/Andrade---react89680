import { useEffect, useState } from "react";
import { getProducts } from "../assets/mock/mock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ saludo = "Productos" }) => {
  const [data, setData] = useState([]);
  const {type} = useParams();

  useEffect(() => {
    getProducts()
      .then((res) => {
        if (type) {
          setData(res.filter((prod) => prod.category === type));
        } else {
          setData(res);
        }
      })
      .catch((error) => console.log(error));
  }, [type]);

  return (
    <div>
      <h2 className="text-center mb-4">{saludo}</h2>
      <ItemList data={data} />
    </div>
  );
};

export default ItemListContainer;