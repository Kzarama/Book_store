import axios from "axios";
import { DEFAULT_ROUTE } from "../assets/constants.ts";

export const signinService = async (email: string, password: string) => {
	try {
		const response = await axios({
			url: `${DEFAULT_ROUTE}/signin`,
			method: "POST",
			data: { email, password },
		});
		if (response?.data) {
			return response.data;
		}
	} catch (error: any) {
		return error.response.data;
	}
};

export const signupService = async (name: string, email: string, password: string) => {
	try {
		const response = await axios({
			url: `${DEFAULT_ROUTE}/signup`,
			method: "POST",
			data: { name, email, password },
		});
		if (response?.data) {
			return response.data;
		}
	} catch (error: any) {
		return error.response.data;
	}
};
