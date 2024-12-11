import React from 'react';
import { Link } from 'react-router-dom';

const mockDesigns = [
    { id: 1, name: "Modern Villa", designer: "John Doe", rating: 4.8, image: "https://postandporch.com/cdn/shop/articles/AdobeStock_209124760.jpg?v=1662575433&width=1440" },
    { id: 2, name: "Eco House", designer: "Jane Smith", rating: 4.5, image: "https://images.mansionglobal.com/im-357059?width=619" },
    { id: 3, name: "Luxury Bungalow", designer: "Alex Brown", rating: 4.9, image: "https://5.imimg.com/data5/SELLER/Default/2022/10/SJ/QU/BV/29206063/best-home-interior-design-500x500.jpg" },
];

function DesignsPage() {
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Available Designs</h2>
            <div className="row">
                {mockDesigns.map((design) => (
                    <div className="col-md-4 mb-4" key={design.id}>
                        <div className="card">
                            <img src={design.image} className="card-img-top" alt={design.name} />
                            <div className="card-body">
                                <h5 className="card-title">{design.name}</h5>
                                <p className="card-text">Designer: {design.designer}</p>
                                <p className="card-text">Rating: {design.rating}</p>
                                <Link to={`/designs/${design.id}`} className="btn btn-primary">View Details</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DesignsPage;
