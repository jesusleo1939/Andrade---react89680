import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import NavbarBoo from "./components/NavbarBoo";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <NavbarBoo />

      <main className="container py-4">
        <ItemListContainer saludo="Productos Destacados" />
      </main>
    </>
  );
}

export default App;