import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllSuggestions } from "../redux/users/thunk";
import { TabKeys } from "../redux/users/usersSlice";
import { Button, Spin } from "antd";
import { UserCard } from "./UserCard";

export const Suggestions = () => {
  const dispatch = useDispatch();
  const { apiStatus, list } = useSelector(
    (state) => state.users[TabKeys.SUGGESTIONS]
  );

  const fetchSuggestions = () => {
    dispatch(fetchAllSuggestions);
  };

  useEffect(() => {
    fetchSuggestions();
  }, []);

  if (apiStatus === "init" || apiStatus === "pending") {
    return <Spin />;
  }

  if (apiStatus === "error") {
    return <Button onClick={fetchSuggestions}>Retry</Button>;
  }

  return (
    <div>
      {list.map((user) => (
        <UserCard user={user} key={user._id} tabId={TabKeys.SUGGESTIONS} />
      ))}
    </div>
  );
};
