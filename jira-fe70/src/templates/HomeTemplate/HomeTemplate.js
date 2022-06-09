import React from "react";
import { Route } from "react-router-dom";
import Header from "../../components/Header/Header";

export const HomeTemplate = (props) => {
  let { Component, ...restRoute } = props;
  return (
    <Route
      {...restRoute}
      render={(propsRoute) => {
        return (
          <>
            <Header />
            <Component {...propsRoute} />
          </>
        );
      }}
    />
  );
};
