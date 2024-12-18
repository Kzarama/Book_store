import { useEffect, useState } from "react";
import { Product } from "../../assets/interfaces.ts";
import { getProductsService } from "../../services/product.ts";
import { ProductCard } from "../molecules/productCard.tsx";
import styles from "./productList.module.css";

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
