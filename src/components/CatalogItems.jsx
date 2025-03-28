import React from 'react';
//import PropTypes from 'prop-types';


export default function CatalogItems({ items }) {

    const catalogItems = [
    {
        name: "Will Fowlds",
        category: "Developer",
        website: "https://dandeveloper.dev"     
    }];

    return (
        <div>
            {catalogItems.map((item, index) => (
            <div>
                <h2>{item.name}</h2>
                <h3>Specialty: {item.category}</h3>
                <a href={item.website} target="_blank" rel="noopener noreferrer">
                Learn more
                </a>
            </div>
            ))}
        </div>
    );
}