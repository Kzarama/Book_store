import { useContext } from "react";
import { Link } from "react-router-dom";
import GlobalContext from "../../context/GlobalState";
import styles from "../../styles/organisms/header.module.css";

export const Header = () => {
	const { state, dispatch } = useContext(GlobalContext);

	const logout = () => {
		dispatch({ type: "SET_USER", payload: null });
		localStorage.removeItem("user");
	};

	return (
		<nav className={styles.header}>
			<Link to="/">
				<img className={styles.header_logo} src="../../../book.webp" alt="product" />
			</Link>

			<ul className={styles.header_links}>
				{state.user ? (
					<>
						<li>
							<Link to="/account">Cuenta</Link>
						</li>
						<li>
							<Link to="/cart">Carrito</Link>
						</li>
					</>
				) : (
					<li>
						<Link to="/login">Login</Link>
					</li>
				)}
				{state.user && (
					<li>
						<button className={styles.header_button} onClick={logout}>
							Cerrar sesion
						</button>
					</li>
				)}
			</ul>
		</nav>
	);
};
