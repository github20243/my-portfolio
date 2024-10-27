import { createSlice } from "@reduxjs/toolkit";
import { getBlogsInfo } from "../request/request"; // Убедитесь, что этот путь правильный

type InfoState = {
  data: any[]; 
  isLoading: boolean;
  error: string | null;
};

const initialState: InfoState = {
  data: [],
  isLoading: false,
  error: null,
};

const blogSlice = createSlice({
  name: "blog", // Изменено с "data" на "blog" для большей ясности
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBlogsInfo.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getBlogsInfo.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = payload;
      })
      .addCase(getBlogsInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Неизвестная ошибка";
      });
  },
});

export default blogSlice// Экспортируем редюсер