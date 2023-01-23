import { useFormik } from "formik";
import { useState } from "react";
import { changePassword } from "../../Networking";
import { Form } from "react-bootstrap";
import { Box, Typography, Button } from "@mui/material";

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
    <Box
      sx={{
        bgcolor: "background.paper",
        boxShadow: 1,
        borderRadius: 2,
        p: 2,
        mt: 5,
      }}
    >
      <Typography variant="h3" align="center" sx={{ p: 2, color: "#74D193" }}>
        Change password
      </Typography>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="oldPassword">
          <Form.Label>
            <Typography>Old Password</Typography>
          </Form.Label>
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
          <Form.Label>
            <Typography>New Password</Typography>
          </Form.Label>
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
        <Button variant="contained" color="greenTheme" type="submit">
          <Typography>Submit</Typography>
        </Button>
      </Form>
    </Box>
  );
}
