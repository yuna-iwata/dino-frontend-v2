import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { Button, Typography } from "@mui/material";

import { submitUser } from "../Networking.js";

export default function CreateAccountForm(props) {
  const { changeUser, changeProfileAvatar } = props;

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
          changeProfileAvatar(0);
        } else if (response.code === 500) {
          setUsernameExists(true);
        }
      },
    }
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="username">
        <Form.Label>
          <Typography>Username</Typography>
        </Form.Label>
        <Form.Control
          type="username"
          placeholder="Username"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.username && errors.username ? (
          <div className="errorMessage">{errors.username}</div>
        ) : null}
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>
          <Typography>Password</Typography>
        </Form.Label>
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
        <Form.Label>
          <Typography>Confirm</Typography>
        </Form.Label>
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

      <Button variant="contained" color="greenTheme" type="submit">
        <Typography>Submit</Typography>
      </Button>

      {usernameExists ? (
        <p className="errorMessage">
          Username already exists. Please try a different username
        </p>
      ) : null}
    </Form>
  );
}
