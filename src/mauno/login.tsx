import "./App.css";
import { useAuth } from "../firebase";
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import { Button } from "react-bootstrap";

export const Login = () => {
  const auth = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event: any) => {
    event.preventDefault();

    try {
      await auth.signInWithEmailPassword(email, password);
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
        <Button type="submit">Log In</Button>
        </form>
        <Button className="googleLogin"
          onClick={auth.signInWithProvider(new GoogleAuthProvider())}
        >
          Login with Google
        </Button>
      </div>
    </div>
  );
};
export default Login;
