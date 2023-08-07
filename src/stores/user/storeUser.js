import { createSlice } from "@reduxjs/toolkit";
import { getUserReduces } from "./actionUser";


export const userDetail = createSlice({
	name: "user",
	initialState: {
		data: [],
		pagination: {},
		loading: false,
		error: "",
	},
	extraReducers: (builder) => {
		getUserReduces(builder);
	},
});

export const userReducer = userDetail.reducer;