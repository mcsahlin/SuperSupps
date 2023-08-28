import { Product, pillOptions, powderOptions } from './product';

export class Inventory {
	data: Product[] = [];

	constructor() {
		this.data = this.setSampleData();
	}

	setSampleData(): Product[] {
		let lorem: string =
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, eaque ducimus? Distinctio doloremque inventore architecto fuga consequuntur et, doloribus nesciunt velit nisi, a blanditiis commodi soluta? Pariatur tenetur eum impedit placeat omnis accusantium magni, fuga reiciendis excepturi natus quam dignissimos autem, velit sit consequatur nam id repellendus consequuntur repellat totam dicta doloremque debitis. Aperiam quidem voluptate veniam temporibus consequatur, accusantium sit dignissimos a? Laborum vel illo nihil quae dignissimos reiciendis maiores autem eveniet eum nesciunt dolores dolore sit sed repellendus voluptas, exercitationem explicabo perspiciatis aut consequatur incidunt delectus ad! Molestiae vitae commodi laborum eos, velit facere dignissimos voluptatem quasi nam nemo accusamus qui odit impedit temporibus nostrum obcaecati exercitationem recusandae tenetur iste placeat! Iusto veniam, nesciunt temporibus fuga praesentium ab voluptatum, explicabo aut recusandae, totam suscipit earum. Quo molestiae animi omnis deleniti neque impedit numquam earum praesentium iusto, vitae dolores maxime, tempore optio quod! Facilis reiciendis excepturi placeat. Odit ipsum ipsam dignissimos sunt vero dolorem minus delectus provident laudantium sed, ab quia ut unde fugit explicabo blanditiis.';
		let samplePack: Product[] = [
			new Product(
				'6e3775f4-60b3-c708-09e9-2b8943d47587',
				'BioTechUSA Tribooster, 60 caps',
				'229',
				lorem,
				'https://www.tillskottsbolaget.se/bilder/artiklar/zoom/BIOTECH843_1.jpg?m=1625179915'
			),
			new Product(
				'823730ca-dd32-7a6d-37eb-e013e7d961ae',
				'Sportlab Limitless, 60 caps',
				'399',
				lorem,
				'https://www.tillskottsbolaget.se/bilder/artiklar/zoom/SPORTLAB753_1.jpg?m=1654808842'
			),
			new Product(
				'9bbac052-b260-d097-033a-ee05a5095930',
				'Sportlab Focus, NOO-PEPT, 90 caps',
				'249',
				lorem,
				'https://www.tillskottsbolaget.se/bilder/artiklar/zoom/SPORTLAB7853_1.jpg?m=1654808909'
			),
			new Product(
				'872ac8ba-3950-39e6-a87f-abb4b32a547e',
				'Sportlab Androgenic Testo Growth, 120 caps',
				'349',
				lorem,
				'https://www.tillskottsbolaget.se/bilder/artiklar/zoom/SPORTLAB001_1.jpg?m=1654808783'
			),
			new Product(
				'7114bd91-dd97-fffc-21de-7d6ea91f1e29',
				'SOLID Nutrition Collagen, 230 g',
				'149',
				lorem,
				'https://www.tillskottsbolaget.se/bilder/artiklar/SOLID8593.jpg?m=1669844573'
			),
			new Product(
				'b3082711-aea3-5e29-9604-180b2534cd24',
				'Chaos Crew Turkesterone HIGH DOSE - 500 mg, 90 caps',
				'599',
				lorem,
				'https://www.tillskottsbolaget.se/bilder/artiklar/zoom/CHAOS7583_1.jpg?m=1656360007'
			),
			new Product(
				'2f95e709-1f2c-0ec4-3011-784828b2055a',
				'SOLID Nutrition BLACK LINE Turkesterone - 333 mg, 90 caps',
				'549',
				lorem,
				'https://www.tillskottsbolaget.se/bilder/artiklar/zoom/SOLID75832_1.jpg?m=1661374360'
			),
			new Product(
				'4bc59c15-742a-7414-e26f-1308b0952f5d',
				'Optimum Nutrition Opti-Women, 60 caps',
				'189',
				lorem,
				'https://www.tillskottsbolaget.se/bilder/artiklar/zoom/OPTIMUM003_1.jpg?m=1614199819'
			),
			new Product(
				'6db9b2da-64eb-48db-caf7-a2ebc33f04b2',
				'Swedish Supplements Vitamin & Mineral Complex',
				'299',
				lorem,
				'https://www.tillskottsbolaget.se/bilder/artiklar/zoom/SSVMC_1.jpg?m=1653342949'
			),
			new Product(
				'56606634-b18a-0dfc-e1f8-2029a70c9ed4',
				'Star Nutrition Ultimate Omega-3, 90 caps, 80%',
				'229',
				lorem,
				'https://www.tillskottsbolaget.se/bilder/artiklar/zoom/STAR022_1.jpg?m=1614199775'
			),
			new Product(
				'7c8b2ddf-3ed3-17e9-d4c1-00ba75cb83f2',
				'Scitec Nutrition Omega 3, 100 caps',
				'139',
				lorem,
				'https://www.tillskottsbolaget.se/bilder/artiklar/zoom/SCITEC0012_1.jpg?m=1657827568'
			),
			new Product(
				'c2213b55-516b-0702-87ba-657294783b58',
				'BioTechUSA Tribooster, 60 caps',
				'229',
				lorem,
				'https://www.tillskottsbolaget.se/bilder/artiklar/zoom/BIOTECH843_1.jpg?m=1625179915'
			),
		];
		return samplePack;
	}
}
