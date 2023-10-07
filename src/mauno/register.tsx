import { GoogleAuthProvider } from "firebase/auth";
import { useAuth } from "../firebase";
import "./App.css";
import { useState } from "react";
import { Button } from "react-bootstrap";
export const Register = () => {
  const auth = useAuth();
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

          <Button type="submit">Register</Button>
        </form>
        <Button
          className="googleLogin"
          onClick={auth.signInWithProvider(new GoogleAuthProvider())}
        >
          Login with Google
        </Button>
      </div>
    </div>
  );
};
export default Register;
