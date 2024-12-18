import { User } from "../assets/interfaces";

export const SET_USER = "SET_USER";
export const SET_LOADING = "SET_LOADING";

interface SetUserAction {
	type: typeof SET_USER;
	payload: User | null;
}

interface SetLoadingAction {
	type: typeof SET_LOADING;
	payload: boolean;
}

export type ActionTypes = SetUserAction | SetLoadingAction;
