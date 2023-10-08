import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todoSlice from "./slices/todo.slice";
import modalsSlice from "./slices/modals.slice";

const rootReducer = combineReducers({
	todoSlice,
	modalsSlice,
});
const store = configureStore({
	reducer: rootReducer,
});

export default store;
