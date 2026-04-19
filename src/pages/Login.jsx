import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const ACCESS_KEY = "shiv123";

    if (password === ACCESS_KEY) {
      localStorage.setItem("auth", "true");
      navigate("/feed");
    } else {
      setError("Incorrect access key");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Welcome Back 👋</h2>
        <p className="subtitle">Enter access key to continue</p>

        <form onSubmit={handleLogin} className="login-form">
          <input
            type="password"
            placeholder="Enter access key"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
          />

          {error && <p className="error">{error}</p>}

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;