import "./App.css";
export const Register = () => {
  return (
    <div className="App">
      <div className="auth-form-container">
        <form className="register-form">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="youremail@gmail.com"
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
        <button className="link-btn">
          Already have an account? Login Here.
        </button>
      </div>
    </div>
  );
};
export default Register;
