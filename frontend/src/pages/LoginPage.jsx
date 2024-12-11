import React from 'react';

function LoginPage() {
    return (
        <div className="container mt-5">
            <h2 className="text-center">Login</h2>
            <form className="mt-4">
                <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Email" required />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" placeholder="Password" required />
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;
