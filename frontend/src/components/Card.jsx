import React from "react";

const Card = ({ item, onEdit, onDelete }) => {
    return (
        <li className="card">
            <div className="card-content">
                <strong className="card-title">{item.title}</strong>
                <p className="card-description">{item.description}</p>
            </div>
            <div className="card-actions">
                <button className="card-button" onClick={onEdit}>
                    Edit
                </button>
                <button className="card-button" onClick={onDelete}>
                    Delete
                </button>
            </div>
        </li>
    );
};

export default Card;
