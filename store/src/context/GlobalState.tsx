import React, { createContext, ReactNode, useReducer, useEffect } from "react";
import { GlobalState } from "../assets/interfaces";
import { ActionTypes, SET_LOADING, SET_USER } from "./ActionTypes";

const initialState: GlobalState = {
	user: null,
	isLoading: false,
};

const globalReducer = (state: GlobalState, action: ActionTypes): GlobalState => {
	switch (action.type) {
		case SET_USER:
			return {
				...state,
				user: action.payload,
			};
		case SET_LOADING:
			return {
				...state,
				isLoading: action.payload,
			};
		default:
			return state;
	}
};

const GlobalContext = createContext<{
	state: GlobalState;
	dispatch: React.Dispatch<ActionTypes>;
}>({
	state: initialState,
	dispatch: () => null,
});

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
	const savedState = sessionStorage.getItem("globalState");
	const initialStateFromStorage = savedState ? JSON.parse(savedState) : initialState;

	const [state, dispatch] = useReducer(globalReducer, initialStateFromStorage);

	useEffect(() => {
		sessionStorage.setItem("globalState", JSON.stringify(state));
	}, [state]);

	return <GlobalContext.Provider value={{ state, dispatch }}>{children}</GlobalContext.Provider>;
};

export default GlobalContext;
