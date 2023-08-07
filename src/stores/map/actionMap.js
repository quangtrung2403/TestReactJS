import { createAsyncThunk } from "@reduxjs/toolkit";
import { createNewQuankhu, deleteQuankhu, getQuanKhuid, getmapQuankhu, updateQuankhu } from "../../api/auth/auth.api";


export const getMapAction = createAsyncThunk('map/getData', async () => {
	try {
		const response = await getmapQuankhu();
		return response;
	} catch (error) {
		throw error;
	}
});

export const createMapReduces = (builder) => {
	builder
		.addCase(getMapAction.pending, (state) => {
			state.loadingMap = true;
			state.errorMap = null;
		})
		.addCase(getMapAction.fulfilled, (state, action) => {
			state.loadingMap = false;
			state.dataMap = action.payload;
			state.errorMap = null;
		})
		.addCase(getMapAction.rejected, (state, action) => {
			state.loadingMap = false;
			state.errorMap = action.error.message;
		});
};


export const deleteMapQuankhu = createAsyncThunk('map/deleteQuankhu', async ({ id }) => {
	try {
		const response = deleteQuankhu(id);
		return response;
	} catch (error) {
		throw error;
	}
});

export const deleleQuankhuReduces = (builder) => {
	builder
		.addCase(deleteMapQuankhu.pending, (state) => {
			state.loadingMap = true;
			state.errorMap = null;
		})
		.addCase(deleteMapQuankhu.fulfilled, (state, action) => {
			state.loadingMap = false;
			state.dataMap = action.payload;
			state.errorMap = null;
		})
		.addCase(deleteMapQuankhu.rejected, (state, action) => {
			state.loadingMap = false;
			state.errorMap = action.error.message;
		});
};

export const createMapQuankhu = createAsyncThunk('map/createQuankhu', async ({ data, geometry }) => {
	try {
		const response = createNewQuankhu(data, geometry);
		return response;
	} catch (error) {
		throw error;
	}
});

export const createQuankhuReduces = (builder) => {
	builder
		.addCase(createMapQuankhu.pending, (state) => {
			state.loadingMap = true;
			state.errorMap = null;
		})
		.addCase(createMapQuankhu.fulfilled, (state, action) => {
			state.loadingMap = false;
			state.dataMap = action.payload;
			state.errorMap = null;
		})
		.addCase(createMapQuankhu.rejected, (state, action) => {
			state.loadingMap = false;
			state.errorMap = action.error.message;
		});
};

export const updateMapQuankhu = createAsyncThunk('map/updateQuankhu', async ({ id, data, geometry }) => {
	try {
		const response = updateQuankhu(id, data, geometry);
		return response;
	} catch (error) {
		throw error;
	}
});

export const updateQuankhureduces = (builder) => {
	builder
		.addCase(updateMapQuankhu.pending, (state) => {
			state.loadingMap = true;
			state.errorMap = null;
		})
		.addCase(updateMapQuankhu.fulfilled, (state, action) => {
			state.loadingMap = false;
			state.dataMap = action.payload;
			state.errorMap = null;
		})
		.addCase(updateMapQuankhu.rejected, (state, action) => {
			state.loadingMap = false;
			state.errorMap = action.error.message;
		});
};

export const getIDQuankhuNeedUpdate = createAsyncThunk('map/getIdQuankhu', async ({ id }) => {
	try {
		const response = await getQuanKhuid(id);
		return response;
	} catch (error) {
		throw error;
	}
});

export const getIDQuankhuNeedUpdateReduces = (builder) => {
	builder
		.addCase(getIDQuankhuNeedUpdate.pending, (state) => {
			state.loadingMap = true;
			state.errorMap = null;
		})
		.addCase(getIDQuankhuNeedUpdate.fulfilled, (state, action) => {
			state.loadingMap = false;
			state.dataMap = action.payload;
			state.errorMap = null;
		})
		.addCase(getIDQuankhuNeedUpdate.rejected, (state, action) => {
			state.loadingMap = false;
			state.errorMap = action.error.message;
		});
};