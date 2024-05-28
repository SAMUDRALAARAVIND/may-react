import { useDispatch, useSelector } from "react-redux";
import "../styles/cart.css";

export const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const increment = (productId) => {
    console.log("inside", productId);
    dispatch({ type: "inc_count", payload: productId });
  };

  const decrement = (productId) => {
    dispatch({ type: "dec_count", payload: productId });
  };

  return (
    <>
      <h2>Cart </h2>
      <div className="cart-container">
        {products.map((product) => {
          return (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <div>
                <b>{product.name}</b>
                <p>{product.description}</p>
                <span>{product.price}</span>
              </div>
              <div className="modifier">
                <button onClick={() => decrement(product.id)}>-</button>
                <span>{product.quantity}</span>
                <button onClick={() => increment(product.id)}>+</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
