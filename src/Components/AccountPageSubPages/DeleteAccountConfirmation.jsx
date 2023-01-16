import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { deleteUser } from "../../Networking.js";

export default function DeleteAccountConfirmation(props) {
  const { username, changeUser } = props;
  return (
    <div>
      <h1>Are you sure you want to delete your account?</h1>
      <Link to="/">
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
