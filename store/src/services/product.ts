import axios from "axios";
import { DEFAULT_ROUTE } from "../assets/constants.ts";
import { Product } from "../assets/interfaces.ts";

export const getProductsService = async (): Promise<Product[] | undefined> => {
	try {
		const response = await axios({
			url: `${DEFAULT_ROUTE}/get_products`,
		});
		if (response?.data) {
			return response.data;
		}
	} catch (error: any) {
		return error.response.data;
	}
};

export const createProductsService = async (
	token: string,
	isbn: string,
	title: string,
	price: number,
	author: string,
	editor: string,
	image: string,
	quantity: number
) => {
	try {
		const response = await axios({
			url: `${DEFAULT_ROUTE}/register_product`,
			method: "POST",
			data: { token, isbn, title, price, author, editor, image, quantity },
		});
		if (response?.data) {
			return response.data;
		}
	} catch (error: any) {
		return error.response.data;
	}
};

export const addCartService = async (token: string, isbn: string, quantity: number) => {
	try {
		const response = await axios({
			url: `${DEFAULT_ROUTE}/add_cart`,
			method: "POST",
			data: { token, isbn, quantity },
		});
		if (response?.data) {
			return response.data;
		}
	} catch (error: any) {
		return error.response.data;
	}
};
