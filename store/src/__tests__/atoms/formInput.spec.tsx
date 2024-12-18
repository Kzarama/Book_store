import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { FormInput } from "../../components/atoms/formInput";

describe("FormInput component", () => {
	test("renders the input with the correct label", () => {
		render(<FormInput name="username" label="Username" type="text" change={() => {}} />);
		expect(screen.getByLabelText("Username")).toBeInTheDocument();
	});

	test("fires change event on input", () => {
		const handleChange = jest.fn();
		render(<FormInput name="email" label="Email" type="email" change={handleChange} />);
		fireEvent.change(screen.getByLabelText("Email"), { target: { value: "test@example.com" } });
		expect(handleChange).toHaveBeenCalledTimes(1);
	});

	test("uses default class names when no custom classes are provided", () => {
		render(<FormInput name="email" label="Email" type="email" change={() => {}} />);
		expect(screen.getByLabelText("Email")).toHaveClass("formInput_input");
	});
});
