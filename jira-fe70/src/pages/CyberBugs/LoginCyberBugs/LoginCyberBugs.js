import React from "react";
import * as Yup from "yup";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  UserOutlined,
  LockOutlined,
  FacebookOutlined,
  TwitterOutlined,
  GoogleOutlined,
} from "@ant-design/icons";
import { Button, Input, Space } from "antd";
import { withFormik } from "formik";
const LoginCyberBugs = (props) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    props;

  return (
    <form
      onSubmit={handleSubmit}
      className="container"
      style={{ height: window.innerHeight }}
    >
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: window.innerHeight }}
      >
        <h3
          className="text-center display-4"
          style={{ fontWeight: "300", fontSize: "35px" }}
        >
          Login CyberBugs
        </h3>
        <div className="d-flex mt-3">
          <Input
            onChange={handleChange}
            size="large"
            name="email"
            type="email"
            placeholder="Input email"
            style={{ width: "100%", minWidth: "300px" }}
            prefix={<UserOutlined />}
          />
        </div>
        <div className="text-danger">{errors.email}</div>

        <div className="d-flex mt-3">
          <Input
            onChange={handleChange}
            name="password"
            type="password"
            size="large"
            style={{ width: "100%", minWidth: "300px" }}
            placeholder="input password"
            prefix={<LockOutlined />}
          />
        </div>
        <div className="text-danger">{errors.password}</div>
        <Button
          className="mt-3"
          type="primary"
          size="large"
          htmlType="submit"
          style={{
            minWidth: "300px",
            backgroundColor: "rgb(102,117,223)",
            color: "#fff",
          }}
        >
          Login
        </Button>
        <div className="social d-flex mt-3">
          <Button
            className="mt-2 mr-2"
            type="primary"
            icon={<FacebookOutlined />}
            size="large"
            shape="circle"
            style={{ backgroundColor: "rgb(59,89,152)", border: "none" }}
          ></Button>
          <Button
            className="mt-2 mr-2"
            type="primary"
            icon={<TwitterOutlined />}
            size="large"
            shape="circle"
          ></Button>
          <Button
            className="mt-2 mr-2"
            type="primary"
            icon={<GoogleOutlined />}
            size="large"
            shape="circle"
            style={{ backgroundColor: "RGB(239, 61, 61)", border: "none" }}
          ></Button>
        </div>
      </div>
    </form>
  );
};


const LoginCyberBugsWithFormik = withFormik({
  mapPropsToValues: () => ({ email: "", password: "" }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("must be a valid email")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "password must be 6 to 32 characters long")
      .max(32, "password must be 6 to 32 characters long")
      .required("Password is required"),
  }),
  handleSubmit: (values, { setSubmitting }) => {
    console.log(values);
  },

  displayName: "BasicForm",
})(LoginCyberBugs);
export default LoginCyberBugsWithFormik;
