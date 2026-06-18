import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import LoaderComponent from "./LoaderComponent";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../service/firebase";
import { Productos } from "../assets/mock/mock";

const ItemListContainer = ({ saludo = "Productos" }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const {type} = useParams();

  useEffect(() => {
    setLoading(true);
    //1.Conectar con la colección de firebase
    const prodCol = type
      ? query(collection(db, "items"), where("category", "==", type))
      : collection(db, "items");
    //2.Pedir los datos
    getDocs(prodCol)
      .then((res) => {
        const list = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(list);
      })
    .catch((error) => console.log(error))
    .finally(() => setLoading(false))

}, [type]);

 // useEffect(() => {
 //   setLoading(true);
 //   getProducts()
// //     .then((res) => {
 //       if (type) {
 //         setData(res.filter((prod) => prod.category === type));
 //       } else {
 //         setData(res);
 //       }
 //     })
 //     .catch((error) => console.log(error))
//      .finally(()=> setLoading(false))
      
      
//  }, [type]);



  return (
    <>  
    {
      loading
      ? <LoaderComponent text={type ? `Categoría: ${type}` : "Cargando..." } />
      : <div>
     
       
      <h2 className="text-center mb-4">{saludo }{type && <span>{type}</span>}</h2>
      <ItemList data={data} />
    </div>

    }
    </>
  );
};

export default ItemListContainer;