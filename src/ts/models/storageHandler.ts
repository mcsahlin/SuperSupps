import { CartItem } from './cartItem';

export class CartStorage {
	getData(): CartItem[] | false {
		const data: CartItem[] = JSON.parse(localStorage.getItem('cart') as string);
		if (!data) {
			localStorage.removeItem('cart');
			return false;
		}
		return data;
	}

	setData(data: CartItem[]) {
		this.getData() &&
			localStorage.setItem('prevCartData', JSON.stringify(this.getData()));
		localStorage.setItem('cartData', JSON.stringify(data));
	}
}
