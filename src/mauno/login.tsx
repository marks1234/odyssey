export const Login = () => {
    return (
        
        <div className="App">
           
            <div className="auth-form-container">
                <form className="login-form">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="youremail@gmail.com" id="email" name="email"/>

                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="***********" id="password" name="password"/>

                    <button>Log In</button>
                </form>
                <button className="link-btn">Don't have an account? Register Here.</button>
            </div>
        </div>
    )
}
export default Login;
