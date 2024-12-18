import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { QuantitySelector } from "../../components/atoms/quantitySelector";

describe("QuantitySelector component", () => {
	test("renders input with initial value", () => {
		render(<QuantitySelector productQuantity={0} setProductQuantity={() => {}} />);
		expect(screen.getByRole("spinbutton")).toHaveValue(0);
	});

	test("updates value when input changes", () => {
		const setProductQuantity = jest.fn();
		render(<QuantitySelector productQuantity={0} setProductQuantity={setProductQuantity} />);
		fireEvent.change(screen.getByRole("spinbutton"), { target: { value: "5" } });
		expect(setProductQuantity).toHaveBeenCalledWith(5);
	});

	test("does not update value when input is negative", () => {
		const setProductQuantity = jest.fn();
		render(<QuantitySelector productQuantity={0} setProductQuantity={setProductQuantity} />);
		fireEvent.change(screen.getByRole("spinbutton"), { target: { value: "-1" } });
		expect(setProductQuantity).not.toHaveBeenCalled();
	});
});
