import { useDispatch, useSelector } from "react-redux";
import { TabKeys } from "../redux/users/usersSlice";
import { useEffect } from "react";
import { Button, Spin } from "antd";
import { UserCard } from "./UserCard";
import { fetchAllFollowing } from "../redux/users/thunk";

export const Following = () => {
  const dispatch = useDispatch();
  const { apiStatus, list } = useSelector(
    (state) => state.users[TabKeys.FOLLOWING]
  );

  const fetchFollowing = () => {
    dispatch(fetchAllFollowing);
  };

  useEffect(() => {
    fetchFollowing();
  }, []);

  if (apiStatus === "init" || apiStatus === "pending") {
    return <Spin />;
  }

  if (apiStatus === "error") {
    return <Button onClick={fetchFollowing}>Retry</Button>;
  }

  return (
    <div>
      {list.map((user) => (
        <UserCard user={user} key={user._id} tabId={TabKeys.FOLLOWING} />
      ))}
    </div>
  );
};
