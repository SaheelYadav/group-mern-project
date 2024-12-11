import React from 'react';

function SignupPage() {
    return (
        <div className="container mt-5">
            <h2 className="text-center">Signup</h2>
            <form className="mt-4">
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Name" required />
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Email" required />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" placeholder="Password" required />
                </div>
                <button type="submit" className="btn btn-primary w-100">Signup</button>
            </form>
        </div>
    );
}

export default SignupPage;
