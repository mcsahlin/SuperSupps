import { CartItem } from './models/cartItem';
import { Inventory } from './models/inventory';
import {
	d,
	main,
	pages,
	goTo,
	getPage,
	refreshCart,
	createHeader,
	createNavbar,
	createMain,
	createFooter,
} from './utils';
import { indexPage } from './utils/pages';
import { cartPage } from './utils/pages/cart';
import { itemPage } from './utils/pages/item';
export const cart: CartItem[] = refreshCart();
export const inventory = new Inventory();
const page: string =
	getPage() !== undefined ? `${pages}.${getPage()}` : pages.index;
document.body.appendChild(createHeader());
document.body.appendChild(createNavbar());
document.body.appendChild(createMain(page));
document.body.appendChild(createFooter());

// Set location
const loc = window.location.href;
console.log('Location: ', loc);

let test = d.createElement('h1') as HTMLHeadingElement;
test.innerText = loc as string;

const cartIcon = d.getElementById('cart-icon') as HTMLImageElement;
cartIcon.addEventListener('click', (e: MouseEvent) => {
	e.preventDefault();
	goTo(pages.cart);
});
