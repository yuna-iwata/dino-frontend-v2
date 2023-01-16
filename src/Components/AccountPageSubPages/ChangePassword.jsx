import { useFormik } from "formik";
import { useState } from "react";
import { changePassword } from "../../Networking";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function ChangePassword(props) {
  const { changeTab, username } = props;
  const [isIncorrectPassword, setIsIncorrectPassword] = useState(false);

  function validate(values) {
    const errors = {};
    if (!values.oldPassword) {
      errors.oldPassword = "Required";
    }
    if (!values.newPassword) {
      errors.newPassword = "Required";
    }
    return errors;
  }

  const { handleSubmit, handleChange, handleBlur, touched, errors } = useFormik(
    {
      initialValues: {
        oldPassword: "",
        newPassword: "",
      },
      validate,
      onSubmit: async (values) => {
        const response = await changePassword(
          username,
          values.oldPassword,
          values.newPassword
        );
        if (response.code === 200) {
          changeTab("leaderboard");
          alert("password changed successfully");
        } else if (response.code === 401) {
          setIsIncorrectPassword(true);
        }
      },
    }
  );

  return (
    <div>
      <h1>Fill in the below form to change your password</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="oldPassword">
          <Form.Label>Old Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Old Password"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.oldPassword && errors.oldPassword ? (
            <div className="errorMessage">{errors.oldPassword}</div>
          ) : null}
          {isIncorrectPassword ? (
            <p className="errorMessage">Password incorrect, please try again</p>
          ) : null}
        </Form.Group>
        <Form.Group className="mb-3" controlId="newPassword">
          <Form.Label>New Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="New Password"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.newPassword && errors.newPassword ? (
            <div className="errorMessage">{errors.newPassword}</div>
          ) : null}
        </Form.Group>
        <Button variant="flat" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
