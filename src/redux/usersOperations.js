import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUsersApi } from "../services/Api";

export const getUsers = createAsyncThunk(
  "users/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getUsersApi();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
