import { CartItem } from './models/cartItem';
import { Inventory } from './models/inventory';
import { d, pages, goTo, getPage, refreshCart } from './utils';
import { indexPage } from './utils/pages';
import { cartPage } from './utils/pages/cart';
import { itemPage } from './utils/pages/item';
export const cart: CartItem[] = refreshCart();
export const inventory = new Inventory();
const page = getPage();
console.log(page);
const topLogo = d.getElementById('top-logo') as HTMLAnchorElement;
topLogo.addEventListener('click', (e: MouseEvent) => {
	e.preventDefault();
	window.location.href = pages.index;
});

console.log(page);
switch (page) {
	case pages.index:
		indexPage();
		break;

	case pages.item:
		itemPage();
		break;

	case pages.cart:
		cartPage();
		break;
	default:
		break;
}

const cartIcon = d.getElementById('cart-icon') as HTMLImageElement;
cartIcon.addEventListener('click', (e: MouseEvent) => {
	e.preventDefault();
	goTo(pages.cart);
});
