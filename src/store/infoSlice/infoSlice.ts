import { createSlice } from "@reduxjs/toolkit"
import { getInfo } from "../request/request"

type InfoState = {
  data: any[]; 
  isLoading: boolean;
  error: string | null | undefined; 
}

const initialState: InfoState = {
  data: [],
  isLoading: false,
  error: null,
}

const infoSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder  
    .addCase(getInfo.pending, (state) => {
      state.isLoading = true,
      state.error = null
    })
    .addCase(getInfo.fulfilled, (state, {payload}) => {
      state.isLoading = false,
      state.data = payload
    })
    .addCase(getInfo.rejected, (state, action) => {
      state.isLoading = false,
      state.error = action.error.message 
    })
  }
})

export default infoSlice
