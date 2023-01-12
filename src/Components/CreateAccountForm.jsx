import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { submitUser } from "../Networking.js";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function CreateAccountForm(props) {
  const { changeUser } = props;
  const navigate = useNavigate();
  const [usernameExists, setUsernameExists] = useState(false);

  function validate(values) {
    const errors = {};
    if (!values.username) {
      errors.username = "Required";
    }
    if (values.username.length > 20) {
      errors.username = "Username can have a maximum of 20 characters";
    }

    if (!values.password) {
      errors.password = "Required";
    }
    if (values.password.length > 20) {
      errors.password = "Password can have a maximum of 20 characters";
    }

    if (!values.repassword) {
      errors.repassword = "Required";
    }
    if (values.password !== values.repassword) {
      errors.repassword = "Passwords must match";
    }

    return errors;
  }

  const { handleSubmit, handleChange, handleBlur, touched, errors } = useFormik(
    {
      initialValues: {
        username: "",
        password: "",
        repassword: "",
      },
      validate,
      onSubmit: async (values) => {
        const response = await submitUser(values.username, values.password);
        if (response.code === 200) {
          changeUser(values.username);
          navigate("/game");
        } else if (response.code === 304) {
          setUsernameExists(true);
        }
      },
    }
  );

  return (
    <>
      <style type="text/css">
        {`
    .btn-flat {
      background-color: #75d193;
      color: white;
    }
    `}
      </style>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="username"
            placeholder="Enter username"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.username && errors.username ? (
            <div className="errorMessage">{errors.username}</div>
          ) : null}
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.password && errors.password ? (
            <div className="errorMessage">{errors.password}</div>
          ) : null}
        </Form.Group>

        <Form.Group className="mb-3" controlId="repassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password confirmation"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.repassword && errors.repassword ? (
            <div className="errorMessage">{errors.repassword}</div>
          ) : null}
        </Form.Group>

        <Button variant="flat" type="submit">
          Submit
        </Button>

        {usernameExists ? (
          <p className="errorMessage">
            Username already exists. Please try a different username
          </p>
        ) : null}
      </Form>
    </>
  );
}
