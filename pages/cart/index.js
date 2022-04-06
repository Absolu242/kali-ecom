import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { CartContainer } from "../../styles/cart.styles";
// Importing actions from  cart.slice.js
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../../redux/Slices/cart.slice";
import {Layout} from "../../components/_layout";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) =>
        accumulator + item.quantity * item.priceRange.maxVariantPrice.amount,
      0
    );
  };

  return (
    <Layout topbar={true}>
      <CartContainer>
        {cart.length === 0 ? (
          <h1>Your Cart is Empty!</h1>
        ) : (
          <>
            <div className="header">
              <div>Image</div>
              <div>Product</div>
              <div>Size & Color</div>
              <div>Price</div>
              <div>Quantity</div>
              <div>Actions</div>
              <div>Total Price</div>
            </div>
            {cart.map((item, i) => (
              <div className="body" key={i}>
                <div className="image">
                  <img
                    src={item.images.edges[0].node.src}
                    height="90"
                    width="65"
                    alt="product"
                  />
                </div>
                <p>{item.title}</p>
                <p>
                  {
                    item.options.filter((item) => item.name === "Size")[0]
                      .values[0]
                  }{" "}
                  :{" "}
                  {
                    item.options.filter((item) => item.name === "Color")[0]
                      .values[0]
                  }
                </p>
                <p>$ {item.priceRange.maxVariantPrice.amount}</p>
                <p>{item.quantity}</p>
                <div className="buttons">
                  <button onClick={() => dispatch(incrementQuantity(item.id))}>
                    +
                  </button>
                  <button onClick={() => dispatch(decrementQuantity(item.id))}>
                    -
                  </button>
                  <button onClick={() => dispatch(removeFromCart(item.id))}>
                    x
                  </button>
                </div>
                <p>
                  $ {item.quantity * item.priceRange.maxVariantPrice.amount}
                </p>
              </div>
            ))}
            <h2> Total: $ {getTotalPrice()}</h2>
          </>
        )}
      </CartContainer>
    </Layout>
  );
};

export default CartPage;
