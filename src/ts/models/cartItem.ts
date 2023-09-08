import { Product } from './product';

export class CartItem extends Product {
	quantity: number = 0;
	sum: number = 0;
	constructor(item: Product, quantity: number) {
		super(item.id, item.label, item.price, item.description, item.imgLink);
		this.setQty(quantity);
		this.setSum();
	}

	setQty(incomingQty: number) {
		this.quantity += incomingQty;
	}
	getQty(): number {
		return this.quantity;
	}

	getSum(): number {
		return this.sum;
	}

	setSum() {
		let multiplied: number = this.getQty() * parseInt(this.price);
		this.sum = multiplied;
	}

	copyFound(cart: CartItem[]): boolean {
		if (cart.find((obj) => obj.id === this.id)) {
			return true;
		} else {
			return false;
		}
	}
}
