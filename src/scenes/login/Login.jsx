import React from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='addUser'>
        <h3>Sign In</h3>
        <form className='addUserForm'>
            <div className='inputGroup'>
                 <label htmlFor='Email'>Email</label>
                <input 
                type='Email' 
                id='Email' 
                autoComplete='off' 
                placeholder='Enter Your Email' 
                />
                 <label htmlFor='Password'>Password</label>
                <input 
                type='Password' 
                id='Password' 
                autoComplete='off' 
                placeholder='Enter Your Password' 
                />
                <Link to="/" type="Submit" class="btn btn-success">Login</Link>
            </div>
        </form>
        <div className='login'>
            <p>Don't have an account ? </p>
            <Link to="/signup" type="submit" class="btn btn-secondary">Sign Up</Link>
        </div>
    </div>
  );
};

export default Login;
