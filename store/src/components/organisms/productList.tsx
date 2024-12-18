import { useEffect, useState } from "react";
import { Product } from "../../assets/interfaces.ts";
import { getProductsService } from "../../services/product.ts";
import styles from "../../styles/organisms/productList.module.css";
import { ProductCard } from "../molecules/productCard.tsx";

function ProductsList() {
	const [products, setProducts] = useState<Product[] | undefined>(undefined);

	useEffect(() => {
		getProductsService().then((products) => {
			setProducts(products);
		});
	}, []);

	return (
		<div className={styles.productsList_content}>
			{products?.map((product) => (
				<ProductCard key={product.isbn} product={product} />
			))}
		</div>
	);
}

export default ProductsList;
