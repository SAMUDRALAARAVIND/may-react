import "./app.scss";
import {
  Button,
  Checkbox,
  Dropdown,
  FloatButton,
  Table,
  Tabs,
  Tag,
} from "antd";
import { NotificationOutlined, SearchOutlined } from "@ant-design/icons";
import Column from "antd/es/table/Column";

const App = () => {
  return (
    <div className="app">
      <h1>App Component</h1>
      <button className="btn">Click Me</button>
      <div className="container">
        <span>Text 1</span>
        <span>Text 2</span>
      </div>
      <Button
        type="primary"
        // style={{ margin: 20, backgroundColor: "red" }}
        onClick={() => alert("clicked on button")}
        className="test"
        icon={<SearchOutlined />}
        iconPosition="start"
      >
        Click Me
      </Button>
      <FloatButton
        type="primary"
        icon={<NotificationOutlined />}
        badge={{ count: 10, color: "blue" }}
      />

      <Dropdown
        menu={{
          items: [
            { key: 1, label: <b>First Item</b> },
            { key: 2, label: <span>Second Item</span> },
          ],
        }}
        placement="bottomLeft"
        arrow
      >
        <Button>Hover Me</Button>
      </Dropdown>

      <Table
        pagination={{ pageSize: 4, position: "bottomLeft" }}
        dataSource={[
          {
            username: "Aravind",
            email: "aravind@gmail.com",
            friends: ["Rajesh", "Akhil", "Akram"],
          },
          {
            username: "Joydeep",
            email: "joy@gmail.com",
            friends: ["Akhil", "Akram"],
          },
          {
            username: "Priytesh",
            email: "priytesh@gmail.com",
            friends: ["Rajesh", "Akram"],
          },
          {
            username: "Aravind",
            email: "aravind@gmail.com",
            friends: ["Rajesh", "Akhil", "Akram"],
          },
          {
            username: "Joydeep",
            email: "joy@gmail.com",
            friends: ["Akhil", "Akram"],
          },
          {
            username: "Priytesh",
            email: "priytesh@gmail.com",
            friends: ["Rajesh", "Akram"],
          },
          {
            username: "Aravind",
            email: "aravind@gmail.com",
            friends: ["Rajesh", "Akhil", "Akram"],
          },
          {
            username: "Joydeep",
            email: "joy@gmail.com",
            friends: ["Akhil", "Akram"],
          },
          {
            username: "Priytesh",
            email: "priytesh@gmail.com",
            friends: ["Rajesh", "Akram"],
          },
        ]}
      >
        <Column title="User Name" dataIndex="username" key="1" />
        <Column
          title="Email Address"
          dataIndex="email"
          key="2"
          render={(email) => <Tag color="green">{email}</Tag>}
        />
        <Column
          title="Friends List"
          dataIndex="friends"
          key="3"
          render={(friends) => {
            return friends.map((friend) => <Tag color="blue">{friend}</Tag>);
          }}
        />
      </Table>
      <Tabs
        tabPosition="bottom"
        items={[
          {
            key: "1",
            label: "Tab 1",
            children: <h2>First Tab</h2>,
            icon: <SearchOutlined />,
          },
          {
            key: "2",
            label: "Tab 2",
            children: <b>Second zTab</b>,
            icon: <NotificationOutlined />,
          },
          {
            key: "3",
            label: "Tab 3",
            children: <b>Third zTab</b>,
          },
        ]}
      />

      <label htmlFor="check">Click Me</label>
      <Checkbox id="check" />
      {/* <input type="checkbox" /> */}
    </div>
  );
};

export default App;
