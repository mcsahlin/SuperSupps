export class Product {
	id: string;
	price: string;
	label: string;
	description: string;
	imgLink: string;
	constructor(
		id: string,
		label: string,
		price: string,
		description: string,
		imgLink: string
	) {
		this.id = id;
		this.imgLink = imgLink;
		this.price = price;
		this.label = label;
		this.description = description;
	}
}
export const pillOptions = ['60 pcs', '120 pcs'] as string[];
export const powderOptions = [
	'Chocolate',
	'Banana',
	'Caramel',
	'Fizzy pop',
	'Jungle Juice',
	'Tropical',
] as string[];
