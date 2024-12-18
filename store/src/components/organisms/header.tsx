import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { useContext } from "react";
import GlobalContext from "../../context/GlobalState";

export const Header = () => {
	const { state, dispatch } = useContext(GlobalContext);

	const logout = () => {
		dispatch({ type: "SET_USER", payload: null });
		localStorage.removeItem("user");
	};

	return (
		<nav className={styles.header}>
			<Link to="/">
				<img className={styles.header_logo} src="../../../book.webp" alt="book" />
			</Link>

			<ul className={styles.header_links}>
				<li className={styles.header_items}>
					<Link to="/">Home</Link>
				</li>
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
						<button onClick={logout}>Cerrar sesion</button>
					</li>
				)}
			</ul>
		</nav>
	);
};
