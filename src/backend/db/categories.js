import { v4 as uuid } from "uuid";
import { product1, product2, product3 } from "../../assets";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Men",
    img:product1,
    description:
      "Women Clothings",
  },
  {
    _id: uuid(),
    categoryName: "Women",
    img:product2,
    description:
      "Men Clothings",
  },
  {
    _id: uuid(),
    categoryName: "Kids",
    img:product3,
    description:
      "Kids Clothings",
  },
];
