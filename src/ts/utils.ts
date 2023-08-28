import { CartItem } from './models/cartItem';
export const d = document;
export const w = window;
export const main = d.getElementById('main') as HTMLDivElement;
export const pages = {
	index: '/' || '' || '/index.html',
	item: '/item',
	cart: '/cart',
	checkout: '/checkout',
	confirmation: '/confirmation',
};
export function refreshCart() {
	return localStorage.getItem('cartData')
		? JSON.parse(localStorage.getItem('cartData') as string)
		: [];
}
export function getPage(): string {
	return window.location.pathname.split('/').pop() as string;
}

export function createHtml(htmlTag: string, className: string): HTMLElement {
	const newElement = document.createElement(htmlTag) as HTMLElement;
	newElement.classList.add(className);
	return newElement;
}

export function createHtmlElementWithClassAndId(
	htmlTagName: string,
	className: string,
	idName: string
): HTMLElement {
	let htmlElement = createHtml(htmlTagName, className);
	htmlElement.setAttribute('id', idName);

	return htmlElement;
}

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
	main.className = `page page--${page}`;
	window.location.href = page;
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
	if (!online) return true;
	return false;
}
