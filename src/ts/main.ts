import { CartItem } from './models/cartItem';
import { Inventory } from './models/inventory';
import { d, pages, goTo, getPage, refreshCart } from './utils/utils';
import { cartPage } from './pages/cart';
import { itemPage } from './pages/item';
export const cart: CartItem[] = refreshCart();
export const inventory = new Inventory();

// Get page based on url
const url = window.location.href;
const endpoint = url.split('/').pop();
console.log(endpoint);

const page = getPage();
console.log(page);
const topLogo = d.getElementById('top-logo') as HTMLAnchorElement;
topLogo.addEventListener('click', (e: MouseEvent) => {
	e.preventDefault();
	window.location.href = pages.index;
});

switch (page) {
	case pages.index:
		indexPage();
		break;

	case pages.item:
		console.log(page);
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
