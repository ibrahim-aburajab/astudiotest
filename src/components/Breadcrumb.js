import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation

const Breadcrumb = ({ paths }) => {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {paths.map((path, index) => (
                    <li key={index} className={`breadcrumb-item ${index === paths.length - 1 ? 'active' : ''}`}>
                        {index === paths.length - 1 ? path.label : <Link to={path.url}>{path.label}</Link>}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
