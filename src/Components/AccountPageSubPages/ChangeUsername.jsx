import { useFormik } from "formik";
import { useState } from "react";
import { changeUsername } from "../../Networking";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function ChangeUsername(props) {
  const { changeTab, changeUser, username } = props;
  const [isIncorrectPassword, setIsIncorrectPassword] = useState(false);
  const [isUsernameTaken, setIsUsernameTaken] = useState(false);

  function validate(values) {
    const errors = {};
    if (!values.newUsername) {
      errors.newUsername = "Required";
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
          username,
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
    <div>
      <h1>Fill in the below form to change your username</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="newUsername">
          <Form.Label>New Username</Form.Label>
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
          {isIncorrectPassword ? (
            <p className="errorMessage">Password incorrect, please try again</p>
          ) : null}
        </Form.Group>
        <Button variant="flat" type="submit">
          Submit
        </Button>
      </Form>
    </div>
>>>>>>> 4c7a3b939a31f02e825c828acdf7941e02ed2882
  );
}
