import { useDispatch, useSelector } from "react-redux";
import "../styles/products.css";

export const Products = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const addToCard = (productId) => {
    // action = {type: "", payload: +}
    dispatch({ type: "add_cart", payload: productId });
  };

  return (
    <>
      <h1>All Products</h1>
      <div className="products-list">
        {products.map((product) => {
          return (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <b>{product.name}</b>
              <p>{product.description}</p>
              <span>{product.price}</span>
              <button onClick={() => addToCard(product.id)}>Add to cart</button>
            </div>
          );
        })}
      </div>
    </>
  );
};
