export const SET_ITEMS = "SET_ITEMS";
export const SET_PAGE = "SET_PAGE";
export const SET_HAS_NEXT_PAGE = "SET_HAS_NEXT_PAGE";
export const SET_IS_LOADING = "SET_IS_LOADING";

export const setItems = (items) => ({
  type: SET_ITEMS,
  payload: items,
});

export const setPage = (page) => ({
  type: SET_PAGE,
  payload: page,
});

export const setHasNextPage = (hasNextPage) => ({
  type: SET_HAS_NEXT_PAGE,
  payload: hasNextPage,
});

export const setIsLoading = (isLoading) => ({
  type: SET_IS_LOADING,
  payload: isLoading,
});
