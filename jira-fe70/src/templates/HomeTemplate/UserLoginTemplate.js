import React from "react";
import { Layout } from "antd";
import { Route } from "react-router-dom";
const { Header, Footer, Sider, Content } = Layout;
export const UserLoginTemplate = (props) => {
  let { Component, ...restRoute } = props;
  return (
    <Route
      {...restRoute}
      render={(propsRoute) => {
        return (
          <>
            <Layout>
              <Sider
                width={window.innerWidth / 2}
                style={{
                  height: window.innerHeight,
                  background: "url(https://picsum.photos/2000)",
                  backgroundSize:"100%"
                }}
              ></Sider>
              <Layout>
                <Component {...propsRoute} />
              </Layout>
            </Layout>
          </>
        );
      }}
    />
  );
};
