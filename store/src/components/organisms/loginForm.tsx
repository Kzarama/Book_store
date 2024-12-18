import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import GlobalContext from "../../context/GlobalState";
import { signinService } from "../../services/user";
import styles from "../../styles/organisms/loginForm.module.css";
import { ButtonCard } from "../atoms/buttonCard";
import { FormInput } from "../atoms/formInput";

export const LoginForm = () => {
	const { dispatch } = useContext(GlobalContext);
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const navigate = useNavigate();

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
			const response = await signinService(formData.email, formData.password);

			if (response.status === 200) {
				dispatch({
					type: "SET_USER",
					payload: { name: response.name, address: response.address, email: response.email, image: response.image, token: response.token },
				});
				navigate("/");
			} else {
				toast.error("Algo falló");
			}
		} catch (error) {
			toast.error("Algo falló");
		}
	};

	return (
		<form className={styles.loginForm} onSubmit={handleSubmit}>
			<FormInput
				classNameContainer={styles.loginForm_inputContainer}
				classNameInput={styles.loginForm_input}
				label="Email:"
				name="email"
				type="email"
				change={handleChange}
			/>
			<FormInput
				classNameContainer={styles.loginForm_inputContainer}
				classNameInput={styles.loginForm_input}
				label="Contraseña:"
				name="password"
				type="password"
				change={handleChange}
			/>
			<ButtonCard text="Enviar" type="submit" />
		</form>
	);
};
