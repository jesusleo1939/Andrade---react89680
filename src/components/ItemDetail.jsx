import ItemCount from "./ItemCount";

const ItemDetail = ({ detalle }) => {
    const onAdd = (cantidad) => {
        alert(`Se agregaron ${cantidad} unidades al carrito`);
    }
  return (
    <div className="card shadow border-0 p-4">
      <h2>Detalle del producto {detalle.nombre}</h2>

      <img
        src={detalle.imagen}
        alt={detalle.nombre}
        className="img-fluid"
      />

      <p>{detalle.descripcion}</p>
      <p>Precio: ${detalle.precio},00</p>
      <p>Stock: {detalle.stock}</p>

      <ItemCount stock={detalle.stock} onAdd={onAdd}/>
    </div>
  );
};

export default ItemDetail;