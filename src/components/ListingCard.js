import React, { useState } from "react";
import Header from "./Header";

function ListingCard ({ listing, onDeleteListing }) {

  const { id, description, image, location } = listing;
  const [ isFavorite, setIsFavorite ] = useState(false)

  const handleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  const onTrash = () => {
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: 'DELETE',
     })
     onDeleteListing(listing)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button 
          onClick={handleFavorite}
            className="emoji-button favorite active"
          >★</button>
        ) : (
          <button
            onClick={handleFavorite} 
            className="emoji-button favorite"
          >☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={onTrash} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
