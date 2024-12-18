import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Product } from "../../assets/interfaces.ts";
import { priceFormatter } from "../../assets/utils.ts";
import GlobalContext from "../../context/GlobalState.tsx";
import { addCartService } from "../../services/product.ts";
import styles from "../../styles/molecules/productCard.module.css";
import { ButtonCard } from "../atoms/buttonCard.tsx";
import { QuantitySelector } from "../atoms/quantitySelector.tsx";

export const ProductCard = ({ product }: { product: Product }) => {
	const [productQuantity, setProductQuantity] = useState(0);
	const { state } = useContext(GlobalContext);

	const buyProduct = () => {
		if (productQuantity < 1) {
			return;
		}
		if (productQuantity > product.quantity) {
			toast.warn(`Solo hay ${product.quantity} productos en existencia`);
		}
		if (state.user?.token) {
			addCartService(state.user.token, product.isbn, productQuantity).then(() => toast.success("Productos agregados al carrito"));
		}
	};

	return (
		<div className={styles.card}>
			<h3 className={styles.card_title}>{product.title}</h3>
			<p className={styles.card_price}>{priceFormatter(product.price)}</p>
			<p className={styles.card_author}>{product.author}</p>
			<img className={styles.card_image} src={product.image} alt={product.title} />
			<QuantitySelector productQuantity={productQuantity} setProductQuantity={setProductQuantity} />
			<ButtonCard text="Comprar" action={buyProduct} />
		</div>
	);
};
