import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/productService';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { addItem } = useCart();

    useEffect(() => {
        getProductById(id).then(data => {
            setProduct(data);
            setLoading(false);
        });
    }, [id]);

    if (loading) return <div className="container mt-5">Cargando...</div>;
    if (!product) return <div className="container mt-5">Producto no encontrado</div>;

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <img src={product.image} className="img-fluid rounded" alt={product.name} />
                </div>
                <div className="col-md-6">
                    <h2>{product.name}</h2>
                    <p className="lead">${product.price}</p>
                    <p>Categoría: {product.category}</p>
                    <p>{product.description}</p>
                    <button className="btn btn-primary btn-lg" onClick={() => addItem(product)}>Agregar al Carrito</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
