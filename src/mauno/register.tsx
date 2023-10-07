import { GoogleAuthProvider } from "firebase/auth";
import { useAuth } from "../firebase";
import "./App.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
export const Register = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e: any) => {
    e.preventDefault();

    registerUser({ email, firstName, lastName, password });
  };

  const registerUser = (userData: any) => {
    auth
      .registerEmailPassword(
        userData.email,
        userData.password,
        userData.firstName,
        userData.lastName
      )
      .then(() => {
        navigate("/");
      });
  };

  return (
    <div className="App">
      <div className="auth-form-container">
        <form className="register-form" onSubmit={handleRegister}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            placeholder="First name"
            id="first-name"
            name="first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            placeholder="Last name"
            id="last-name"
            name="last-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
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

          <button type="submit">Register</button>
        </form>
        <button
          className="googleLogin"
          onClick={auth.signInWithProvider(new GoogleAuthProvider())}
        >
          Login with Google
        </button>
        <Link to="/login">Already have an account? Login Here.</Link>
      </div>
    </div>
  );
};
export default Register;
