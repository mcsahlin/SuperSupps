import { createBanner, createHtml, createElement } from '../utils/utils';
import { main } from '../utils/utils';

export const checkoutPage = () => {
	createBanner('Checkout');
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

	let inputFirstname = createElement<HTMLInputElement>('input', {
		class: 'form__input form__input--firstname',
		type: 'text',
		required: 'true',
		placeholder: 'Firstname',
	});
	fieldsetDetails.appendChild(inputFirstname);

	let inputLastname = createElement<HTMLInputElement>('input', {
		class: 'form__input form__input--lastname',
		type: 'text',
		required: 'true',
		placeholder: 'Lastname',
	});
	fieldsetDetails.appendChild(inputLastname);

	let inputStreet = createElement<HTMLInputElement>('input', {
		class: 'form__input form__input--street',
		type: 'text',
		required: 'true',
		placeholder: 'Street',
	});
	fieldsetDetails.appendChild(inputStreet);

	let inputCity = createElement<HTMLInputElement>('input', {
		class: 'form__input form__input--city',
		type: 'text',
		required: 'true',
		placeholder: 'City',
	});
	fieldsetDetails.appendChild(inputCity);

	let inputState = createElement<HTMLInputElement>('input', {
		class: 'form__input form__input--state',
		type: 'text',
		required: 'true',
		placeholder: 'State',
	});
	fieldsetDetails.appendChild(inputState);

	let inputZip = createElement<HTMLInputElement>('input', {
		class: 'form__input form__input--zip',
		type: 'text',
		required: 'true',
		placeholder: 'Zip',
	});
	fieldsetDetails.appendChild(inputZip);

	let inputEmail = createElement<HTMLInputElement>('input', {
		class: 'form__input form__input--email',
		type: 'email',
		required: 'true',
		placeholder: 'Email',
	});
	fieldsetDetails.appendChild(inputEmail);

	let inputPhone = createElement<HTMLInputElement>('input', {
		class: 'form__input form__input--phone',
		type: 'tel',
		required: 'true',
		placeholder: 'Phone',
	});
	fieldsetDetails.appendChild(inputPhone);

	//* Payment details
	let inputCardName = createElement<HTMLInputElement>('input', {
		class: 'form__input form__input--card-name',
		type: 'text',
		required: 'true',
		placeholder: 'Name on card',
	});
	fieldsetPayment.appendChild(inputCardName);

	//! Card number
	let inputCardNumber = createElement<HTMLInputElement>('input', {
		class: 'form__input form__input--card-num',
		type: 'text',
		required: 'true',
		pattern: '[0-9 ]{3}+[0-9]',
		placeholder: '1234 1234 1234 1234',
	});

	//? Add a space after 4th, 9th, 14th character
	inputCardNumber.addEventListener('input', (e: Event) => {
		e.preventDefault();
		let input: string = inputCardNumber.value;
		if (input.length === 4 || input.length === 9 || input.length === 14) {
			inputCardNumber.value = input + ' ';
		}
	});

	//? Move focus to next input when 19 characters are entered
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
