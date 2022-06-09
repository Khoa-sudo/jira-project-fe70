import React from "react";
import { Layout } from "antd";
import { Route } from "react-router-dom";
const { Header, Footer, Sider, Content } = Layout;
export const UserLoginTemplate = (props) => {
  let { Component, ...restRoute } = props;
  console.log("restRoute", restRoute);
  console.log("Component", Component);
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
                  background: "url(https://picsum.photos/500)",
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
