import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { ButtonCard } from "../../components/atoms/buttonCard";

describe("ButtonCard component", () => {
	test("renders the button with the correct text", () => {
		render(<ButtonCard text="Click Me" />);
		const button = screen.getByText("Click Me");
		expect(button).toBeInTheDocument();
	});

	test('has a default type of "button"', () => {
		render(<ButtonCard text="Click Me" />);
		const button = screen.getByText("Click Me");
		expect(button).toHaveAttribute("type", "button");
	});

	test('accepts and renders a "submit" type when passed as a prop', () => {
		render(<ButtonCard text="Submit" type="submit" />);
		const button = screen.getByText("Submit");
		expect(button).toHaveAttribute("type", "submit");
	});
});
