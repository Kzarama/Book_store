import { BookSell } from "../organisms/bookSell.tsx";
import BooksList from "../organisms/booksList.tsx";
import { Layout } from "../templates/layout.tsx";
import styles from "./home.module.css";

export const Home = () => {
	return (
		<Layout>
			<div className={styles.home}>
				<div className={styles.home_title}>
					<h1 className={styles.home_title_text}>Lista de Libros</h1>
					<BookSell />
				</div>
				<BooksList />
			</div>
		</Layout>
	);
};
