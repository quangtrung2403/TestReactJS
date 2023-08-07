import { createSlice } from "@reduxjs/toolkit";
import { createMapReduces, createQuankhuReduces, deleleQuankhuReduces, getIDQuankhuNeedUpdate, updateQuankhureduces } from "./actionMap";

const initialState = {
	dataMap: [],
	loadingMap: false,
	errorMap: null,
};

export const mapDetail = createSlice({
	name: "map",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		createMapReduces(builder);
		deleleQuankhuReduces(builder);
		createQuankhuReduces(builder);
		updateQuankhureduces(builder);
		getIDQuankhuNeedUpdate(builder);
	},
});

export const mapReducer = mapDetail.reducer;