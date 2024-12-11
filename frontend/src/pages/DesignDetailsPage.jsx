import React from 'react';
import { useParams } from 'react-router-dom';

const mockProfessionals = [
    { id: 1, name: "Alice", role: "Contractor", contact: "alice@build.com" },
    { id: 2, name: "Bob", role: "Engineer", contact: "bob@designs.com" },
];

function DesignDetailsPage() {
    const { id } = useParams();
    const design = {
        name: "Modern Villa",
        image: "https://postandporch.com/cdn/shop/articles/AdobeStock_209124760.jpg?v=1662575433&width=1440",
        details: "A luxurious villa designed with modern aesthetics and eco-friendly features.",
    };

    return (
        <div className="container design-details">
            <h1>{design.name}</h1>
            <img src={design.image} alt={design.name} />
            <p>{design.details}</p>
            <h2>Associated Professionals</h2>
            <ul className="professional-list">
                {mockProfessionals.map((pro) => (
                    <li key={pro.id}>
                        <p><strong>Name:</strong> {pro.name}</p>
                        <p><strong>Role:</strong> {pro.role}</p>
                        <p><strong>Contact:</strong> {pro.contact}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DesignDetailsPage;
