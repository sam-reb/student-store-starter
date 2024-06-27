import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NotFound from "../NotFound/NotFound";
import { formatPrice } from "../../utils/format";
import "./ProductDetail.css";

function ProductDetail({ addToCart, removeFromCart, getQuantityOfItemInCart }) {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  const url = "http://localhost:3000";

  useEffect(() => {
    setIsFetching(true);
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${url}/products/${productId}`);
        setProduct(res.data);
      } catch (error) {
        console.error("error: fetching product by id", error);
      } finally {
        setIsFetching(false);
      }
    };
    productId
      ? fetchProduct()
      : console.error("error: product doesnt exist", error);
  }, []);

  if (error) {
    return <NotFound />;
  }

  if (isFetching || !product) {
    return <h1>Loading...</h1>;
  }

  const quantity = getQuantityOfItemInCart(product);

  const handleAddToCart = () => {
    if (product.id) {
      addToCart(product);
    }
  };

  const handleRemoveFromCart = () => {
    if (product.id) {
      removeFromCart(product);
    }
  };

  return (
    <div className="ProductDetail">
      <div className="product-card">
        <div className="media">
          <img
            src={product.image_url || "/placeholder.png"}
            alt={product.name}
          />
        </div>
        <div className="product-info">
          <p className="product-name">{product.name}</p>
          <p className="product-price">{formatPrice(product.price)}</p>
          <p className="description">{product.description}</p>
          <div className="actions">
            <button onClick={handleAddToCart}>Add to Cart</button>
            {quantity > 0 && (
              <button onClick={handleRemoveFromCart}>Remove from Cart</button>
            )}
            {quantity > 0 && (
              <span className="quantity">Quantity: {quantity}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
