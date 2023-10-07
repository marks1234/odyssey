import { Button } from "react-bootstrap";
import "./App.css";
import useUserInfo from "../useUserInfo";
import { useAuth } from "../firebase";
import { GoogleAuthProvider } from "firebase/auth";
import { Link } from "react-router-dom";
export const Login = () => {
  let auth = useAuth();

  return (
    <div className="App">
      <div className="auth-form-container">
        <form className="login-form">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="yourmail@mail.com"
            id="email"
            name="email"
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="***********"
            id="password"
            name="password"
          />

          <button>Log In</button>
        </form>
        <button className="googleLogin"
          onClick={auth.signInWithProvider(new GoogleAuthProvider())}
          >
          Login with Google
        </button>
          <div>
        <Link to="/register">
          Don't have an account? Register Here.
        </Link>
      </div>
      </div>
    </div>
  );
};
export default Login;
