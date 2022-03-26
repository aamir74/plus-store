const ratingFilter = (products, rating) => {
  console.log("rating", rating);
  if (rating) {
    return [...products].filter(
      (item) => parseInt(item.rating) >= parseInt(rating)
    );
  }
  return products;
};
export { ratingFilter };
