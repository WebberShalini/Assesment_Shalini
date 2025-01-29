import React from "react";
import PropTypes from "prop-types";

const ItemCard = ({ item, isFavorite, onToggleFavorite }) => {
  return (
    <li className="item-card">
      <p>ID: {item.id}</p>
      <p className="item-title">{item.title}</p>
      <img src={item.thumbnailUrl} alt={item.title} />

      <button
        className={isFavorite ? "remove-favorite-btn" : "add-favorite-btn"}
        onClick={() => onToggleFavorite(item)}
      >
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </li>
  );
};

ItemCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
  }).isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
};

export default ItemCard;
