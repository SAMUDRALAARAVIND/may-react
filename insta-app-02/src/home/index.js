import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllPosts, fetchUserInfo } from "./redux/post/thunk";
import { UserInfo } from "./components/UserInfo";
import { PostsList } from "./components/PostsList";
import { Profile } from "./components/Profile";
import "./styles/index.scss";

const PostApp = () => {
  const dispatch = useDispatch();
  // dispatch => object | function

  useEffect(() => {
    dispatch(fetchUserInfo);
    dispatch(fetchAllPosts);
  }, []);

  return (
    <div className="home-container">
      <div className="left-box">
        <UserInfo />
        <PostsList />
      </div>
      <Profile />
    </div>
  );
};

export default PostApp;
