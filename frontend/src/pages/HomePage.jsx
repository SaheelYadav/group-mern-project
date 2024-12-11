import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const [form, setForm] = useState({ area: '', budget: '', shape: '' });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/designs?area=${form.area}&budget=${form.budget}&shape=${form.shape}`);
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center">Welcome to DreamDesigns</h1>
            <p className="text-center">Find the perfect design for your dream home!</p>
            <form className="mt-4" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Enter area (sq ft)"
                        value={form.area}
                        onChange={(e) => setForm({ ...form, area: e.target.value })}
                        required
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Enter budget ($)"
                        value={form.budget}
                        onChange={(e) => setForm({ ...form, budget: e.target.value })}
                        required
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Shape of land (e.g., Rectangular)"
                        value={form.shape}
                        onChange={(e) => setForm({ ...form, shape: e.target.value })}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">Search Designs</button>
            </form>
        </div>
    );
}

export default HomePage;
