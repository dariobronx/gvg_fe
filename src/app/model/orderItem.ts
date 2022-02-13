import { Product } from "./product";

export interface OrderItem {
  product: Product;
  pieces: number;
  expense: number;
  ivaExpense: number;
  totalExpense: number;
}
