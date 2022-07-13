const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOW_TO_HIGH":
      return { ...state, sortBy: action.type };
    case "HIGH_TO_LOW":
      return { ...state, sortBy: action.type };
    case "CATEGORY":
      if (!state.category.includes(action.categoryType)) {
        return { ...state, category: [...state.category, action.categoryType] };
      }
      const filterCategories = state.category.filter(
        (item) => item !== action.categoryType
      );
      return { ...state, category: filterCategories };
    case "PRICE":
      return { ...state, price: action.price_value };
    case "RATING":
      return { ...state, rating: action.rating };
    case "CLEAR":
      return {
        sortBy: "",
        category: [],
        price: 10000,
        rating: "",
      };
    default:
      return state;
  }
};
export { filterReducer };
