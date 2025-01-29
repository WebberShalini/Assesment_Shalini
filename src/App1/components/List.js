import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setItems,
  setPage,
  setHasNextPage,
  setIsLoading,
} from "../../redux/action/listActions";
import { toggleFavorite } from "../../redux/action/favoriteActions";
import { fetchItemsFromAPI } from "../../utils/api";
import { MESSAGES } from "../../constants";
import ItemCard from "../../common/ItemCard";
import BouncingDotsLoader from "../../common/BouncingDotsLoader";

const List = () => {
  const dispatch = useDispatch();
  const { items, page, hasNextPage, isLoading } = useSelector(
    (state) => state.list
  );
  const favorites = useSelector((state) => state.favorites);
  const loaderRef = useRef(null);

  const isPageDataLoaded = (page) => {
    const startIndex = (page - 1) * 10;
    const endIndex = page * 10;
    return items.slice(startIndex, endIndex).length === 10;
  };

  useEffect(() => {
    const fetchItems = async () => {
      if (isPageDataLoaded(page)) {
        console.log(`Page ${page} data already loaded, skipping API call.`);
        return;
      }
      dispatch(setIsLoading(true));
      try {
        const data = await fetchItemsFromAPI(page);
        if (data.length > 0) {
          dispatch(setItems([...items, ...data]));
          dispatch(setHasNextPage(true));
        } else {
          dispatch(setHasNextPage(false));
        }
      } catch (error) {
        console.error(MESSAGES.LOADING_ERROR, error);
      } finally {
        dispatch(setIsLoading(false));
      }
    };

    fetchItems();
  }, [page, dispatch]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isLoading) {
          dispatch(setPage(page + 1));
        }
      },
      { threshold: 1.0 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [hasNextPage, isLoading, page, dispatch]);

  return (
    <div className="list-page">
      <div className="back-button">
        <button onClick={() => window.history.back()}>Back to Dashboard</button>
      </div>

      <h2>List of Items</h2>

      <ul className="item-list">
        {items.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            isFavorite={favorites.some((fav) => fav.id === item.id)}
            onToggleFavorite={(item) => dispatch(toggleFavorite(item))}
          />
        ))}
      </ul>
      {isLoading && <BouncingDotsLoader />}
      {hasNextPage && !isLoading && (
        <div className="scroll-message" ref={loaderRef}>
          Scroll to load more...
        </div>
      )}
      {!hasNextPage && <p className="loading">No more items to load.</p>}
    </div>
  );
};

export default List;
