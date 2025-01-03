import styles from "../../styles/pages/home.module.css";
import ProductsList from "../organisms/productList.tsx";
import { ProductSell } from "../organisms/productSell.tsx";
import { Layout } from "../templates/layout.tsx";

export const Home = () => {
	return (
		<Layout>
			<div className={styles.home}>
				<div className={styles.home_title}>
					<h1 className={styles.home_title_text}>Lista de Productos</h1>
					<ProductSell />
				</div>
				<ProductsList />
			</div>
		</Layout>
	);
};
