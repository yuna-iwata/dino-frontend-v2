import LoginForm from "../Components/LoginForm";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export default function CreateAccountPage(props) {
  const { changeUser } = props;
  return (
    <div className="container">
      <h1>Login</h1>
      <LoginForm changeUser={changeUser} />
      <p>Don't have an account?</p>
      <Link style={{ textDecoration: "none" }} to="/create-account">
        <Button variant="outlined" color="inherit">
          Sign Up
        </Button>
      </Link>
    </div>
  );
}
