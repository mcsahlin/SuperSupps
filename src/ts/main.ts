import { CartItem } from './models/CartItem';
import { Inventory } from './models/Inventory';
import { Cart } from './models/Cart';
import { d, pages, goTo, getPage, refreshCart } from './utils/utils';
import { cartPage } from './pages/cart';
import { itemPage } from './pages/item';
import { indexPage } from './pages';
export const cart: Cart = new Cart(refreshCart());
export const inventory = new Inventory();

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
