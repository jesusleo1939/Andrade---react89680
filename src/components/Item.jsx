import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";

function Item({ product }) {
  return (
    <Card className="shadow border-0 h-100 product-card">
      {product.descuento && (
        <Badge bg="danger" className="position-absolute top-0 start-0 m-3">
          {product.descuento}% OFF
        </Badge>
      )}

      <Card.Img
        variant="top"
        src={product.imagen}
        alt={product.nombre}
      />

      <Card.Body>
        <Card.Title>{product.nombre}</Card.Title>

        <Card.Text className="text-muted">
          {product.descripcion}
        </Card.Text>

        <p className="mb-1">
          <strong>Stock:</strong> {product.stock}
        </p>

        <p className="mb-3">
          <strong>Categoría:</strong> {product.category}
        </p>

        <h4 className="text-success">${product.precio},00</h4>

        <Link className="btn btn-dark" to={`/item/${product.id}`}>
          Ver mas
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Item;