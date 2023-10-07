import "./App.css";
import { useAuth } from "../firebase";
import { GoogleAuthProvider } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export const Login = () => {
  const auth = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event: any) => {
    event.preventDefault();

    try {
      await auth.signInWithEmailPassword(email, password);
      navigate("/");
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <div className="App">
      <div className="auth-form-container">
        <form className="login-form" onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="yourmail@mail.com"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="***********"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Log In</button>
        </form>
        <button
          className="googleLogin"
          onClick={() => auth.signInWithProvider(new GoogleAuthProvider())}
        >
          Login with Google
        </button>
        <div>
          <Link to="/register">Don't have an account? Register Here.</Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
