import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProductsUI = ({ user }) => {
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts("all");
    if (!user) {
      const localCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCart(localCart);
    } else {
      fetchUserCart();
    }
  }, [user]);

  const fetchProducts = async (type) => {
    setLoading(true);
    let url = "http://localhost:5000/product/products/new-arrivals";

    if (type === "new") url = "http://localhost:5000/product/products/new-arrivals";
    if (type === "featured") url = "http://localhost:5000/product/products/featured";
    if (type === "top") url = "http://localhost:5000/product/products/top-selling";

    try {
      const { data } = await axios.get(url);
      setProducts(data.products);
      setActiveTab(type);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

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

  const handleAddToCart = (product) => {
    const productExists = cart.find((item) => item.product._id === product._id);

    if (productExists) {
      navigate("/cart");
    } else {
      const updatedCart = [
        ...cart,
        { product, quantity: 1, price: product.price }
      ];
      saveCart(updatedCart);
    }
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <i
        key={i}
        className={`fas fa-star ${i < Math.round(rating) ? "text-primary" : ""}`}
      />
    ));
  };

  return (
    <div className="container py-5">
      {/* Header + Tabs */}
      <div className="row g-4 mb-4">
        <div className="col-lg-4 text-start">
          <h1>
            Our Products <span className="text-primary">({products.length})</span>
          </h1>
        </div>

       <div className="col-lg-8 text-end">
  <ul className="nav nav-pills justify-content-end flex-wrap mb-5">
    {[
      { id: "all", label: "All Products" },
      { id: "new", label: "New Arrivals" },
      { id: "featured", label: "Featured" },
      { id: "top", label: "Top Selling" },
    ].map((tab) => (
      <li key={tab.id} className="nav-item mb-2">
        <button
          onClick={() => fetchProducts(tab.id)}
          className={`btn btn-sm ${
            activeTab === tab.id ? "btn-primary" : "btn-outline-secondary"
          } rounded-pill mx-1`}
        >
          {tab.label}
        </button>
      </li>
    ))}
  </ul>
</div>

      </div>

      {/* Product Grid */}
      {loading ? (
        <h4 className="text-center">Loading...</h4>
      ) : (
        <div className="row g-4">
          {products.map((product) => {
            const productExists = cart.find(
              (item) => item.product._id === product._id
            );

            return (
              <div key={product._id} className="col-md-6 col-lg-4 col-xl-3">
                <div className="product-item rounded shadow-sm">
                  <div className="product-item-inner border rounded">
                    <div className="product-item-inner-item position-relative">
                      <img
                        src={
                          product.images?.[0]?.url ||
                          "https://images.unsplash.com/photo-1587691592099-24045742c181?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXJsfGVufDB8fDB8fHww"
                        }
                        className="img-fluid w-100 rounded-top"
                        alt={product.name}
                      />
                      {product.sold > 20 && <div className="product-sale">sale</div>}
                      <div className="product-details position-absolute top-0 end-0 p-2">
                        <a href={`/product/${product._id}`}>
                          <i className="fa fa-eye fa-1x text-white" />
                        </a>
                      </div>
                    </div>

                    <div className="text-center rounded-bottom p-4">
                      <a href="#" className="d-block mb-2 text-muted">
                        {product.sub_category}
                      </a>
                      <a href={`/product/${product._id}`} className="d-block h6">
                        {product.name}
                      </a>

                      <div className="mt-2">
                        {product.originalPrice ? (
                          <>
                            <del className="me-2 text-muted">
                              ₹{product.originalPrice.toLocaleString()}
                            </del>
                            <span className="text-primary">
                              ₹{product.price.toLocaleString()}
                            </span>
                          </>
                        ) : (
                          <span className="text-primary">
                            ₹{product.price.toLocaleString()}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="product-item-add border border-top-0 rounded-bottom text-center p-3 pt-0">
                    <button
                      onClick={() =>
                        productExists
                          ? navigate("/cart")
                          : handleAddToCart(product)
                      }
                      className="btn btn-primary rounded-pill py-2 px-4 mb-2 w-100"
                    >
                      <i className="fas fa-shopping-cart me-2" />
                      {productExists ? "Go to Cart" : "Add To Cart"}
                    </button>

                    <div className="d-flex justify-content-between align-items-center mt-2">
                      <div className="d-flex">{renderStars(product.ratings)}</div>

                      <div className="d-flex">
                        <a className="text-primary me-2">
                          <span className="rounded-circle btn-sm-square border">
                            <i className="fas fa-random" />
                          </span>
                        </a>
                        <a className="text-primary">
                          <span className="rounded-circle btn-sm-square border">
                            <i className="fas fa-heart" />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductsUI;
