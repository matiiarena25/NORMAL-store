import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Home = () => {
    const { user } = useAuth();

    return (
        <div className="container mt-5">
            <div className="p-5 mb-4 bg-light rounded-3 text-center">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Bienvenido a</h1>
                    <h1 className="display-1 fw-bold text-primary">NORMAL</h1>
                    <h1 className="display-5 fw-bold mb-4">Tech Store</h1>
                    <p className="col-md-8 fs-4 mx-auto">Encuentra los mejores gadgets a precios normales.</p>
                    <div className="d-flex justify-content-center gap-3">
                        <Link className="btn btn-primary btn-lg" to="/products">Comprar Ahora</Link>
                        {user && user.role === 'admin' && (
                            <Link className="btn btn-outline-secondary btn-lg" to="/admin">Modificar o Agregar productos</Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
