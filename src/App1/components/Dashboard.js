import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../../redux/action/favoriteActions";
import { Link } from "react-router";
import { MESSAGES } from "../../constants";
import ItemCard from "../../common/ItemCard";
const Dashboard = () => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Dashboard</h2>
        <div className="go-to-list-button">
          <Link to="/app1/list">
            <button>Go to List</button>
          </Link>
        </div>
      </div>

      <h3>Favorites</h3>
      {favorites.length === 0 ? (
        <p>{MESSAGES.NO_FAVORITES}</p>
      ) : (
         <div className="favorites-list">
          <ul className="item-list">
            {favorites.map((item) => (
              <ItemCard
                key={item.id}
                item={item}
                isFavorite={true}
                onToggleFavorite={(item) => dispatch(toggleFavorite(item))}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
