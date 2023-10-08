import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	deleteModal: {
		id: null,
	},
};

const modalsSlice = createSlice({
	name: "modalsSlice",
	initialState,
	reducers: {
		getId: (state, action) => {
			return {
				...state,
				deleteModal: {
					id: action.payload,
				},
			};
		},
	},
});

export default modalsSlice.reducer;
export const { getId } = modalsSlice.actions;
