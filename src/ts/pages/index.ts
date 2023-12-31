import { cart, inventory } from '../main';
import { CartItem } from '../models/CartItem';
import { Product } from '../models/product';
import { createBanner, d, isOffline, main } from '../utils/utils';

export function indexPage() {
	main.className = 'page page--index';
	createBanner('Products:');
	const itemFeed = d.createElement('div') as HTMLDivElement;
	itemFeed.id = 'item-feed';
	itemFeed.className = 'item-feed';
	main.appendChild(itemFeed);
	inventory.data.map((item) => {
		printItem(item);
		if (inventory.data.filter((i) => i.id !== item.id)) {
			const triangle = d.createElement('div') as HTMLDivElement;
			triangle.className = 'item__triangle';
			itemFeed.appendChild(triangle);
		}
	});

	function printItem(item: Product) {
		let container = d.createElement('div') as HTMLDivElement;
		container.id = item.id;
		container.className = 'item';
		itemFeed.appendChild(container);
		let label = d.createElement('h3') as HTMLHeadingElement;
		label.innerText = item.label;
		label.className = 'item__label';
		label.addEventListener('click', (e: MouseEvent) => {
			e.preventDefault();
			localStorage.setItem('itemId', JSON.stringify(container.id));
			window.location.href = 'item';
		});
		container.appendChild(label);
		let imgBox = d.createElement('div') as HTMLDivElement;
		imgBox.className = 'item__imgBox';
		imgBox.addEventListener('click', (e: MouseEvent) => {
			e.preventDefault();
			localStorage.setItem('itemId', JSON.stringify(container.id));
			window.location.href = 'item';
		});
		container.appendChild(imgBox);

		let img = d.createElement('img') as HTMLImageElement;
		img.setAttribute('src', item.imgLink);
		img.setAttribute(
			'alt',
			isOffline() ? 'Image requires internet connection' : item.label
		);
		img.className = 'item__img';
		imgBox.appendChild(img);

		let buyBox = d.createElement('div') as HTMLDivElement;
		buyBox.className = 'item__buyBox';
		container.appendChild(buyBox);

		let markup = d.createElement('h4') as HTMLHeadingElement;
		markup.innerText = `${item.price} SEK`;
		markup.className = 'item__markup';
		buyBox.appendChild(markup);

		let cartBtn = d.createElement('button') as HTMLButtonElement;
		cartBtn.className = 'item__cartBtn';
		cartBtn.innerText = 'Add to Cart';
		cartBtn.id = item.id;
		cartBtn.addEventListener('click', (e: MouseEvent) => {
			e.preventDefault();
			cart.add(new CartItem(item, 1));
		});
		buyBox.appendChild(cartBtn);
	}
}
