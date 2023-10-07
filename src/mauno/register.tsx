import { GoogleAuthProvider } from "firebase/auth";
import { auth, useAuth } from "../firebase";
import "./App.css";
import { Link } from "react-router-dom";
export const Register = () => {
  let auth = useAuth();

  return (
    <div className="App">
      <div className="auth-form-container">
        <form className="register-form">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="yourmail@mail.com"
            id="email"
            name="email"
          />

          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            placeholder="First name"
            id="first-name"
            name="first-name"
          />

          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            placeholder="Last name"
            id="last-name"
            name="last-name"
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="***********"
            id="password"
            name="password"
          />

          <button>Register</button>
        </form>
        <button className="googleLogin"
          onClick={auth.signInWithProvider(new GoogleAuthProvider())}
        >
          Login with Google
        </button>
        <Link to="/register">
        Already have an account? Login Here.
        </Link>        
      </div>
    </div>
  );
};
export default Register;
