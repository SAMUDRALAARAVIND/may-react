import { Tabs } from "antd";
import "../styles/user.scss";
import { Suggestions } from "./Suggestions";
import { Followers } from "./Followers";
import { Following } from "./Following";

export const Profile = () => {
  return (
    <div className="tabs-container">
      <Tabs
        items={[
          {
            label: "Followers",
            key: "followers",
            children: <Followers />,
          },
          {
            label: "Following",
            key: "following",
            children: <Following />,
          },
          {
            label: "Suggestions",
            key: "suggestions",
            children: <Suggestions />,
          },
        ]}
      />
    </div>
  );
};
