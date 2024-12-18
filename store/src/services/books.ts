import axios from "axios";
import { DEFAULT_ROUTE } from "../assets/constants.ts";
import { Book } from "../assets/interfaces.ts";

export const getBooksService = async (): Promise<Book[] | undefined> => {
	try {
		const response = await axios({
			url: `${DEFAULT_ROUTE}/get_books`,
		});
		if (response?.data) {
			return response.data;
		}
	} catch (error: any) {
		return error.response.data;
	}
};

export const createBooksService = async (
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
			url: `${DEFAULT_ROUTE}/register_book`,
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
