import axios from "axios";
import { DEFAULT_ROUTE } from "../assets/constants.ts";
import { User } from "../assets/interfaces.ts";

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

export const getUserService = async (email: string): Promise<User | undefined> => {
	try {
		const response = await axios({
			url: `${DEFAULT_ROUTE}/get_user/${email}`,
		});
		if (response?.data) {
			return response.data;
		}
	} catch (error: any) {
		return error.response.data;
	}
};

export const updateAddressService = async (email: string, address: string) => {
	const token = "qwerty";
	try {
		const response = await axios({
			url: `${DEFAULT_ROUTE}/update_address`,
			method: "POST",
			data: { email, address, token },
		});
		if (response?.data) {
			return response.data;
		}
	} catch (error: any) {
		return error.response.data;
	}
};

export const updatePhoto = async (file: File) => {
	const token = "qwerty";

	const readerPromise = new Promise<string>((resolve, reject) => {
		const reader = new FileReader();
		reader.onloadend = () => {
			resolve(reader.result as string);
		};
		reader.onerror = () => {};
		reader.readAsDataURL(file);
	});

	try {
		const fileBase64 = await readerPromise;
		const response = await axios({
			url: `${DEFAULT_ROUTE}/update_photo`,
			method: "POST",
			data: { token, fileBase64 },
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (response?.data) {
			return response.data;
		}
	} catch (error: any) {
		return error.response?.data || error.message;
	}
};
