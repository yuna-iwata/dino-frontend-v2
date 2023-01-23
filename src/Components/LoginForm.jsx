import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { checkUser } from "../Networking.js";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { Button, Typography } from "@mui/material";

export default function CreateAccountForm(props) {
  const { changeUser, changeProfileAvatar } = props;
  const navigate = useNavigate();
  const [validationError, setValidationError] = useState(null);

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

    return errors;
  }

  const { handleSubmit, handleChange, handleBlur, touched, errors } = useFormik(
    {
      initialValues: {
        username: "",
        password: "",
      },
      validate,
      onSubmit: async (values) => {
        const response = await checkUser(values.username, values.password);
        if (response.code === 200) {
          (() => {
            changeUser(values.username);
            changeProfileAvatar(response.dino_id);
          })();
          navigate("/game");
        } else if (response.code === 404) {
          setValidationError("Username does not exist. Please try again");
        } else if (response.code === 401) {
          setValidationError("Incorrect password. Please try again");
        }
      },
    }
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="username">
        <Form.Label>
          <p className="avatar-title"> Username</p>
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
          <p className="avatar-title">Password</p>
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

      <Button variant="contained" color="greenTheme" type="submit">
        <Typography>Submit</Typography>
      </Button>

      <p className="errorMessage">{validationError}</p>
    </Form>
  );
}
