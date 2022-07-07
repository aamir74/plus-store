const ratingFilter = (products, rating) => {
  if (rating) {
    return [...products].filter(
      (item) => parseInt(item.rating) >= parseInt(rating)
    );
  }
  return products;
};
export { ratingFilter };
