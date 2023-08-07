import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiGetUser } from "../../api/auth/auth.api";

export const getUserAction = createAsyncThunk("user", async ({ page, itemsPerPage, sort, input }) => {
	try {
		const response = await apiGetUser(page, itemsPerPage, sort, input);
		return response;
	} catch (error) {
		throw error;
	}
});

export const getUserReduces = (builder) => {
	builder
		.addCase(getUserAction.pending, (state) => {
			state.loading = true;
			state.error = null;
		})
		.addCase(getUserAction.fulfilled, (state, action) => {
			state.loading = false;
			state.data = action.payload.list;
			state.pagination = action.payload.pagination;
			state.error = null;
		})
		.addCase(getUserAction.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		});
};
