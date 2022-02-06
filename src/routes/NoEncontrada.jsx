import { Link } from "react-router-dom";

const NoEncontrada = () => {
    return (
        <div>
            <h2>404</h2>
            <Link to="/" className="btn btn-outline-primary">
                Inicio
            </Link>
        </div>
    )
};

export default NoEncontrada;
