export interface User {
	name: string;
	email: string;
	image: string;
	address: string;
	token: string;
}

export interface Book {
	isbn: string;
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

export interface GlobalState {
	user: User | null;
	isLoading: boolean;
}
