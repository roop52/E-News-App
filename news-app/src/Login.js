import React, { useState } from 'react';
import './Login.css'; // Import your CSS file for styling
import image from "./assets/1.png"
import image1 from "./assets/google.png"
import axois from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Login(){
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault();
    axois.post('http://localhost:3001/login', {email, password})
    .then(result => {
      // console.log(result)
      if(result.data === "Sucess"){
        localStorage.setItem('user', email)
        navigate('/')
      }else {
        alert('Incorrect email or password. Please try again.');
      }
    })
    .catch(err=> console.log(err))
 }

  return (
    // <div className="login-container1">
    //   <h2>Login</h2>
    //   <form onSubmit={handleSubmit}>
    //     <div className="form-group1">
    //       <label htmlFor="email">Email:</label>
    //       <input
    //         type="email"
    //         placeholder="Enter Email"
    //         autoComplete='off'
    //         id="email"
    //         onChange={(e)=> setEmail(e.target.value)}
    //         name="email"
    //       />
    //     </div>
    //     <div className="form-group1">
    //       <label htmlFor="password">Password:</label>
    //       <input
    //         type="password"
    //         placeholder="Enter Password"
    //         autoComplete='off'
    //         id="password"
    //         onChange={(e)=> setPassword(e.target.value)}
    //         name="password"
    //       />
    //     </div>
    //     <button type="submit" className="btn1">Login</button>
    //   </form>
    // </div>
    <div className="container d-flex justify-content-center align-items-center min-vh-100">


       <div className="row border rounded-5 p-3 bg-white shadow box-area">


       <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box" style={{"background" : "#E043FF"}}>
           <div className="featured-image mb-3">
            <img src={image} className="img-fluid" alt='Image' style={{"width": "250px"}}/>
           </div>
           <p className="text-light fs-2" style={{"font-weight": "600"}}>Be Verified</p>
           <small className="text-light text-wrap text-center" style={{"width": "17rem"}}>Join exclusive News on this platform.</small>
       </div> 
        
       <div className="col-md-6 right-box">
       <form onSubmit={handleSubmit}>
          <div className="row align-items-center">
                <div className="header-text mb-4">
                     <h2>Hello,Again</h2>
                     <p>We are happy to have you back.</p>
                </div>
                <div className="input-group mb-3">
                    <input type="email"
                     id="email"
                     onChange={(e)=> setEmail(e.target.value)}
                     className="form-control form-control-lg bg-light fs-6"
                     placeholder="Email address"/>
                </div>
                <div className="input-group mb-1">
                    <input type="password"
                    className="form-control form-control-lg bg-light fs-6"
                    placeholder="Enter Password"
                    autoComplete='off'
                    id="password"
                    onChange={(e)=> setPassword(e.target.value)}
                    name="password"/>
                </div>
                <div className="input-group mb-5 d-flex justify-content-between">
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="formCheck"/>
                        <label for="formCheck" className="form-check-label text-secondary"><small>Remember Me</small></label>
                    </div>
                    <div className="forgot">
                        <small><a href="#">Forgot Password?</a></small>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <button className="btn btn-lg btn-primary w-100 fs-6">Login</button>
                </div>
                <div className="input-group mb-3">
                    <button className="btn btn-lg btn-light w-100 fs-6">
                      <img src={image1} alt='News' style={{"width": "20px"}} className="me-2"/>
                      <small>Sign In with Google<Link to='/Login'></Link></small></button>
                </div>
                <div className="row">
                    <small>Don't have account? <Link to='/Register'>Register</Link></small>
                </div>
          </div>
          </form>
       </div> 

       

      </div>
    </div>

  );
};

export default Login;