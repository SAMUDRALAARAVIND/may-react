import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: {
    apiStatus: "init",
    data: [],
  },
  userInfo: {
    apiStatus: "init",
    data: null,
  },
  createApiStatus: "init",
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    updateUserInfo: (state, action) => {
      const { apiStatus, data } = action.payload;
      if (apiStatus === "success") {
        state.userInfo.data = data;
      }
      state.userInfo.apiStatus = apiStatus;
    },

    updatePostsInfo: (state, action) => {
      const { apiStatus, data } = action.payload;
      if (apiStatus === "success") {
        state.posts.data = data;
      }
      state.posts.apiStatus = apiStatus;
    },

    updatePostCreationStatus: (state, action) => {
      state.createApiStatus = action.payload;
    },

    addPost: (state, action) => {
      state.posts.data.unshift(action.payload);
      const postCount = state.userInfo.data?.posts;
      if (state.userInfo.data?.posts) {
        state.userInfo.data.posts = postCount + 1;
      }
    },
  },
});

export const {
  updateUserInfo,
  updatePostsInfo,
  updatePostCreationStatus,
  addPost,
} = postSlice.actions;

export default postSlice;
