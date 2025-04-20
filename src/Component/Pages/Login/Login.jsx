import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


      const handlelogin =() => {
        if(email.endsWith('@user.com') && password){
        
        navigate('/Home')
        }else if(email.endsWith('@admin.com') && password){
            navigate('/Dashbord')
         
        }else{
            alert('Please fill in both fields');
        }
        }
  return (
    <div className="login-container d-flex justify-content-center align-items-center vh-100">
      <div className="card-login p-4 shadow-lg rounded" style={{ width: "25rem" }}>
        <h2 className="text-center mb-4 text-primary">Login</h2>
        <form  onSubmit={handlelogin}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
       value={email} 
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)} 
            />
          
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="exampleInputPassword1" 
                   onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Remember me
            </label>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>

          <p className="text-center mt-4">I don't have your account?<Link to={"/Register"}>Register</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
