import { useFormik } from "formik";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { Box, Typography, Button } from "@mui/material";

import { changeUsername } from "../../Networking";

export default function ChangeUsername(props) {
  const { changeTab, changeUser, currentUser, setColour } = props;

  const [isIncorrectPassword, setIsIncorrectPassword] = useState(false);
  const [isUsernameTaken, setIsUsernameTaken] = useState(false);

  function validate(values) {
    const errors = {};
    if (!values.newUsername) {
      errors.newUsername = "Required";
    }
    if (values.newUsername === currentUser) {
      errors.newUsername = "Please choose a new username";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    return errors;
  }

  const { handleSubmit, handleChange, handleBlur, touched, errors } = useFormik(
    {
      initialValues: {
        newUsername: "",
        password: "",
      },
      validate,
      onSubmit: async (values) => {
        const response = await changeUsername(
          currentUser,
          values.newUsername,
          values.password
        );
        if (response.code === 200) {
          changeTab("leaderboard");
          alert("username changed successfully");
          changeUser(values.newUsername);
        } else if (response.code === 401) {
          setIsIncorrectPassword(true);
          setIsUsernameTaken(false);
        } else if (response.code === 409) {
          setIsUsernameTaken(true);
          setIsIncorrectPassword(false);
        }
      },
    }
  );

  return (
    <Box
      sx={{
        bgcolor: setColour,
        boxShadow: 1,
        borderRadius: 2,
        p: 2,
        mt: 5.3,
      }}
    >
      <Typography variant="h3" align="center" sx={{ p: 2, color: "#74D193" }}>
        Change username
      </Typography>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="newUsername">
          <Form.Label>
            <Typography>New username</Typography>
          </Form.Label>
          <Form.Control
            placeholder="New Username"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.newUsername && errors.newUsername ? (
            <div className="errorMessage">{errors.newUsername}</div>
          ) : null}
          {isUsernameTaken ? (
            <p className="errorMessage">
              Username is already taken, please try another username
            </p>
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
          {isIncorrectPassword ? (
            <p className="errorMessage">Password incorrect, please try again</p>
          ) : null}
        </Form.Group>
        <Button variant="contained" color="greenTheme" type="submit">
          <Typography>Submit</Typography>
        </Button>
      </Form>
    </Box>
  );
}
