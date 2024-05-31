import { useSelector } from "react-redux";
import "../styles/user-info.scss";
import { CreatePost } from "./CreatePost";
import { Spin } from "antd";

export const UserInfo = () => {
  const { apiStatus, data } = useSelector((state) => state.post.userInfo);
  if (apiStatus === "init" || apiStatus === "pending") {
    return <Spin />;
  }

  return (
    <div className="profile-container">
      <div className="user-info">
        <b>{data.name}</b>
        <p>{data.email}</p>
        <p>{data.city}</p>
        <p>{data.gender === "MALE" ? "He/Him" : "She/Her"}</p>
        <p>
          {data.followers} Followers, {data.following} Following
        </p>
      </div>
      <CreatePost posts={data.posts} />
    </div>
  );
};
