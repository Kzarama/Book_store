export interface User {
	name: string;
	email: string;
	image: string;
	address: string;
	token: string;
}

export interface Product {
	idProduct: string;
	title: string;
	price: number;
	details: string;
	image: string;
	quantity: number;
}

export interface Cart {
	product: string;
	quantity: number;
	price: number;
	image: string;
}

export interface IStatus {
	status: null | "OK" | "ERROR";
}

export interface GlobalState {
	user: User | null;
	isLoading: boolean;
}
