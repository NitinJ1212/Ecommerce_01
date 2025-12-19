import { useEffect, useState } from "react";
import axios from "axios";

const Cart = ({ user }) => {
  const [cart, setCart] = useState([]);

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
      const { data } = await axios.get("http://localhost:5000/cart", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      setCart(data.items);
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

  const handleQuantityChange = (productId, delta) => {
    const updatedCart = cart.map((item) => {
      if (item.product._id === productId) {
        const newQty = item.quantity + delta;
        return { ...item, quantity: newQty > 0 ? newQty : 1 };
      }
      return item;
    });
    saveCart(updatedCart);
  };

  const handleRemoveItem = (productId) => {
    const updatedCart = cart.filter((item) => item.product._id !== productId);
    saveCart(updatedCart);
  };

  const totalPrice = cart.reduce(
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
            <div key={item.product._id} className="card mb-3 shadow-sm">
              <div className="card-body d-flex align-items-center gap-3">
                <img
                  src={item.product.images?.[0]?.url || "https://via.placeholder.com/100"}
                  alt={item.product.name}
                  className="rounded"
                  width="100"
                />

                <div className="flex-grow-1">
                  <h5 className="mb-1">{item.product.name}</h5>
                  <p className="text-muted mb-2">₹{item.price.toLocaleString()}</p>

                  <div className="d-flex align-items-center gap-2">
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => handleQuantityChange(item.product._id, -1)}
                    >
                      -
                    </button>
                    <span className="fw-semibold">{item.quantity}</span>
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => handleQuantityChange(item.product._id, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => handleRemoveItem(item.product._id)}
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
