import { Navigate } from "react-router-dom";
import { Button, Card, Form, Input, Typography } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

import { useAuthStore } from "@/stores/auth.store";
import { loadingStore } from "@/stores";
import { LoadingKeys, ROUTES } from "@/models";

import styles from "./styles.module.scss";

const Login = () => {
  const { login, currentUser } = useAuthStore();

  const { getLoading } = loadingStore();

  const onFinish = (values: any) => {
    login({
      data: values,
    });
  };

  if (currentUser && currentUser.token) {
    return <Navigate to={ROUTES.HOME} />;
  }

  return (
    <div className={styles.loginForm}>
      <Typography.Title level={2} className={styles.loginForm__title}>
        Login
      </Typography.Title>

      <Card>
        <Form
          layout="vertical"
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label={"Email"}
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
              {
                type: "email",
                message: "Please input a valid email!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              type="email"
              placeholder={"Email"}
            />
          </Form.Item>

          <Form.Item
            label={"Password"}
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder={"Password"}
            />
          </Form.Item>

          {/* Register if have no account */}
          <Typography.Text>
            Don't have an account?{" "}
            <Typography.Link href={ROUTES.REGISTER}>Register</Typography.Link>
          </Typography.Text>

          <Form.Item noStyle>
            <Button
              type="primary"
              htmlType="submit"
              block
              loading={getLoading(LoadingKeys.LOGIN)}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
