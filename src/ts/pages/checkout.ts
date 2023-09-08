import { cart } from '../main';
import {
	createBanner,
	createHtml,
	createElement,
	refreshCart,
	uploadCart,
	setCart,
	goTo,
} from '../utils/utils';
import { main } from '../utils/utils';
import { cartPage } from './cart';

export const checkoutPage = () => {
	createBanner('Checkout');

	cart.data.forEach((item) => {
		// Print div container
		let itemContainer = createElement<HTMLDivElement>('div', {
			class: 'checkout__item',
		});
		main.appendChild(itemContainer);

		// Print remove button & item image container
		let imgBox = createElement<HTMLDivElement>('div', {
			class: 'checkout__imgBox',
		});
		itemContainer.appendChild(imgBox);

		// Print remove button
		let removeBtn = createElement<HTMLButtonElement>('button', {
			class: 'checkout__removeBtn btn',
		});
		removeBtn.innerText = 'X';
		imgBox.appendChild(removeBtn);

		// Print item image
		let img = createElement<HTMLImageElement>('img', {
			class: 'checkout__img',
			src: item.imgLink,
			alt: item.label,
		});
		imgBox.appendChild(img);

		// Print item label
		let label = createHtml('span', 'checkout__label');
		label.innerText = item.label;
		itemContainer.appendChild(label);

		// Print item price & quantity container
		let priceQtyBox = createElement<HTMLDivElement>('div', {
			class: 'checkout__priceQtyBox',
		});
		itemContainer.appendChild(priceQtyBox);

		// Print item price
		let price = createHtml('span', 'checkout__price');
		price.innerText = Number(item.price) * Number(item.quantity) + ':-';
		priceQtyBox.appendChild(price);

		// Print item quantity input
		let qtyInput = createElement<HTMLInputElement>('input', {
			class: 'checkout__qtyInput',
			type: 'number',
			min: '1',
			max: '10',
			value: item.quantity.toString(),
		});
		priceQtyBox.appendChild(qtyInput);

		// Create event listener for quantity input and update cart and rerender this page
		qtyInput.addEventListener('change', (e: Event) => {
			e.preventDefault();
			item.quantity = parseInt(qtyInput.value);
			uploadCart(cart);
			setCart(cart);
			goTo('checkout');
		});
	});

	// Print total price
	let totalBox = createElement<HTMLDivElement>(
		'div',
		{
			class: 'checkout__totalBox',
		},
		`Total: ${cart.getTotal().toString()}:-`
	);
	main.appendChild(totalBox);

	let form = createElement<HTMLFormElement>('form', {
		class: 'form',
		action: 'confirmation',
		method: 'POST',
	});
	main.appendChild(form);

	let fieldsetDetails = createElement<HTMLFieldSetElement>('fieldset', {
		class: 'form__fs form__fs--details',
	});
	form.appendChild(fieldsetDetails);

	let legendDetails = createElement<HTMLLegendElement>(
		'legend',
		{
			class: 'form__legend form__legend--details',
		},
		'Shipping details'
	);
	fieldsetDetails.appendChild(legendDetails);

	let fieldsetPayment = createElement<HTMLFieldSetElement>('fieldset', {
		class: 'form__fs form__fs--payment-card',
	});
	form.appendChild(fieldsetPayment);

	let legendPayment = createElement<HTMLLegendElement>(
		'legend',
		{
			class: 'form__legend form__legend--payment-card',
		},
		'Payment details'
	);
	fieldsetPayment.appendChild(legendPayment);

	let inputFirstname = createElement<HTMLInputElement>(
		'input',
		{
			class: 'form__input form__input--firstname',
			type: 'text',
			required: 'true',
			placeholder: 'Firstname',
		},
		(sessionStorage.getItem('firstname') as string) || ''
	);
	inputFirstname.addEventListener('blur', (e: Event) => {
		e.preventDefault();
		if (inputFirstname.value.length < 2) {
			sessionStorage.setItem('firstname', inputFirstname.value);
		}
	});
	fieldsetDetails.appendChild(inputFirstname);

	let inputLastname = createElement<HTMLInputElement>('input', {
		class: 'form__input form__input--lastname',
		type: 'text',
		required: 'true',
		placeholder: 'Lastname',
		value: sessionStorage.getItem('lastname') || '',
	});
	inputLastname.addEventListener('blur', (e: Event) => {
		e.preventDefault();
		if (inputLastname.value.length < 2) {
			sessionStorage.setItem('lastname', inputLastname.value);
		}
	});
	fieldsetDetails.appendChild(inputLastname);

	let inputStreet = createElement<HTMLInputElement>('input', {
		class: 'form__input form__input--street',
		type: 'text',
		required: 'true',
		placeholder: 'Street',
		value: sessionStorage.getItem('street') as string,
	});
	inputStreet.addEventListener('blur', (e: Event) => {
		e.preventDefault();
		if (inputStreet.value.length < 2) {
			sessionStorage.setItem('street', inputStreet.value);
		}
	});
	fieldsetDetails.appendChild(inputStreet);

	let inputCity = createElement<HTMLInputElement>('input', {
		class: 'form__input form__input--city',
		type: 'text',
		required: 'true',
		placeholder: 'City',
		value: sessionStorage.getItem('city') || '',
	});
	inputCity.addEventListener('blur', (e: Event) => {
		e.preventDefault();
		if (inputCity.value.length < 2) {
			sessionStorage.setItem('city', inputCity.value);
		}
	});
	fieldsetDetails.appendChild(inputCity);

	let inputState = createElement<HTMLInputElement>('input', {
		class: 'form__input form__input--state',
		type: 'text',
		required: 'true',
		placeholder: 'State',
		value: sessionStorage.getItem('state') || '',
	});
	inputState.addEventListener('blur', (e: Event) => {
		e.preventDefault();
		if (inputState.value.length < 2) {
			sessionStorage.setItem('state', inputState.value);
		}
	});
	fieldsetDetails.appendChild(inputState);

	let inputZip = createElement<HTMLInputElement>('input', {
		class: 'form__input form__input--zip',
		type: 'text',
		required: 'true',
		placeholder: 'Zip',
		value: sessionStorage.getItem('zip') || '',
	});
	inputZip.addEventListener('blur', (e: Event) => {
		e.preventDefault();
		if (inputZip.value.length < 2) {
			sessionStorage.setItem('zip', inputZip.value);
		}
	});
	fieldsetDetails.appendChild(inputZip);

	let inputEmail = createElement<HTMLInputElement>('input', {
		class: 'form__input form__input--email',
		type: 'email',
		required: 'true',
		placeholder: 'Email',
		value: sessionStorage.getItem('email') || '',
	});
	inputEmail.addEventListener('blur', (e: Event) => {
		e.preventDefault();
		if (inputEmail.value.length < 2) {
			sessionStorage.setItem('email', inputEmail.value);
		}
	});
	fieldsetDetails.appendChild(inputEmail);

	let inputPhone = createElement<HTMLInputElement>('input', {
		class: 'form__input form__input--phone',
		type: 'tel',
		required: 'true',
		placeholder: 'Phone',
		value: sessionStorage.getItem('phone') || '',
	});
	fieldsetDetails.appendChild(inputPhone);

	//* Payment details
	let inputCardName = createElement<HTMLInputElement>('input', {
		class: 'form__input form__input--card-name',
		type: 'text',
		required: 'true',
		placeholder: 'Name on card',
		value: sessionStorage.getItem('cardName') || '',
	});
	inputCardName.addEventListener('blur', (e: Event) => {
		e.preventDefault();
		if (inputCardName.value.length < 2) {
			sessionStorage.setItem('cardName', inputCardName.value);
		}
	});
	fieldsetPayment.appendChild(inputCardName);

	let inputCardNumber = createElement<HTMLInputElement>('input', {
		class: 'form__input form__input--card-num',
		type: 'text',
		required: 'true',
		pattern: '[0-9 ]{3}+[0-9]',
		placeholder: '1234 1234 1234 1234',
	});

	inputCardNumber.addEventListener('input', (e: Event) => {
		e.preventDefault();
		let input: string = inputCardNumber.value;
		if (input.length === 4 || input.length === 9 || input.length === 14) {
			inputCardNumber.value = input + ' ';
		}
	});

	inputCardNumber.addEventListener('input', (e: Event) => {
		e.preventDefault();
		let input: string = inputCardNumber.value;
		if (input.length === 19) {
			inputCardExpiration.focus();
		}
	});
	fieldsetPayment.appendChild(inputCardNumber);

	//* CARD EXPIRATION DATE
	let inputCardExpiration = createElement<HTMLInputElement>('input', {
		class: 'form__input form__input--card-exp',
		type: 'text',
		required: 'true',
		pattern: '[0-9]{2}+[0-9]',
		placeholder: 'MM/YY',
	});
	// -> Add a slash after 2nd character
	inputCardExpiration.addEventListener('input', (e: Event) => {
		e.preventDefault();
		let input: string = inputCardExpiration.value;
		if (input.length === 2) {
			inputCardExpiration.value = input + '/';
		}
	});
	// -> Move focus to next input when 5 characters are entered
	inputCardExpiration.addEventListener('input', (e: Event) => {
		e.preventDefault();
		let input: string = inputCardExpiration.value;
		if (input.length === 5) {
			inputCardCsv.focus();
		}
	});
	fieldsetPayment.appendChild(inputCardExpiration);

	//* CARD CSV
	let inputCardCsv = createElement<HTMLInputElement>('input', {
		class: 'form__input form__input--csv',
		type: 'text',
		required: 'true',
		pattern: '[0-9]{3}',
		placeholder: 'CSV',
	});
	// -> Move focus to next input when 3 characters are entered
	inputCardCsv.addEventListener('input', (e: Event) => {
		e.preventDefault();
		let input: string = inputCardCsv.value;
		if (input.length === 3) {
			btnConfirm.focus();
		}
	});
	fieldsetPayment.appendChild(inputCardCsv);

	//* CONFIRM BUTTON
	let btnConfirm = createElement<HTMLButtonElement>(
		'button',
		{
			class: 'form__btn--confirm btn',
			type: 'submit',
		},
		'Confirm purchase'
	);
	form.appendChild(btnConfirm);
};

//* List all classnames used in this file from top to bottom:
// form
// form__fs
// form__fs--details
// form__fs--payment-card
// form__legend
// form__legend--details
// form__legend--payment-card
// form__input
// form__input--firstname
// form__input--lastname
// form__input--street
// form__input--city
// form__input--state
// form__input--zip
// form__input--email
// form__input--phone
// form__input--card-name
// form__input--card-num
// form__input--card-exp
// form__input--csv
// form__btn--confirm btn
