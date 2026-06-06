import Item from "./Item";

const ItemList = ({ data }) => {
  return (
    <div className="container">
      <div className="row g-4">
        {data.map((prod) => (
          <div className="col-12 col-md-6" key={prod.id}>
            <Item product={prod} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;