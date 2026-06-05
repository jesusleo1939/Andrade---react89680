function Item({ name, price, img }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />

      <Card.Body>
        <Card.Title>{name}</Card.Title>

        <Card.Text>
          ${price},00
        </Card.Text>

        <Button variant="primary">
          Comprar
        </Button>
      </Card.Body>
    </Card>
  );
}