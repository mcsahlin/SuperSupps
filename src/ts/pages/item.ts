import { inventory, cart } from '../main';
import { CartItem } from '../models/CartItem';
import { Product } from '../models/product';
import { main, createBanner, d } from '../utils/utils';

export function itemPage(): void {
	main.className = 'page page--item';
	let id = JSON.parse(localStorage.getItem('itemId') as string);
	let item = inventory.data.filter((item) => item.id === id)[0];
	createBanner(item.label);
	printItem(item);

	function printItem(item: Product) {
		let imgBox = d.createElement('div') as HTMLDivElement;
		imgBox.className = 'item__imgBox';
		main.appendChild(imgBox);

		let img = d.createElement('img') as HTMLImageElement;
		img.src = item.imgLink;
		img.alt = item.label;
		imgBox.appendChild(img);

		let buyBox = d.createElement('div') as HTMLDivElement;
		let cartBtn = d.createElement('button') as HTMLButtonElement;
		cartBtn.className = 'item__cartBtn';
		buyBox.className = 'item__buyBox';
		main.appendChild(buyBox);

		let qtyBox = d.createElement('div') as HTMLDivElement;
		qtyBox.className = 'item__qtyBox';
		buyBox.appendChild(qtyBox);

		let qtyLabel = d.createElement('label') as HTMLLabelElement;
		qtyLabel.innerText = 'Quantity:';
		qtyLabel.className = 'item__qtyLabel';
		qtyBox.appendChild(qtyLabel);

		let qtyInc = d.createElement('button') as HTMLButtonElement;
		qtyInc.className = 'item__qtyInc';
		qtyInc.innerText = '+';
		qtyBox.appendChild(qtyInc);

		qtyInc.addEventListener('click', (e: MouseEvent) => {
			e.preventDefault();
			if (qtyInput.value !== '10') {
				qtyInput.value = (parseInt(qtyInput.value) + 1).toString();
			}
			renderBuyBtn(true);
		});
		let qtyInput = d.createElement('input') as HTMLInputElement;
		qtyInput.type = 'number';
		qtyInput.className = 'item__qtyInput';
		qtyInput.min = '1';
		qtyInput.max = '10';
		qtyInput.value = '1';
		qtyBox.appendChild(qtyInput);
		qtyInput.addEventListener('change', (e: Event) => {
			e.preventDefault();
			renderBuyBtn(true);
		});

		let qtyDec = d.createElement('button') as HTMLButtonElement;
		qtyDec.className = 'item__qtyDec';
		qtyDec.innerText = '-';
		qtyBox.appendChild(qtyDec);

		qtyDec.addEventListener('click', (e: MouseEvent) => {
			e.preventDefault();
			if (qtyInput.value !== '1') {
				qtyInput.value = (parseInt(qtyInput.value) - 1).toString();
			}
			renderBuyBtn(true);
		});

		renderBuyBtn();

		function renderBuyBtn(refresh?: boolean) {
			refresh && buyBox.removeChild(cartBtn);

			let sum = Number(qtyInput.value) * Number(item.price);

			cartBtn.innerText = `Add to Cart (${sum.toString()}:-)`;
			cartBtn.className = 'item__cartBtn';
			cartBtn.setAttribute('id', item.id);
			cartBtn.addEventListener('click', (e: MouseEvent) => {
				e.preventDefault();
				cart.add(new CartItem(item, parseInt(qtyInput.value)));
			});
			buyBox.appendChild(cartBtn);
		}

		let descBox = d.createElement('div') as HTMLDivElement;
		descBox.className = 'item__descBox';
		main.appendChild(descBox);

		let descLabel = d.createElement('h3') as HTMLHeadingElement;
		descLabel.className = 'item__descLabel';
		descLabel.innerText = 'Description:';
		descBox.appendChild(descLabel);

		let desc = d.createElement('article') as HTMLDivElement;
		desc.className = 'item__desc';
		desc.innerText = item.description;
		descBox.appendChild(desc);
	}
}
