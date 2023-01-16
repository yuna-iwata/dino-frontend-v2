import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { deleteUser } from "../../Networking.js";

export default function DeleteAccountConfirmation(props) {
  const { username, changeUser } = props;
  return (
    <div>
      <Typography>Are you sure you want to delete your account?</Typography>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button
          onClick={() => {
            deleteUser(username);
            changeUser(null);
          }}
        >
          Yes
        </Button>
      </Link>
    </div>
  );
}
