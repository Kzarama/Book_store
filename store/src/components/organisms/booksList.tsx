import { useEffect, useState } from "react";
import { Book } from "../../assets/interfaces.ts";
import { getBooksService } from "../../services/books.ts";
import { BookCard } from "../molecules/bookCard.tsx";
import styles from "./bookList.module.css";

function BooksList() {
	const [books, setBooks] = useState<Book[] | undefined>(undefined);

	useEffect(() => {
		getBooksService().then((books) => {
			setBooks(books);
		});
	}, []);

	return (
		<div className={styles.booksList}>
			<h1 className={styles.booksList_title}>Lista de Libros</h1>

			<div className={styles.booksList_content}>
				{books?.map((book) => (
					<BookCard key={book.id} book={book} />
				))}
			</div>
		</div>
	);
}

export default BooksList;
