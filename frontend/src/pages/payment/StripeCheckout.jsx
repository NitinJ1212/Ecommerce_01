import axios from "axios";
import api from "../../api";

const StripeCheckout = ({ cartItems }) => {
  const handleCheckout = async () => {

    const res = await api.post("/payments/create-payment-intent", {
      "products": [
        {
          "name": "T-Shirt",
          "price": 20,
          "quantity": 2
        },
        {
          "name": "Shoes",
          "price": 50,
          "quantity": 1
        }
      ]
    }
    );
    console.log(res, "----------------")


    // const res = await axios.post(
    //   "http://localhost:5000/api/payment/create-checkout-session",
    //   { products: cartItems }
    // );

    window.location.href = res.data.url;
  };

  return (
    <button onClick={handleCheckout}>
      Pay with Stripe
    </button>
  );
};

export default StripeCheckout;
