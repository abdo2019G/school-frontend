import React from 'react';
import "./Signup.css";
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='addUser'>
        <h3>Sign Up</h3>
        <form className='addUserForm'>
            <div className='inputGroup'>
                <label htmlFor='name'>Organization Name</label>
                <input 
                type='text' 
                id='name' 
                autoComplete='off' 
                placeholder='Enter Your Organization Name' 
                />
                 <label htmlFor='Address'>address</label>
                <input 
                type='text' 
                id='address' 
                autoComplete='off' 
                placeholder='Enter Your Address' 
                />
                 <label htmlFor='Phone'>Phone</label>
                <input 
                type='number' 
                id='Phone' 
                autoComplete='off' 
                placeholder='Enter Your Phone' 
                />
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
                <Link to="/" type="Submit" class="btn btn-success">Sign Up</Link>
            </div>
        </form>
        <div className='login'>
            <p>Already have an account ? </p>
            <Link to="/login" type="submit" class="btn btn-secondary">Login</Link>
        </div>
    </div>
  );
};

export default Signup;
