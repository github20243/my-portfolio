import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const INFO_GET = import.meta.env.VITE_APP_INFO_PORT;
const INFO_BLOGS_GET = import.meta.env.VITE_APP_BLOGS_INFO;

export const getInfo = createAsyncThunk(
	"info/getInfo",
	async (_, { rejectWithValue }) => {
		try {
			const { data } = await axios.get(INFO_GET);
			return data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const getBlogsInfo = createAsyncThunk(
  "info/getBlogsInfo",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(INFO_BLOGS_GET);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

