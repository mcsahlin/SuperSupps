import { cart } from '../main';
import { CartItem } from '../models/CartItem';
import {
	main,
	goTo,
	pages,
	createBanner,
	uploadCart,
	setCart,
	createElement,
} from '../utils/utils';

let cartSumHolder: number = 0;
let itemSumHolder: number = 0;

export function cartPage(fromCheckout: boolean = false) {
	main.innerHTML = '';
	!fromCheckout &&
		createBanner(
			cart.data ? 'Your shopping cart: ' : 'Cart empty, returning . . .'
		);
	//#region EMPTY CART REDIRECT
	if (cart.data.length === 0) {
		createBanner('Cart empty, returning . . .');
		setTimeout(() => {
			window.location.pathname = '';
		}, 3000);
		return;
	}
	//#endregion

	let cartList = createElement<HTMLUListElement>('ul', { class: 'cart__list' });
	main.appendChild(cartList);

	cart.data.map((item) => {
		printItem(item);
	});

	function printItem(item: CartItem) {
		cartSumHolder += item.quantity * parseInt(item.price);
		let listItem = createElement<HTMLLIElement>('li', {
			class: 'cart__listItem',
		});
		cartList.appendChild(listItem);

		let itemDiv = createElement<HTMLDivElement>('div', {
			class: 'cart__itemDiv',
		});
		listItem.appendChild(itemDiv);

		let delImgBox = createElement<HTMLDivElement>('div', {
			class: 'cart__deleteBox',
		});
		itemDiv.appendChild(delImgBox);

		let deleteBtn = createElement<HTMLButtonElement>(
			'button',
			{ class: 'cart__deleteBtn', id: item.id },
			'X'
		);
		deleteBtn.addEventListener('click', (e: MouseEvent) => {
			e.preventDefault();
			cart.data.map((cartItem) => {
				if (cartItem.id === item.id) {
					cart.data.splice(cart.data.indexOf(cartItem), 1);
				}
			});
			uploadCart(cart);
			setCart(cart);
			goTo(pages.cart);
		});
		delImgBox.appendChild(deleteBtn);

		if (!fromCheckout) {
			let imgBox = createElement<HTMLDivElement>('div', {
				class: 'cart__imgBox',
			});
			delImgBox.appendChild(imgBox);

			let img = createElement<HTMLImageElement>('img', {
				class: 'cart__img',
				src: item.imgLink,
				alt: item.label,
			});
			imgBox.appendChild(img);
		}

		let infoBox = createElement<HTMLDivElement>('div', {
			class: 'cart__infoBox',
		});
		itemDiv.appendChild(infoBox);

		let label = createElement<HTMLHeadingElement>(
			'h3',
			{
				class: 'cart__label',
			},
			item.label
		);
		infoBox.appendChild(label);

		let priceAndQtyBox = createElement<HTMLDivElement>('div', {
			class: 'cart__priceAndQtyBox',
		});
		infoBox.appendChild(priceAndQtyBox);

		let price = createElement<HTMLParagraphElement>(
			'p',
			{
				class: 'cart__price',
			},
			`${Number(item.price) * Number(item.quantity)}:-`
		);
		priceAndQtyBox.appendChild(price);

		let qtyInput = createElement<HTMLInputElement>('input', {
			class: 'cart__qtyInput',
			id: item.id,
			type: 'number',
			min: '1',
			max: '10',
			value: item.quantity.toString(),
		});
		qtyInput.addEventListener('change', (e: Event) => {
			cart.data.map((item) => {
				if (item.id === qtyInput.id) {
					item.quantity = parseInt(qtyInput.value);
					uploadCart(cart);
					setCart(cart);
					goTo(pages.cart);
				}
			});
		});
		priceAndQtyBox.appendChild(qtyInput);
	} // END PRINT ITEM
	let totalBox = createElement<HTMLDivElement>('div', {
		class: 'cart__totalBox',
	});
	main.appendChild(totalBox);

	let totalLabel = createElement<HTMLHeadingElement>(
		'h3',
		{
			class: 'cart__totalLabel',
		},
		'Total:'
	);
	main.appendChild(totalLabel);

	let totalSumBox = createElement<HTMLDivElement>(
		'div',
		{
			class: 'cart__totalSum',
		},
		cartSumHolder.toString()
	);
	main.appendChild(totalSumBox);

	let totalSumSpan = createElement<HTMLSpanElement>('span', {
		class: 'cart__totalSumSpan',
	});

	totalSumBox.appendChild(totalSumSpan);

	let checkoutBox = createElement<HTMLDivElement>('div', {
		class: 'cart__checkoutBox',
	});
	main.appendChild(checkoutBox);

	let checkoutBtn = createElement<HTMLButtonElement>(
		'button',
		{
			class: 'cart__checkoutBtn',
		},
		'Checkout'
	);
	checkoutBox.appendChild(checkoutBtn);

	checkoutBtn.addEventListener('click', (e: MouseEvent) => {
		e.preventDefault();
		goTo(pages.checkout);
	});
}
