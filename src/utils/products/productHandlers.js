import { categoryFilter, priceFilter, ratingFilter, sortFilter } from "..";
import { getProducts } from "../../services";

const getProductsData = async (setProducts, state) => {
  let productsList = await getProducts();
  if (productsList.status === 200) {
    productsList = productsList.data.products;
    productsList = sortFilter(productsList, state.sortBy);
    productsList = priceFilter(productsList, state.price);
    productsList = ratingFilter(productsList, state.rating);
    productsList = categoryFilter(productsList, state.category);
    setProducts(productsList);
  }
};
export { getProductsData };
