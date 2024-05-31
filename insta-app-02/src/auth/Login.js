import { Alert, Button, Form, Input } from "antd";
import { passwordRegexp } from "./signup";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateAuthStatus } from "./redux/authSlice";

export const Login = ({ auth }) => {
  const [apiStatus, setApiStatus] = useState("init");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitForm = async (loginInfo) => {
    // loginInfo = {email, password}
    setApiStatus("pending");
    const { success } = await auth.loginUser(loginInfo);
    if (success) {
      dispatch(updateAuthStatus(true));
      navigate("/home");
    } else setApiStatus("error");
  };

  return (
    <div className="form">
      {/* {apiStatus === "success" && (
        <Alert
          type="success"
          showIcon
          message="Logged in successfully.."
          closable
        />
      )} */}
      {apiStatus === "error" && (
        <Alert type="error" showIcon message="Invalid credentials" closable />
      )}
      <Form onFinish={onSubmitForm} layout="vertical">
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { type: "email", message: "Please enter valid email" },
            { required: true, message: "Please enter email" },
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: "Password is required" },
            {
              pattern: passwordRegexp,
              message: "Inavlid password",
            },
          ]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Button
          loading={apiStatus === "pending"}
          htmlType="submit"
          type="primary"
          block
        >
          Login
        </Button>
      </Form>
      <p>
        Don't have an account ?{" "}
        <Link className="link" to="/signup">
          Signup here
        </Link>
      </p>
    </div>
  );
};

// i didn't install antd and react-router-dom
