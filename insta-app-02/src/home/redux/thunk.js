import { Endpoints } from "../../network/Endpoints";
import { request } from "../../network/request";
import {
  addPost,
  updatePostCreationStatus,
  updatePostsInfo,
  updateUserInfo,
} from "./postSlice";

export async function fetchUserInfo(dispatch) {
  // dispatch => can only take object as an argument
  dispatch(updateUserInfo({ apiStatus: "pending" }));
  const httpConfig = {
    url: Endpoints.userInfo,
  };
  const { success, data } = await request(httpConfig);
  dispatch(updateUserInfo({ apiStatus: success ? "success" : "error", data }));
}

export async function fetchAllPosts(dispatch) {
  dispatch(updatePostsInfo({ apiStatus: "pending" }));
  const httpConfig = {
    url: Endpoints.posts,
  };
  const { success, data } = await request(httpConfig);
  if (success) {
    data.reverse();
  }
  dispatch(updatePostsInfo({ apiStatus: success ? "success" : "error", data }));
}

export function createPost(postInfo) {
  return async function (dispatch) {
    dispatch(updatePostCreationStatus("pending"));
    const httpConfig = {
      url: Endpoints.createPost,
      method: "POST",
      data: postInfo,
    };
    const { success, data } = await request(httpConfig);
    if (success) {
      dispatch(addPost(data.post));
    }
    dispatch(updatePostCreationStatus(success ? "success" : "error"));
  };
}
