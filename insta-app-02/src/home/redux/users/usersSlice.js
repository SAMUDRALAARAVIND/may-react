import { createSlice } from "@reduxjs/toolkit";

export const TabKeys = {
  FOLLOWERS: "FOLLOWERS",
  FOLLOWING: "FOLLOWING",
  SUGGESTIONS: "SUGGESTIONS",
};

const usersSlice = createSlice({
  name: "users",
  initialState: {
    [TabKeys.FOLLOWERS]: {
      apiStatus: "init",
      list: [],
    },
    [TabKeys.FOLLOWING]: {
      apiStatus: "init",
      list: [],
    },
    [TabKeys.SUGGESTIONS]: {
      apiStatus: "init",
      list: [],
    },
    actions: {},
  },
  reducers: {
    updateApiStatusByTabKey: (state, action) => {
      const { tabId, apiStatus, data } = action.payload;
      if (apiStatus === "success") {
        state[tabId].list = data;
      }
      state[tabId].apiStatus = apiStatus;
    },

    updateActionStatus: (state, action) => {
      const { apiStatus, userId, tabId } = action.payload;
      state.actions[userId] = apiStatus;
      if (apiStatus === "success") {
        state[tabId].list.forEach((user) => {
          if (user._id === userId) {
            user.following = !user.following;
          }
        });
      }
    },
  },
});

export const { updateApiStatusByTabKey, updateActionStatus } =
  usersSlice.actions;

export default usersSlice;
