import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={goToLogin}>
          Back Home
        </Button>
      }
    />
  );
};
