const handleFilter = (e, dispatch) => {
  const value = e.target.value;
  const name = e.target.name;
  if (value === "asc") dispatch({ type: "LOW_TO_HIGH" });
  else if (value === "desc") dispatch({ type: "HIGH_TO_LOW" });
  else if (name === "rating")
    dispatch({
      type: "RATING",
      rating: parseInt(value),
    });
  else if (name === "category")
    dispatch({
      type: "CATEGORY",
      categoryType: value,
    });
  else if (name === "price")
    dispatch({
      type: "PRICE",
      price_value: value,
    });
  else if (name === "clear")
    dispatch({
      type: "CLEAR",
    });
};
export { handleFilter };
