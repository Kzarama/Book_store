import { Link } from "react-router-dom";
import styles from "./header.module.css";

export const Header = () => {
	return (
		<nav className={styles.header}>
			<Link to="/">
				<img className={styles.header_logo} src="../../../book.webp" alt="book" />
			</Link>

			<ul className={styles.header_links}>
				<li className={styles.header_items}>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/login">Login</Link>
				</li>
				<li>
					<Link to="/account">Cuenta</Link>
				</li>
				<li>
					<Link to="/cart">Carrito</Link>
				</li>
			</ul>
		</nav>
	);
};
