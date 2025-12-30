import { useEffect, useState } from "react";
import axios from "axios";
import { apiDelete, apiGet, apiPost } from "../../api/api";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const user = localStorage.getItem("token");

  useEffect(() => {
    if (user) {
      fetchUserCart();
    } else {
      const localCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCart(localCart);
    }
  }, [user]);

  const fetchUserCart = async () => {
    try {
      const response = await apiGet("/cart");
      setCart(response.items);
      // const { data } = await axios.get("http://localhost:5000/cart", {
      //   headers: { Authorization: `Bearer ${user.token}` },
      // });
      // setCart(data.items);
    } catch (error) {
      console.error("Fetch cart error:", error);
    }
  };

  const saveCart = async (updatedCart) => {
    setCart(updatedCart);

    if (user) {
      try {
        await axios.post(
          "http://localhost:5000/cart",
          { items: updatedCart },
          { headers: { Authorization: `Bearer ${user.token}` } }
        );
      } catch (error) {
        console.error("Save cart error:", error);
      }
    } else {
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const handleQuantityChange = async (productId, quantity) => {
    try {
      const response = await apiPost(`/cart/update`, { productId, quantity });
      if (response) {
        fetchUserCart();
        alert("Cart updated successfully");
      }
    } catch (error) {
      console.error("Failed to update cart:", error);
      alert(
        error?.message || "Something went wrong while updating the cart"
      );
    }
  };

  const handleRemoveItem = async (productId) => {
    const response = await apiDelete(`/cart/remove/${productId}`);
    if (response.status) {
      fetchUserCart();
      alert("Item removed from server cart");
    }
  };

  const totalPrice = cart && cart?.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container my-5">
      <h2 className="mb-4 fw-bold">My Cart ({cart.length})</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {/* Cart Items */}
          {cart.map((item) => (
            <div key={item.product && item.product._id} className="card mb-3 shadow-sm">
              <div className="card-body d-flex align-items-center gap-3">
                <img
                  src={item.product && item.product?.images?.[0]?.url || "https://via.placeholder.com/100"}
                  alt={item.product && item.product.name}
                  className="rounded"
                  width="100"
                />

                <div className="flex-grow-1">
                  <h5 className="mb-1">{item.product && item.product.name}</h5>
                  <p className="text-muted mb-2">₹{item.price.toLocaleString()}</p>
                  {console.log(item)}
                  <div className="d-flex align-items-center gap-2">
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => handleQuantityChange(item.product && item.product._id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="fw-semibold">{item.quantity}</span>
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => handleQuantityChange(item.product && item.product._id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => handleRemoveItem(item.product && item.product._id)}
                >
                  ✕
                </button>
              </div>
            </div>
          ))}

          {/* Summary */}
          <div className="card shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span>₹{totalPrice.toLocaleString()}</span>
              </div>

              <div className="d-flex justify-content-between fw-bold fs-5 mb-3">
                <span>Total</span>
                <span>₹{totalPrice.toLocaleString()}</span>
              </div>

              <button className="btn btn-dark w-100">Proceed to Checkout</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
