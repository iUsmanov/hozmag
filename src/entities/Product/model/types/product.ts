export type Unit =
	| 'piece'
	| 'gram'
	| 'kilogram'
	| 'centimeter'
	| 'meter'
	| 'bag'
	| 'milliliter'
	| 'liter';

export interface Product {
	id: string;
	name: string;
	description: string;
	mainPhoto: string;
	price: number;
	photos: number;
	unit: Unit;
	rating: number;
	categories: ProductCategory;
}

export type ProductCategory = {
	name: string;
	[key: string]: string | ProductCategory;
};
