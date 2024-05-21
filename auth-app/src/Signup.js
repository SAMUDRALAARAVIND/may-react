import { Alert, Button, Form, Input, Radio } from "antd";
import { useForm } from "antd/es/form/Form";
import { useEffect, useState } from "react";

export const passwordRegexp =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

export const Signup = ({ auth, toggleForm }) => {
  const [apiStatus, setApiStatus] = useState("init");
  const [form] = useForm();

  const onSubmitForm = async (data) => {
    setApiStatus("pending");
    const { success } = await auth.signupUser(data);
    setApiStatus(success ? "success" : "error");
  };

  useEffect(() => {
    if (apiStatus === "success") {
      form.resetFields();
    }
  }, [apiStatus]);

  return (
    <div className="form">
      {apiStatus === "success" && (
        <Alert
          type="success"
          showIcon
          message="Signup success you can login now!"
          closable
        />
      )}
      {apiStatus === "error" && (
        <Alert
          type="error"
          showIcon
          message="Something went wrong try again.."
          closable
        />
      )}
      <Form form={form} onFinish={onSubmitForm} layout="vertical">
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
          label="Full Name"
          name="name"
          rules={[
            { required: true, message: "Please enter your name" },
            {
              pattern: /^\w{3,8}$/i,
              message: "name must be 3 to 8 chars long",
            },
          ]}
        >
          <Input placeholder="Enter Fullname" />
        </Form.Item>
        <Form.Item
          label="City"
          name="city"
          rules={[{ required: true, message: "Please enter your city" }]}
        >
          <Input placeholder="Enter City" />
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
        <Form.Item
          name="gender"
          label="Select your gender"
          rules={[{ required: true, message: "Please select your gender" }]}
        >
          <Radio.Group>
            <Radio value="MALE">Male</Radio>
            <Radio value="FEMALE">Female</Radio>
          </Radio.Group>
        </Form.Item>
        <Button
          loading={apiStatus === "pending"}
          htmlType="submit"
          type="primary"
          block
        >
          Signup
        </Button>
      </Form>
      <p>
        Already have an account ?{" "}
        <Button onClick={toggleForm} type="link">
          Signin here
        </Button>
      </p>
    </div>
  );
};
