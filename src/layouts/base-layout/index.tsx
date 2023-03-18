import { FC, ReactNode } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Button, Layout, Menu } from "antd";

import styles from "./index.module.scss";
import { Container } from "@/components";
import { menuList } from "@/constants";
import { useAuthStore } from "@/stores/auth.store";
import { ROUTES } from "@/models";

const { Header, Content, Footer } = Layout;

interface BaseLayoutProps {
  children?: ReactNode;
}

export const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const { logout } = useAuthStore();

  return (
    <Layout className={`${styles.baseLayoutWrap} layout`}>
      <Header>
        <Container>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["0"]}
            items={menuList.map((item, index) => ({
              key: index,
              label: item.title,
              onClick: () => navigate(item.path),
            }))}
          />
        </Container>
      </Header>
      <Content className={styles.content}>
        <Container>{children || <Outlet />}</Container>
      </Content>
      <Footer className={styles.footer}>Made with ❤️ by Ahmed Waked</Footer>
    </Layout>
  );
};
