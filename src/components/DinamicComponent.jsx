import React from "react";

function DinamicComponent({
  nombre,
  descripcion,
  precio,
  imagen,
  descuento,
}) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card product-card h-100 shadow border-0">

        {descuento && (
          <span className="badge bg-danger position-absolute top-0 start-0 m-3">
            {descuento}% OFF
          </span>
        )}

        <div className="overflow-hidden">
          <img
            src={imagen}
            className="card-img-top product-image"
            alt={nombre}
          />
        </div>

        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-bold">{nombre}</h5>

          <p className="card-text text-muted flex-grow-1">
            {descripcion}
          </p>

          <div className="mb-3">
            <span className="text-warning">★★★★★</span>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <span className="fs-4 fw-bold text-success">
              ${precio}
            </span>

            <button className="btn btn-primary">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DinamicComponent;