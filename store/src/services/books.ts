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
