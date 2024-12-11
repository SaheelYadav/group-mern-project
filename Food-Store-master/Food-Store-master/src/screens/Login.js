import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
export default function Login() {
  const [credentials, setcredentials] = useState({ email: "", password: "" })
  let navigate=useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5001/API/loginuser",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: credentials.email, password: credentials.password })
      });
    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter Valid Credentials");
    }
    else{
      localStorage.setItem("userEmail",credentials.email);
      localStorage.setItem("authToken",json.authToken);
      console.log(localStorage.getItem("authToken"))
        navigate("/");
    }
  }
  const onchange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value })
  }
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", backgroundColor: "#e9ecef" }}>
    <div className="card p-4 shadow-sm" style={{ width: "100%", maxWidth: "400px" }}>
      <h2 className="text-center mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input 
            type="email" 
            className="form-control" 
            name='email' 
            value={credentials.email} 
            onChange={onchange} 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp" 
          />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input 
            type="password" 
            className="form-control" 
            name='password' 
            value={credentials.password} 
            onChange={onchange} 
            id="exampleInputPassword1" 
          />
        </div>
        <button type="submit" className="btn btn-success w-100 mb-3">Submit</button>
        <Link to="/createuser" className='btn btn-outline-danger w-100'>I'm a new user</Link>
      </form>
    </div>
  </div>
  
  )
}
