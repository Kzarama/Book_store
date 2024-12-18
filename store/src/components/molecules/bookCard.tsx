import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Book } from "../../assets/interfaces";
import { priceFormatter } from "../../assets/utils.ts";
import GlobalContext from "../../context/GlobalState.tsx";
import { buyBookService } from "../../services/books.ts";
import { ButtonCard } from "../atoms/buttonCard.tsx";
import { QuantitySelector } from "../atoms/quantitySelector.tsx";
import styles from "./bookCard.module.css";

export const BookCard = ({ book }: { book: Book }) => {
	const [bookQuantity, setBookQuantity] = useState(0);
	const { state } = useContext(GlobalContext);

	const buyBook = () => {
		if (bookQuantity > book.quantity) {
			toast.warn(`Solo hay ${book.quantity} libros en existencia`);
		}
		if (state.user?.token) {
			buyBookService(state.user.token, book.isbn, bookQuantity).then(() => toast.success("Libros agregados al carrito"));
		}
	};

	return (
		<div className={styles.card}>
			<h3 className={styles.card_title}>{book.title}</h3>
			<p className={styles.card_price}>{priceFormatter(book.price)}</p>
			<p className={styles.card_author}>{book.author}</p>
			<img className={styles.card_image} src={book.image} alt={book.title} />
			<QuantitySelector bookQuantity={bookQuantity} setBookQuantity={setBookQuantity} />
			<ButtonCard text="Comprar" action={buyBook} />
		</div>
	);
};
