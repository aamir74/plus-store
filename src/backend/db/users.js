import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    username:"aamir",
    email: "aamir@gmail.com",
    contact_no:"8286237776",
    password: "123456",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },  {
    _id: uuid(),
    username:"tanay",
    email: "tanay74@gmail.com",
    contact_no:"8286237776",
    password: "tanay74",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
