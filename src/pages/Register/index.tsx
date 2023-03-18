import { Navigate } from "react-router-dom";
import { Button, Card, Form, Input, Typography } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

import { loadingStore } from "@/stores";
import { useAuthStore } from "@/stores/auth.store";
import { LoadingKeys, ROUTES } from "@/models";

import styles from "../Login/styles.module.scss";

const Register = () => {
  const [form] = Form.useForm();
  const { register, currentUser } = useAuthStore();

  const { getLoading } = loadingStore();

  const onFinish = (values: any) => {
    register({
      data: values,
    });
  };

  if (currentUser && currentUser.token) {
    return <Navigate to={ROUTES.HOME} />;
  }

  return (
    <div className={styles.loginForm}>
      <Typography.Title level={2} className={styles.loginForm__title}>
        Register
      </Typography.Title>

      <Card>
        <Form
          layout="vertical"
          name="register"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
          form={form}
        >
          <Form.Item
            label={"Name"}
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your Name!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              type="text"
              placeholder={"Name"}
            />
          </Form.Item>

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

          <Form.Item
            label={"Confirm Password"}
            name="confirmPassword"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
              {
                validator: (_rule, value) => {
                  if (value !== form.getFieldValue("password")) {
                    return Promise.reject("Passwords do not match!");
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder={"Confirm Password"}
            />
          </Form.Item>

          {/* Login if have an account */}
          <Typography.Text className={styles.loginForm__text}>
            have account already?{" "}
            <Typography.Link href={ROUTES.LOGIN}>Login</Typography.Link>
          </Typography.Text>

          <Form.Item noStyle>
            <Button
              type="primary"
              htmlType="submit"
              block
              loading={getLoading(LoadingKeys.REGISTER)}
            >
              Register
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Register;
