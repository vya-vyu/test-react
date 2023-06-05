import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./usersOperations";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    filter: "all",
    isClicked: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      if (state.users.length) return;
      state.users.push(...payload);
    });
  },
  reducers: {
    filterUsers(state, { payload }) {
      state.filter = payload;
    },
    isFollow(state, { payload }) {
      const { userId, isClicked } = payload;
      const user = state.users.find((user) => user.id === userId);
      if (user) {
        if (isClicked) {
          user.followers += 1;
          user.isClicked = true;
        } else {
          user.followers -= 1;
          user.isClicked = isClicked;
        }
      }
    },
  },
});
export const { filterUsers, isFollow } = usersSlice.actions;
