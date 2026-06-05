import { useEffect } from "react"
import { getProducts } from "../assets/mock/mock"

useEffect(() => {
  getProducts()
  .then((res)=> console.log(res))
  .catch((error)=> console.log(error))
  
}, [])
console.log ("ItemListContainer")


const ItemListContainer = () => {
  return (
    <div>
       
    </div>
  )
  
}

export default ItemListContainer