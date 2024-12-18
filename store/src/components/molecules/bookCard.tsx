import { Book } from "../../assets/interfaces";
import { priceFormatter } from "../../assets/utils.ts";
import { Button } from "../atoms/button.tsx";
import styles from "./bookCard.module.css";

export const BookCard = ({ book }: { book: Book }) => {
	return (
		<div className={styles.card}>
			<h3 className={styles.card_title}>{book.title}</h3>
			<p className={styles.card_price}>{priceFormatter(book.price)}</p>
			<p className={styles.card_author}>{book.author}</p>
			<img className={styles.card_image} src={book.image} alt={book.title} />
			<Button text="Comprar" />
		</div>
	);
};
