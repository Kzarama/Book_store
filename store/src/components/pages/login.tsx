import { Link } from "react-router-dom";
import { LoginForm } from "../organisms/loginForm.tsx";
import { Layout } from "../templates/layout.tsx";
import styles from "../../styles/pages/login.module.css";

export const Login = () => {
	return (
		<Layout>
			<div className={styles.login}>
				<h1>Formulario</h1>

				<LoginForm />

				<Link to="/register">Registro</Link>
			</div>
		</Layout>
	);
};
