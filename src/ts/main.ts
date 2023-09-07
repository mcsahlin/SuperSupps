import { CartItem } from './models/CartItem';
import { Inventory } from './models/Inventory';
import { Cart } from './models/Cart';
import { d, pages, goTo, getPage, refreshCart, main } from './utils/utils';
import { cartPage } from './pages/cart';
import { itemPage } from './pages/item';
import { indexPage } from './pages';
import { checkoutPage } from './pages/checkout';
import { confirmatinPage } from './pages/confirmation';
export const cart: Cart = new Cart(refreshCart());
export const inventory = new Inventory();

const url = window.location.href;
const endpoint = url.split('/').pop();

const page = getPage();
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
		itemPage();
		break;

	case pages.cart:
		cartPage();
		break;

	case pages.checkout:
		checkoutPage();
		break;

	case pages.confirmation:
		confirmatinPage();
		break;

	default:
		indexPage();
		break;
}

main.className =
	page === pages.index ? `page page--index` : `page page--${page}`;

const cartIcon = d.getElementById('cart-icon') as HTMLImageElement;
cartIcon.addEventListener('click', (e: MouseEvent) => {
	e.preventDefault();
	goTo(pages.cart);
});
