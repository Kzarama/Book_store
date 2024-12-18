import { Link } from "react-router-dom";
import { RegisterForm } from "../organisms/registerForm.tsx";
import { Layout } from "../templates/layout.tsx";
import styles from "../../styles/pages/register.module.css";

export const Register = () => {
	return (
		<Layout>
			<div className={styles.register}>
				<h2>Formulario</h2>

				<RegisterForm />

				<Link to="/login">Inicio de sesion</Link>
			</div>
		</Layout>
	);
};
