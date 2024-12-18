import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import GlobalContext from "../../context/GlobalState";
import { signupService } from "../../services/user";
import styles from "../../styles/organisms/registerForm.module.css";
import { ButtonCard } from "../atoms/buttonCard";
import { FormInput } from "../atoms/formInput";

export const RegisterForm = () => {
	const { dispatch } = useContext(GlobalContext);
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			const response = await signupService(formData.name, formData.email, formData.password);

			if (response.status === 201) {
				dispatch({
					type: "SET_USER",
					payload: { name: response.name, address: response.address, email: response.email, image: response.image, token: response.token },
				});
				navigate("/account");
			} else {
				toast.error("Algo falló");
			}
		} catch (error) {
			toast.error("Algo falló");
		}
	};

	return (
		<form className={styles.registerForm} onSubmit={handleSubmit}>
			<FormInput
				classNameContainer={styles.registerForm_inputContainer}
				classNameInput={styles.registerForm_input}
				label="Nombre:"
				name="name"
				type="text"
				change={handleChange}
			/>
			<FormInput
				classNameContainer={styles.registerForm_inputContainer}
				classNameInput={styles.registerForm_input}
				label="Email:"
				name="email"
				type="email"
				change={handleChange}
			/>
			<FormInput
				classNameContainer={styles.registerForm_inputContainer}
				classNameInput={styles.registerForm_input}
				label="Contraseña:"
				name="password"
				type="password"
				change={handleChange}
			/>

			<ButtonCard text="Enviar" type="submit" />
		</form>
	);
};
