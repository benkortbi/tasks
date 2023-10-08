import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apiKey = "https://server-ouh8.onrender.com/api";
//init state
const initialState = {
	tasks: {
		data: null,
		loading: false,
		errors: null,
	},
	postedTask: {
		data: null,
		loading: false,
		errors: false,
	},
	deleteTask: {
		loading: false,
		deletedId: null,
		errors: null,
	},
	updateTask: {
		loading: false,
		error: null,
		data: null,
	},
	singleTask: {
		data: null,
		loading: false,
		error: null,
	},
};

//handling routes
export const getTasks = createAsyncThunk(
	"todo/getTasks",
	async (_, { rejectWithValue }) => {
		try {
			const res = await fetch(`${apiKey}/tasks`);
			const tasks = await res.json();
			return tasks;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const getSingleTask = createAsyncThunk(
	"todo/getSingleTask",
	async (id, { rejectedWithValue }) => {
		try {
			const res = await fetch(`${apiKey}/tasks/${id}`);
			const singleTask = await res.json();
			return singleTask;
		} catch (error) {
			return rejectedWithValue(error);
		}
	}
);

export const updateTask = createAsyncThunk(
	"todo/updateTask",
	async (newData, { rejectWithValue }) => {
		try {
			const updatedData = {
				title: newData.title,
				body: newData.body,
			};
			const updatedTask = await fetch(`${apiKey}/tasks/${newData.id}`, {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(updatedData),
			});
			const res = await updatedTask.json();
			return res;
		} catch (error) {
			return rejectWithValue({ error });
		}
	}
);

export const postTask = createAsyncThunk(
	"todo/postTask",
	async (data, { rejectedWithValue }) => {
		try {
			const res = await fetch(`${apiKey}/new-task`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});
			const task = await res.json();
			return task;
		} catch (error) {
			return rejectedWithValue(error.message);
		}
	}
);

export const deleteTask = createAsyncThunk(
	"todo/deleteTask",
	async (id, { rejectWithValue }) => {
		try {
			const res = await fetch(`${apiKey}/tasks/${id}`, {
				method: "DELETE",
			});
			const deletedId = await res.json();
			return deletedId;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

//handling the state
const todoSlice = createSlice({
	name: "todoSlice",
	initialState,

	extraReducers: (build) => {
		// get logic
		build
			.addCase(getTasks.pending, (state) => {
				return {
					...state,
					tasks: {
						...state.tasks,
						loading: true,
					},
				};
			})
			.addCase(getTasks.fulfilled, (state, action) => {
				return {
					...state,
					tasks: {
						...state.tasks,
						data: action.payload,
						loading: false,
					},
				};
			})
			.addCase(getTasks.rejected, (state, action) => {
				return {
					...state,
					tasks: {
						...state.tasks,
						errors: action.payload,
					},
				};
			});
		// post logic
		build
			.addCase(postTask.pending, (state) => {
				return {
					...state,
					postedTask: {
						...state.postedTask,
						loading: true,
					},
				};
			})
			.addCase(postTask.fulfilled, (state, { payload }) => {
				return {
					...state,
					postedTask: {
						...state.postedTask,
						data: payload,
						loading: false,
					},
				};
			})
			.addCase(postTask.rejected, (state, { payload }) => {
				return {
					...state,
					postedTask: {
						...state.postedTask,
						errors: payload,
					},
				};
			});
		// delete logic
		build
			.addCase(deleteTask.pending, (state) => {
				return {
					...state,
					deleteTask: {
						...state.deleteTask,
						loading: true,
					},
				};
			})
			.addCase(deleteTask.fulfilled, (state, { payload }) => {
				return {
					...state,
					deleteTask: {
						...state.deleteTask,
						deletedId: payload,
						loading: false,
					},
				};
			})
			.addCase(deleteTask.rejected, (state, { payload }) => {
				return {
					...state,
					deleteTask: {
						...state.deleteTask,
						errors: payload,
					},
				};
			});
		// update logic
		build
			.addCase(updateTask.pending, (state) => {
				return {
					...state,
					updateTask: {
						...state.updateTask,
						loading: true,
					},
				};
			})
			.addCase(updateTask.fulfilled, (state, { payload }) => {
				return {
					...state,
					updateTask: {
						...state.updateTask,
						data: payload,
						loading: false,
					},
				};
			})
			.addCase(updateTask.rejected, (state, { payload }) => {
				return {
					...state,
					updateTask: {
						...state.updateTask,
						error: payload,
					},
				};
			});
		// singleTask logic
		build
			.addCase(getSingleTask.pending, (state) => {
				return {
					...state,
					singleTask: {
						...state.singleTask,
						loading: true,
						data: null,
					},
				};
			})
			.addCase(getSingleTask.fulfilled, (state, { payload }) => {
				return {
					...state,
					singleTask: {
						...state.singleTask,
						data: payload,
						loading: false,
					},
				};
			})
			.addCase(getSingleTask.rejected, (state, { payload }) => {
				return {
					...state,
					singleTask: {
						...state.singleTask,
						error: payload,
					},
				};
			});
	},
});

export default todoSlice.reducer;
