import { CartItem } from './models/cartItem';
import { indexPage } from './utils/pages';
import { cartPage } from './utils/pages/cart';
import { itemPage } from './utils/pages/item';
export const pages = {
	index: '/index.html',
	item: '/item',
	cart: '/cart',
	checkout: '/checkout',
	confirmation: '/confirmation',
};
export const cart: CartItem[] = refreshCart(); // Get cart from localstorage
export const d = document; // Shorthand for document
export const w = window; // Shorthand for window
export const main = d.createElement('main') as HTMLDivElement; // Create main element
main.setAttribute('id', 'main'); // Set main id to main
const page: string =
	getPage() !== undefined ? `${pages}.${getPage()}` : pages.index; // Get page from url

export function refreshCart() {
	return localStorage.getItem('cartData')
		? JSON.parse(localStorage.getItem('cartData') as string)
		: [];
}
export function getPage(): string {
	// Split like: /index.html -> index.html -> index
	const page = window.location.pathname.split('/').pop() as string;
	if (page === undefined) return 'index'; // If page is undefined, return index
	return page; // If page is undefined, return index
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

export function goTo(page: string) {
	page = page.substring(1);
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
		window.location.href = '/cart';
	});
}

//* Checks if user runs site in dev mode
export function isOffline(): boolean {
	let online = navigator.onLine;
	if (!online) return true;
	return false;
}

/* Create header */
export function createHeader(): HTMLElement {
	const header = d.createElement('header') as HTMLDivElement;
	header.classList.add('top');

	const rollingText = d.createElement('span') as HTMLSpanElement;
	rollingText.classList.add('top__rolling-text');
	rollingText.innerText = 'Free worldwide shipping for all new customers!';
	header.appendChild(rollingText);

	return header;
}
/* Create navbar */
export function createNavbar(): HTMLElement {
	const navbar = document.createElement('nav');
	navbar.classList.add('navbar');

	const logoBox = document.createElement('a');
	logoBox.href = 'index.html';
	logoBox.id = 'top-logo';
	logoBox.classList.add('navbar__logobox');

	const logoSpan1 = document.createElement('span');
	logoSpan1.classList.add('navbar__logo');
	logoSpan1.textContent = 'SUPER';

	const logoSpan2 = document.createElement('span');
	logoSpan2.classList.add('navbar__logo', 'navbar__logo--accent');
	logoSpan2.textContent = 'SUPPS';

	logoBox.appendChild(logoSpan1);
	logoBox.appendChild(logoSpan2);

	const navList = document.createElement('ul');
	navList.classList.add('navbar__list');

	const cartItem = document.createElement('li');
	cartItem.classList.add('navbar__item');

	const cartLink = document.createElement('a');
	cartLink.classList.add('navbar__link');
	cartLink.href = 'cart.html';
	cartLink.textContent = 'Cart';

	cartItem.appendChild(cartLink);
	navList.appendChild(cartItem);

	const checkoutItem = document.createElement('li');
	checkoutItem.classList.add('navbar__item');

	const checkoutLink = document.createElement('a');
	checkoutLink.classList.add('navbar__link');
	checkoutLink.href = 'checkout.html';
	checkoutLink.textContent = 'Checkout';

	checkoutItem.appendChild(checkoutLink);
	navList.appendChild(checkoutItem);

	const cartContainer = document.createElement('div');
	cartContainer.id = 'navbar__cart-btn';
	cartContainer.classList.add('navbar__cart-container');

	const cartIcon = document.createElement('img');
	cartIcon.id = 'cart-icon';
	cartIcon.classList.add('navbar__cart-icon');
	cartIcon.src = 'assets/icons/cart-shopping-fast-svgrepo-com.svg';
	cartIcon.alt = 'Shopping cart';

	const cartCounter = document.createElement('span');
	cartCounter.id = 'cart-counter';
	cartCounter.classList.add('navbar__cart-counter');
	cartCounter.textContent = '0';

	cartContainer.appendChild(cartIcon);
	cartContainer.appendChild(cartCounter);

	navbar.appendChild(logoBox);
	navbar.appendChild(navList);
	navbar.appendChild(cartContainer);

	return navbar;
}
/* Create main */
export function createMain(page: string) {
	main.innerHTML = '';
	main.classList.add(`page.${page}`);
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
			break;
		case pages.confirmation:
			break;

		default:
			console.log('DEFAULT: ', page);
			break;
	}
	return main;
}

/* Create footer */
export function createFooter(): HTMLElement {
	const footer = d.createElement('footer') as HTMLDivElement;
	footer.setAttribute('id', 'footer');
	footer.classList.add('foot');

	// Create logo
	const logoBox = d.createElement('div') as HTMLDivElement;
	logoBox.classList.add('foot__logo-box');

	const logo = d.createElement('span') as HTMLSpanElement;
	logo.classList.add('foot__logo');
	logo.innerText = 'SUPER';

	const logoAccent = d.createElement('span') as HTMLSpanElement;
	logoAccent.classList.add('foot__logo', 'foot__logo--accent');
	logoAccent.innerText = 'SUPPS';

	logoBox.appendChild(logo);
	logoBox.appendChild(logoAccent);

	// Create social links
	const social = d.createElement('div') as HTMLDivElement;
	social.classList.add('foot__social');

	const socialLinks = [
		{
			href: '#',
			icon: 'fab fa-facebook-square',
		},
		{
			href: '#',
			icon: 'fab fa-instagram',
		},
		{
			href: '#',
			icon: 'fab fa-twitter-square',
		},
	];

	socialLinks.forEach((link) => {
		const socialLink = d.createElement('a') as HTMLAnchorElement;
		socialLink.classList.add('foot__link');
		socialLink.setAttribute('href', link.href);

		const socialIcon = d.createElement('i') as HTMLElement;
		socialIcon.classList.add(link.icon);

		socialLink.appendChild(socialIcon);
		social.appendChild(socialLink);
	});

	footer.appendChild(logoBox);
	footer.appendChild(social);
	return footer;
}

export const mountPage = (page: string) => {
	document.body.appendChild(createHeader());
	document.body.appendChild(createNavbar());
	document.body.appendChild(createMain(page));
	document.body.appendChild(createFooter());
};
