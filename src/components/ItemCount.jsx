import {useState, useEffect} from "react"
const ItemCount = ({stock, onAdd})=> {
  const [count, setCount]= useState(1)

  console.log("ItemCount")

  const sumar = ()=> {
    if (count < stock){
      setCount(count + 1)

    }
    
  }
  const restar = () =>{
    if(count > 0 ){
       setCount(count - 1)

    }
   
  }

    const purchase = () => {
      onAdd(count)

    }
     return(
      <div>
        <button className="btn btn-danger" onClick={restar}>-</button>
        <span>{count}</span>
        <button className="btn btn-danger" onClick={sumar}>+</button>
        <button className="btn btn-success" onClick={purchase}>Comprar</button>
      </div>
     )

}




export default ItemCount;