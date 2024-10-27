import { configureStore } from "@reduxjs/toolkit";
import infoSlice from "../store/infoSlice/infoSlice"
import blogSlice from "../store/blogSlice/blogSlice"

const store = configureStore({
	reducer: {
		[infoSlice.name]: infoSlice.reducer,
		[blogSlice.name]: blogSlice.reducer
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export default store;
