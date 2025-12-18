import React, { useState } from "react";
import api from "../api"; // ✅ import your Axios instance
import { useNavigate } from "react-router-dom";

export default function Login({ setIsAuth }) {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // handle input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // ✅ use your api instance
      const res = await api.post("/login", formData);

      if (res?.data?.success) {
        console.log(res,"---------------------")
        // Save token and user
        localStorage.setItem("token", res?.data?.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setIsAuth(true);
        setMessage("Login successful ✅");
        navigate("/");
      } else {
        setMessage(res.data.message || "Login failed");
      }
    } catch (err) {
      setMessage(err.response?.data?.message || "Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="container"
      style={{
        maxWidth: 400,
        marginTop: 80,
        background: "#f9f9f9",
        padding: 20,
        borderRadius: 10,
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      <h3 className="text-center mb-4">Login</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {message && (
          <div
            className={`alert mt-3 ${message.includes("successful") ? "alert-success" : "alert-danger"
              }`}
          >
            {message}
          </div>
        )}
      </form>
    </div>
  );
}
