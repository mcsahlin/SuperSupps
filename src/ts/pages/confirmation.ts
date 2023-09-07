import { createElement } from '../utils/utils';
import { main } from '../utils/utils';

export function confirmatinPage() {
	let thankyou = createElement<HTMLHeadingElement>(
		'h1',
		{
			class: 'confirmation__thankyou',
		},
		'Thank you for your purchase!'
	);
	main.appendChild(thankyou);
	localStorage.clear();
	setTimeout(() => {
		window.location.pathname = '';
	}, 3000);
}
