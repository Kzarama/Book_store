import BooksList from "../organisms/booksList.tsx";
import { Layout } from "../templates/layout.tsx";

export const Home = () => {
	return (
		<Layout>
			<BooksList />
		</Layout>
	);
};
