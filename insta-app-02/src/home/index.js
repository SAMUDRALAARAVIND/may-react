import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllPosts, fetchUserInfo } from "./redux/thunk";
import { UserInfo } from "./components/UserInfo";
import { PostsList } from "./components/PostsList";

const PostApp = () => {
  const dispatch = useDispatch();
  // dispatch => object | function

  useEffect(() => {
    dispatch(fetchUserInfo);
    dispatch(fetchAllPosts);
  }, []);

  return (
    <div>
      <UserInfo />
      <PostsList />
    </div>
  );
};

export default PostApp;
