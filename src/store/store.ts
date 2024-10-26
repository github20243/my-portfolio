import { configureStore } from "@reduxjs/toolkit";
import infoSlice from "./InfoSlice/infoSlice";
import blogSlice from "./blogsSlice/blogsSlice";

const store = configureStore({
	reducer: {
		[infoSlice.name]: infoSlice.reducer,
		[blogSlice.name]: blogSlice.reducer
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export default store;
