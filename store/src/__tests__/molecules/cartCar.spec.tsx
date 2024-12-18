import { render, screen } from "@testing-library/react";
import { priceFormatter } from "../../assets/utils";
import "@testing-library/jest-dom";
import { CartCard } from "../../components/molecules/cartCard";

jest.mock("../../assets/utils", () => ({
	priceFormatter: jest.fn().mockImplementation((price) => `$${price.toFixed(2)}`),
}));

describe("CartCard component", () => {
	const mockProduct = {
		image: "https://example.com/image.jpg",
		product: "Example Product",
		price: 19.99,
		quantity: 2,
	};

	test("renders product image, name, price, and quantity", () => {
		render(<CartCard product={mockProduct} />);

		expect(screen.getByRole("img")).toHaveAttribute("src", mockProduct.image);
		expect(screen.getByRole("img")).toHaveAttribute("alt", mockProduct.product);
		expect(screen.getByText(mockProduct.product)).toBeInTheDocument();
		expect(screen.getByText(mockProduct.quantity.toString())).toBeInTheDocument();
	});

	test("formats price correctly using priceFormatter", () => {
		render(<CartCard product={mockProduct} />);
		expect(priceFormatter).toHaveBeenCalledWith(mockProduct.price);
	});
});
