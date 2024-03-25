import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
    const [loginData, setLoginData] = useState({ email: "", password: "" });
    let navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:9000/login', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(loginData)
            });
            const data = await response.json();
            console.log(data);
            if (data.token) {
                localStorage.setItem("token", data.token);
                localStorage.setItem("user", data.user);
                // window.location.href = "/welcome";
                navigate("/welcome");
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error("Login error:", error);
        }
    };

    return (
        <div className="login">
            <h1>Login</h1>
            <div className="main_row">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" alt="" />
                <div className="inputs">
                    <div className="signup">
                        <span>Sign Up with <b></b><i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-google"></i>
                        <i className="fa-brands fa-twitter" ></i></span>
                    </div>
                    <p className='or'>Or</p>
                    <input type="text" name='email' placeholder='Email address' value={loginData.email} onChange={handleChange} />
                    <input type="password" name='password' placeholder='Password' value={loginData.password} onChange={handleChange} />
                    <div className="remember_row">
                        <div>
                            <input type="checkbox" className='checkbox' />
                            <span>Remember me</span>
                        </div>
                        <div>
                            <Link to='/changePassword'>Forgot password?</Link>
                        </div>
                    </div>
                    <button className='signUp_btn' onClick={handleLogin}>Login</button>
                    <p>Dont have an account? <Link to='/register'>Register here</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
