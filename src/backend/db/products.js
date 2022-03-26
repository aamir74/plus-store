import { v4 as uuid } from "uuid";
import { product1, product2, product3 } from "../../assets";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "LEOTUDE",
    img: product1,
    price: "5000",
    categoryName: "Men",
    rating: "5",
  },
  {
    _id: uuid(),
    name: "VOXATI",
    img: product2,
    price: "1000",
    categoryName: "Men",
    rating: "2",
  },
  {
    _id: uuid(),
    name: "MONTREZ",
    img: product3,
    price: "2500",
    categoryName: "Men",
    rating: "4",
  },
  {
    _id: uuid(),
    name: "LEOTUDE",
    img: product1,
    price: "5200",
    categoryName: "Women",
    rating: "5",
  },
  {
    _id: uuid(),
    name: "VOXATI",
    img: product2,
    price: "3500",
    categoryName: "Women",
    rating: "2",
  },
  {
    _id: uuid(),
    name: "MONTREZ",
    img: product3,
    price: "2500",
    categoryName: "Women",
    rating: "4",
  },
  {
    _id: uuid(),
    name: "LEOTUDE",
    img: product1,
    price: "3100",
    categoryName: "Kids",
    rating: "5",
  },
  {
    _id: uuid(),
    name: "VOXATI",
    img: product2,
    price: "1200",
    categoryName: "Kids",
    rating: "2",
  },
  {
    _id: uuid(),
    name: "MONTREZ",
    img: product3,
    price: "2500",
    categoryName: "Kids",
    rating: "4",
  },
];
