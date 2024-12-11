import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", geolocation: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5001/API/CreateUser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.geolocation
      })
    });

    const json = await response.json();
    console.log(json);

    if (json.success) {
      setSuccessMessage("User created successfully!");
      setErrorMessage(""); // Clear any previous errors
      setCredentials({ name: "", email: "", password: "", geolocation: "" }); // Reset form fields
    } else {
      setErrorMessage("Enter valid credentials");
      setSuccessMessage(""); // Clear any previous success messages
    }
  }

  const onchange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  }

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", backgroundColor: "#f4f7fc" }}>
      <div className="card p-4 shadow-sm" style={{ width: "100%", maxWidth: "500px" }}>
        <h2 className="text-center mb-4">Create Account</h2>
        
        {successMessage && <div className="alert alert-success" role="alert">{successMessage}</div>}
        {errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={credentials.name}
              onChange={onchange}
              id="name"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
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
              name="password"
              value={credentials.password}
              onChange={onchange}
              id="exampleInputPassword1"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputGeolocation" className="form-label">Location</label>
            <input
              type="text"
              className="form-control"
              name="geolocation"
              value={credentials.geolocation}
              onChange={onchange}
              id="exampleInputGeolocation"
            />
          </div>

          <button type="submit" className="btn btn-success w-100 mb-3">Submit</button>
          <Link to="/login" className="btn btn-outline-danger w-100">Already a user?</Link>
        </form>
      </div>
    </div>
  )
}
