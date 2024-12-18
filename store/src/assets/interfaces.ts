export interface Book {
	id: string;
	title: string;
	price: number;
	author: string;
	image: string;
	editor: string;
	quantity: number;
}

export interface IStatus {
	status: null | "OK" | "ERROR";
}