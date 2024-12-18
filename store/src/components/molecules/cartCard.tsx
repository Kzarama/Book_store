import { Cart } from "../../assets/interfaces";
import { priceFormatter } from "../../assets/utils";
import styles from "../../styles/molecules/cardCart.module.css";

export const CartCard = ({ product }: { product: Cart }) => {
	return (
		<tr>
			<td className={styles.cardCart_image}>
				<img src={product.image} alt={product.product} />
			</td>
			<td className={styles.cardCart_product}>
				<h2>{product.product}</h2>
			</td>
			<td className={styles.cardCart_price}>
				<span>{priceFormatter(product.price)}</span>
			</td>
			<td className={styles.cardCart_quantity}>
				<span>{product.quantity}</span>
			</td>
		</tr>
	);
};
