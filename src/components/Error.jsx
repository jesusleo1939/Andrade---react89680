import React from "react";
import {Link} from "react-router-dom";

function Error() {
    return (
        <div className="text-center mt-5">
            <img src="https://http.cat/404" alt="404 Not Found" className="img-fluid" />
            <h1 className="display-4">404 - Página no encontrada</h1>
            <p className="lead">Lo sentimos, la página que buscas no existe.</p>
            <Link to="/" className="btn btn-primary mt-3">
                Volver al inicio
            </Link>
        </div>
    );

}

export default Error;