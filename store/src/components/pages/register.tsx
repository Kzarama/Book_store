import React, { useState } from "react";
import { Layout } from "../templates/layout.tsx";
import { signupService } from "../../services/user.ts";
import { Link, redirect, useNavigate } from "react-router-dom";

interface status {
	status: null | "OK" | "ERROR";
}

export const Register = () => {
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
	});

	const [status, setStatus] = useState<status>();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await signupService(formData.name, formData.email, formData.password);

			if (response.status === 201) {
				setStatus({ status: "OK" });
				navigate("/account");
			} else {
				setStatus({ status: "ERROR" });
			}
		} catch (error) {
			setStatus({ status: "ERROR" });
		}
	};

	return (
		<Layout>
			<h2>Formulario</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">Nombre:</label>
					<input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
				</div>
				<div>
					<label htmlFor="email">Nombre:</label>
					<input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
				</div>
				<div>
					<label htmlFor="password">Email:</label>
					<input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
				</div>
				<button type="submit">Enviar</button>
			</form>

			{status && (
				<div>{status.status === "OK" ? <p style={{ color: "green" }}>{status.status}</p> : <p style={{ color: "red" }}>{status.status}</p>}</div>
			)}

			<Link to="/login">Inicio de sesion</Link>
		</Layout>
	);
};