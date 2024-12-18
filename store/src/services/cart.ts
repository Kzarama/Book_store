import axios from "axios";
import { DEFAULT_ROUTE } from "../assets/constants.ts";
import { Cart } from "../assets/interfaces.ts";

export const getCartService = async (email: string): Promise<Cart[] | undefined> => {
	try {
		const response = await axios({
			url: `${DEFAULT_ROUTE}/get_cart/${email}`,
		});
		if (response?.data) {
			return response.data;
		}
	} catch (error: any) {
		return error.response.data;
	}
};

export const buyCartService = async (token: string, email: string) => {
	try {
		const response = await axios({
			url: `${DEFAULT_ROUTE}/buy_cart/${email}`,
			method: "POST",
			data: { token },
		});
		if (response?.data) {
			return response.data;
		}
	} catch (error: any) {
		return error.response.data;
	}
};
