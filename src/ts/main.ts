import { Inventory } from './models/Inventory';
import { Cart } from './models/Cart';
import {
	d,
	pages,
	goTo,
	getPage,
	refreshCart,
	main,
	setCart,
	setMain,
} from './utils/utils';
import { cartPage } from './pages/cart';
import { itemPage } from './pages/item';
import { indexPage } from './pages';
import { checkoutPage } from './pages/checkout';
import { confirmatinPage } from './pages/confirmation';
export const inventory = new Inventory();
export const cart: Cart = new Cart();
const page = getPage();
setCart(cart);

switch (page) {
	case pages.index:
		setMain(page);
		indexPage();
		break;

	case pages.item:
		setMain(page);
		itemPage();
		break;

	case pages.cart:
		setMain(page);
		cartPage();
		break;

	case pages.checkout:
		setMain(page);
		checkoutPage();
		break;

	case pages.confirmation:
		setMain(page);
		confirmatinPage();
		break;

	default:
		goTo();
		break;
}
