import { Product } from "./product";

export class OrderItem {
  product: Product;
  pieces: number;
  expense: number;
  ivaExpense: number;
  totalExpense: number;

  constructor(product: Product, pieces: number, expense: number, ivaExpense: number, totalExpense: number) {
    this.product = product;
    this.pieces = pieces;
    this.expense = expense;
    this.ivaExpense = ivaExpense;
    this.totalExpense = totalExpense;
  }
}
