import {
  API_BASE_URL,
  PHOTOS_ENDPOINT,
  ITEMS_PER_PAGE,
} from "../constants/index";

export const fetchItemsFromAPI = async (page) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}${PHOTOS_ENDPOINT}?_page=${page}&_limit=${ITEMS_PER_PAGE}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching items from API:", error);
    throw error;
  }
};
