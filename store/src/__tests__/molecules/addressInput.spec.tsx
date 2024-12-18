import { render, screen, fireEvent } from "@testing-library/react";
import { toast } from "react-toastify";
import "@testing-library/jest-dom";
import { updateAddressService } from "../../services/user";
import GlobalContext from "../../context/GlobalState";
import { AddressInput } from "../../components/molecules/addressInput";

jest.mock("../../services/user", () => ({
	updateAddressService: jest.fn(),
}));

jest.mock("react-toastify", () => ({
	toast: {
		success: jest.fn(),
		error: jest.fn(),
	},
}));

describe("AddressInput component", () => {
	const mockState = {
		user: {
			token: "mock-token",
			name: "",
			email: "",
			image: "",
			address: "",
		},
		isLoading: false,
	};

	const renderWithContext = (address: string | undefined) => {
		return render(
			<GlobalContext.Provider value={{ state: mockState, dispatch: jest.fn() }}>
				<AddressInput address={address} />
			</GlobalContext.Provider>
		);
	};

	test("renders the input with the current address", () => {
		renderWithContext("123 Main St");
		expect(screen.getByRole("textbox")).toHaveValue("123 Main St");
	});

	test("updates the address when typed in the input", () => {
		renderWithContext("123 Main St");
		fireEvent.change(screen.getByRole("textbox"), { target: { value: "456 Elm St" } });
		expect(screen.getByRole("textbox")).toHaveValue("456 Elm St");
	});

	test("disables the button when no new address is entered", () => {
		renderWithContext("123 Main St");
		expect(screen.getByRole("button")).toBeDisabled();
	});

	test("enables the button when a new address is entered", () => {
		renderWithContext("123 Main St");
		fireEvent.change(screen.getByRole("textbox"), { target: { value: "456 Elm St" } });
		expect(screen.getByRole("button")).not.toBeDisabled();
	});
});
