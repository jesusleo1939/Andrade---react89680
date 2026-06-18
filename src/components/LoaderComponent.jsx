import React from "react";
import Spinner from "react-bootstrap/Spinner";
const LoaderComponent = ({text}) => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
            <div className="spinner-border text-primary" role="status">
                <img src="https://http.cat/images/102.jpg" alt="Loading..." className="img-fluid" />
            </div>
        </div>
    );
}

export default LoaderComponent;