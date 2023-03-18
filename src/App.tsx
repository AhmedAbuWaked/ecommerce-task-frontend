import { ConfigProvider } from "antd";
import { useRoutes } from "react-router-dom";

import router from "./router";

import "./styles/main.scss";

const App = () => {
  const content = useRoutes(router);

  return <ConfigProvider>{content}</ConfigProvider>;
};

export default App;
