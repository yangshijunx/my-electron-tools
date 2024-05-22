import React, { useEffect, useRef, useState } from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import "./index.scss";
import homeLogo from "@/assets/img/logo/home-logo.svg";

const { Header, Content, Footer } = Layout;

const items = [
  {
    key: "1",
    label: (
      <a
        href="https://www.antgroup.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        首页
      </a>
    ),
  },
];

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  //   const [contentMaxHeight, setContentMaxHeight] = useState("100vh");
  const headerRef = useRef<HTMLElement | null>(null);
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // const calculateMaxHeight = () => {
    const headerHeight = headerRef.current?.offsetHeight || 0;
    const footerHeight = footerRef.current?.offsetHeight || 0;
    // <--------
    //   const maxHeight = `calc(100vh - ${headerHeight + footerHeight}px)`;
    //   setContentMaxHeight(maxHeight);
    // };
    // window.addEventListener("resize", calculateMaxHeight);
    // calculateMaxHeight();
    // // console.log("计算出来的高度", contentMaxHeight);
    // return () => window.removeEventListener("resize", calculateMaxHeight);
    // --------->
    window.electron.on("deviceInfo", (info) => {
      //   console.log("deviceInfo1", info);
    });
  });

  return (
    <Layout className="app-layout">
      <Header
        className="app-header"
        ref={headerRef}
        style={{
          display: "flex",
          alignItems: "center",
          lineHeight: "32px",
          padding: 0,
        }}
      >
        <img src={homeLogo} alt="" className="home-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content className="app-content" style={{ padding: "0 10px", flex: 1 }}>
        {/* <Breadcrumb
          style={{ margin: "10px 0" }}
          items={[
            { title: "Home", key: "1" },
            { title: "List", key: "2" },
            { title: "App", key: "3" },
          ]}
        ></Breadcrumb> */}
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 10,
            borderRadius: borderRadiusLG,
            flex: 1,
          }}
        >
          Content
        </div>
      </Content>
      <Footer
        className="app-footer"
        ref={footerRef}
        style={{ textAlign: "center" }}
      >
        {new Date().getFullYear()} Created by 1Bit
      </Footer>
    </Layout>
  );
};

export default App;
