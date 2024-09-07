import React from "react";
import { useCart } from "react-use-cart";
import "./Cart.css";

const Cart = () => {
  const {
    items,
    isEmpty,
    totalItems,
    totalUniqueItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty) return <h1 className="text-center empty">Your Cart is Empty, Add Items To Your Cart</h1>;
  
  return (
    <div className="cart">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h5 className="cart-totl-item">
              Cart: {totalUniqueItems}, Total Items: ({totalItems})
            </h5>

            <div className="table-responsive">
            <table className="table table-light table-hover m-0 shadow">
              <tbody>
                <tr>
                  <th className="cart-header">Item</th>
                  <th className="cart-header">Name</th>
                  <th className="cart-header">Price</th>
                  <th className="cart-header">Quantity</th>
                  <th className="cart-header">-</th>
                  <th className="cart-header">+</th>
                  <th className="cart-header">Remove</th>
                </tr>
                {items.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <img src={item.image} alt="" className="cart-img" />
                      </td>
                      <td className="cart-name">{item.name}</td>
                      <td className="cart-price">${item.price}</td>
                      <td className="item-qty">{item.quantity}</td>
                      <td>
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                          className="btn-minus"
                        >
                          -
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                          className="btn-add"
                        >
                          +
                        </button>
                      </td>

                      <td>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="btn-remove btn btn-danger"
                        >
                          Remove Item
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            </div>
          </div>

          <div className="mt-5">
            <div className="col-auto ms-auto">
              <h2 className="total-price">Total Price: ${cartTotal}</h2>
            </div>

            <div className="col-auto mt-3">
              <button onClick={() => emptyCart()} className="btn btn-danger btn-clear ">Clear Cart</button>
              <button className="btn clear-buy  btn-buy">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
