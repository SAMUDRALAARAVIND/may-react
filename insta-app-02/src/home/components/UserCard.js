import { useDispatch, useSelector } from "react-redux";
import "../styles/user-card.scss";
import { Button } from "antd";
import { followOrUnFollowUser } from "../redux/users/thunk";
import { TabKeys } from "../redux/users/usersSlice";

export const UserCard = ({ user, tabId }) => {
  const dispatch = useDispatch();
  const apiStatus = useSelector((state) => state.users.actions[user._id]);
  const decideConnection = () => {
    dispatch(followOrUnFollowUser(user, tabId));
  };

  return (
    <div className="user-card">
      <div className="left">
        <p>
          {user.gender === "MALE" ? "He/Him" : "She/Her"}
          <b>{user.name}</b>
        </p>
        <span>{user.email}</span>
        <span>{user.city}</span>
      </div>
      <Button
        loading={apiStatus === "pending"}
        className="btn"
        onClick={decideConnection}
      >
        {user.following
          ? "Unfollow"
          : tabId === TabKeys.FOLLOWERS
          ? "Follow Back"
          : "Follow"}
      </Button>
    </div>
  );
};
