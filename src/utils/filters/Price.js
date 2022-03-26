const priceFilter = (products, price) => {
  return [...products].filter((item) => item.price <= price);
};
export { priceFilter };
