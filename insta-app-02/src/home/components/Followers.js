import { Button, Spin } from "antd";
import { useEffect } from "react";
import { TabKeys } from "../redux/users/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllFollowers } from "../redux/users/thunk";
import { UserCard } from "./UserCard";

export const Followers = () => {
  const dispatch = useDispatch();
  const { apiStatus, list } = useSelector(
    (state) => state.users[TabKeys.FOLLOWERS]
  );

  const fetchFollowers = () => {
    dispatch(fetchAllFollowers);
  };

  useEffect(() => {
    fetchFollowers();
  }, []);

  if (apiStatus === "init" || apiStatus === "pending") {
    return <Spin />;
  }

  if (apiStatus === "error") {
    return <Button onClick={fetchFollowers}>Retry</Button>;
  }

  return (
    <div>
      {list.map((user) => (
        <UserCard user={user} key={user._id} tabId={TabKeys.FOLLOWERS} />
      ))}
    </div>
  );
};
