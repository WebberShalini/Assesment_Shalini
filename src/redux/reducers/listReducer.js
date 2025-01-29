import {
  SET_ITEMS,
  SET_PAGE,
  SET_HAS_NEXT_PAGE,
  SET_IS_LOADING,
} from "../action/listActions";

const initialState = {
  items: [],
  page: 1,
  hasNextPage: true,
  isLoading: false,
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return { ...state, items: action.payload, isLoading: false };
    case SET_PAGE:
      return { ...state, page: action.payload };
    case SET_HAS_NEXT_PAGE:
      return { ...state, hasNextPage: action.payload };
    case SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export default listReducer;
