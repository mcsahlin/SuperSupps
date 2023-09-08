import { cart } from '../main';
import { Cart } from '../models/Cart';
import { CartItem } from '../models/CartItem';
export const d = document;
export const w = window;
export const main = d.getElementById('main') as HTMLDivElement;
export const pages = {
	index: '',
	item: 'item',
	cart: 'cart',
	checkout: 'checkout',
	confirmation: 'confirmation',
};
export function refreshCart(cart: Cart) {
	if (localStorage.getItem('cartData')) {
		cart.data = JSON.parse(localStorage.getItem('cartData') as string);
	} else {
		cart.data = [];
	}
}
export function getPage(): string {
	if (window.location.pathname === '/') {
		return pages.index;
	}
	return window.location.pathname.split('/').pop() as string;
}

export function createHtml(htmlTag: string, className: string): HTMLElement {
	const newElement = document.createElement(htmlTag) as HTMLElement;
	newElement.classList.add(className);
	return newElement;
}

// Create new html with dynamic HTMLElement return type
export function createElement<T extends HTMLElement>(
	htmlTag: string,
	attributes: { [attr: string]: string },
	content: string = ''
): T {
	const newElement = document.createElement(htmlTag) as T;
	for (const attr in attributes) {
		if (attr == 'class') {
			newElement.className = attributes[attr];
			continue;
		}
		newElement.setAttribute(attr, attributes[attr]);
	}
	if (content) {
		newElement.innerHTML = content;
	}
	return newElement as T;
}

// export function createHtmlElementWithClassAndId(
// 	htmlTagName: string,
// 	className: string,
// 	idName: string
// ): HTMLElement {
// 	let htmlElement = createHtml(htmlTagName, className);
// 	htmlElement.setAttribute('id', idName);

// 	return htmlElement;
// }

export function generateId(): string {
	let s4 = () => {
		return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1) as string;
	};
	return (
		s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()
	);
}

export function goTo(page: string = pages.index) {
	main.innerHTML = '';
	window.location.href = page;
	main.className = `page page--${page}`;
}

export function createBanner(bannerText: string) {
	let banner = d.createElement('div') as HTMLDivElement;
	banner.className = 'banner';

	let bannerHeading = d.createElement('h1') as HTMLHeadingElement;
	bannerHeading.className = 'banner__heading';
	bannerHeading.innerText = bannerText;

	banner.appendChild(bannerHeading);
	main.appendChild(banner);
}

export function setCartListener(): void {
	let cartContainer = d.getElementById('navbar__cart-btn') as HTMLDivElement;
	cartContainer.addEventListener('click', (e: MouseEvent) => {
		e.preventDefault();
		goTo(pages.cart);
	});
}

//* Checks if user runs site in dev mode
export function isOffline(): boolean {
	let online = navigator.onLine;
	return !online;
}

export const uploadCart = (cart: Cart) => {
	if (!cart.data) return;
	localStorage.setItem('cartData', JSON.stringify(cart.data) as string);
};

export const setCart = (cart: Cart) => {
	cart.data = JSON.parse(localStorage.getItem('cartData') || '[]');
	let counter = 0;
	let cartCounter = d.getElementById('cart-counter') as HTMLSpanElement;
	cart.data.map((item: CartItem) => {
		counter += item.quantity;
	});
	cartCounter.innerText = counter.toString();
};

export function setMain(page: string = pages.index) {
	main.className =
		page === pages.index ? `page page--index` : `page page--${page}`;
}
