import { CartItem } from './CartItem';

export class Cart {
	data: CartItem[];
	constructor(data: CartItem[] = []) {
		this.data = data;
	}

	add(item: CartItem): void {
		if (this.itemExists(item.id)) {
			this.update(item.id, true, item.quantity);
		} else {
			this.data.push(item);
		}
		localStorage.setItem('cartData', JSON.stringify(this.data));
	}

	count(): number {
		let count = 0;
		this.data.map((item) => {
			count += item.quantity;
		});
		return count;
	}

	itemExists(id: string): boolean {
		return this.data.find((item) => item.id === id) ? true : false;
	}

	remove(id: string): void {
		this.data = this.data.filter((item) => item.id !== id);
	}

	update(id: string, plus: boolean, qty: number): void {
		this.data.map((item) => {
			if (item.id === id) {
				plus && (item.quantity += qty);
				!plus && (item.quantity -= qty);
			}
		});
	}

	getTotal(): number {
		let total: number = 0;
		this.data.map((item: CartItem) => {
			total += item.sum;
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
