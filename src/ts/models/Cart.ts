import { CartItem } from "./cartItem";

export class Cart {
  data: CartItem[];
  constructor() {
    this.data = [];
  }

  add(item: CartItem): void {
    this.data.push(item);
  }

  remove(id: string): void {
    this.data = this.data.filter((item) => item.id !== id);
  }

  update(id: string, qty: number): void {
    this.data.map((item) => {
      if (item.id === id) {
        item.quantity = qty;
      }
    });
  }

  get(): CartItem[] {
    return this.data;
  }

  getTotal(): number {
    let total: number = 0;
    this.data.map((item) => {
      // total += item.itemSum;
    });
    return total;
  }

  getQty(): number {
    let qty: number = 0;
    this.data.map((item) => {
      qty += item.quantity;
    });
    return qty;
  }
}