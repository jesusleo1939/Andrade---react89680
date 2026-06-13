import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import NavbarBoo from "./components/NavbarBoo";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Error from "./components/Error";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <>
    <BrowserRouter>
     
     <CartProvider>
      <NavbarBoo />
<Routes>
  <Route path="/" element={<ItemListContainer saludo="Productos Destacados" />} />
  <Route path="/category/:type" element={<ItemListContainer saludo="Categoría " />} />
  <Route path="/item/:id" element={<ItemDetailContainer />} />
  <Route path="/cart" element={<CartContainer />} />
  <Route path="*" element={<Error/>} />
</Routes>
</CartProvider>
    </BrowserRouter>
    </>
  );
}

export default App;