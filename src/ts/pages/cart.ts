import { cart } from '../main';
import { CartItem } from '../models/cartItem';
import { Product } from '../models/product';
import { main, d, goTo, pages, createBanner } from '../utils';

export function cartPage() {
	// If cart is empty, print message and redirect to index
	if (cart.length === 0) {
		function navPrev(seconds: number = 3) {
			let timer = setInterval(() => {
				seconds--;
				if (seconds === 0) {
					clearInterval(timer);
					goTo(pages.index);
				}
			}, 1000);

			return timer;
		}

		createBanner('Cart empty, returning . . .');
		setTimeout(() => {
			goTo(pages.index);
		}, 3000);
	}
	createBanner('Your shopping cart: ');

	// Container
	let container = d.createElement('div') as HTMLDivElement;
	container.className = 'cart';
	main.appendChild(container);

	// Cart list
	let cartList = d.createElement('ul') as HTMLUListElement;
	cartList.className = 'cart__list';
	container.appendChild(cartList);

	// For each item in cart, print item
	cart.map((item) => {
		printItem(item);
		function printItem(item: CartItem) {
			// CONTAINER
			let listItem = d.createElement('li') as HTMLLIElement;
			listItem.className = 'cart__listItem';
			cartList.appendChild(listItem);

			let itemDiv = d.createElement('div') as HTMLDivElement;
			itemDiv.className = 'cart__itemDiv';
			listItem.appendChild(itemDiv);

			// DEL BTN BOX
			let deleteBox = d.createElement('div') as HTMLDivElement;
			deleteBox.className = 'cart__deleteBox';
			itemDiv.appendChild(deleteBox);

			let deleteBtn = d.createElement('button') as HTMLButtonElement;
			deleteBtn.className = 'cart__deleteBtn';
			deleteBtn.innerText = 'X';
			deleteBox.appendChild(deleteBtn);

			deleteBtn.addEventListener('click', (e: MouseEvent) => {
				e.preventDefault();
				let index = cart.indexOf(item);
				cart.splice(index, 1);
				localStorage.setItem('cart', JSON.stringify(cart));
				// setCart();
				goTo(pages.cart);
			});

			// IMG BOX
			let imgBox = d.createElement('div') as HTMLDivElement;
			imgBox.className = 'cart__imgBox';
			itemDiv.appendChild(imgBox);

			let img = d.createElement('img') as HTMLImageElement;
			img.src = item.imgLink;
			img.alt = item.label;
			img.className = 'cart__img';
			imgBox.appendChild(img);

			// INFO BOX
			let infoBox = d.createElement('div') as HTMLDivElement;
			infoBox.className = 'cart__infoBox';
			itemDiv.appendChild(infoBox);

			let label = d.createElement('h3') as HTMLHeadingElement;
			label.className = 'cart__label';
			label.innerText = item.label;
			infoBox.appendChild(label);

			let price = d.createElement('p') as HTMLParagraphElement;
			price.className = 'cart__price';
			price.innerText = `${item.price}:-`;
			infoBox.appendChild(price);

			let qtyInput = d.createElement('input') as HTMLInputElement;
			qtyInput.type = 'number';
			qtyInput.className = 'cart__qtyInput';
			qtyInput.min = '1';
			qtyInput.max = '10';
			qtyInput.value = item.quantity.toString();
			infoBox.appendChild(qtyInput);

			qtyInput.addEventListener('change', (e: Event) => {
				e.preventDefault();
				let qty: number = parseInt(qtyInput.value);
				let pri: number = parseInt(item.price);
				let sum: number = qty * pri;
				let sumStr: string = sum.toString();
				sumBox.innerText = `Sum: ${sumStr}:-`;
				item.quantity = qty;
				// item.itemSum = sum;
				localStorage.setItem('cart', JSON.stringify(cart));
				// setCart();
			});

			let sumBox = d.createElement('p') as HTMLParagraphElement;
			sumBox.className = 'cart__sum';
			infoBox.appendChild(sumBox);
			let sum: number = item.quantity * parseInt(item.price);
			let sumStr: string = sum.toString();
			sumBox.innerText = `Sum: ${sumStr}:-`;
		}
	});

	// TOTAL BOX
	let totalBox = d.createElement('div') as HTMLDivElement;
	totalBox.className = 'cart__totalBox';
	container.appendChild(totalBox);

	let totalLabel = d.createElement('h3') as HTMLHeadingElement;
	totalLabel.className = 'cart__totalLabel';
	totalLabel.innerText = 'Total:';
	totalBox.appendChild(totalLabel);

	let totalSum = d.createElement('p') as HTMLParagraphElement;
	totalSum.className = 'cart__totalSum';
	totalSum.innerText = `${getTotal()}:-`;
	totalBox.appendChild(totalSum);

	function getTotal(): number {
		let total: number = 0;
		cart.map((item) => {
			total += item.quantity * parseInt(item.price);
		});
		return total;
	}

	// CHECKOUT BOX
	let checkoutBox = d.createElement('div') as HTMLDivElement;
	checkoutBox.className = 'cart__checkoutBox';
	container.appendChild(checkoutBox);

	let checkoutBtn = d.createElement('button') as HTMLButtonElement;
	checkoutBtn.className = 'cart__checkoutBtn';
	checkoutBtn.innerText = 'Checkout';
	checkoutBox.appendChild(checkoutBtn);

	checkoutBtn.addEventListener('click', (e: MouseEvent) => {
		e.preventDefault();
		goTo(pages.checkout);
	});
}
