import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import LogoutIcon from "@mui/icons-material/Logout";
import LeaderboardRoundedIcon from "@mui/icons-material/LeaderboardRounded";

export default function TabButton(props) {
  const { currentTab, tab, changeTab, tabs } = props;
  let icon;
  if (tab === "leaderboard") {
    icon = <LeaderboardRoundedIcon />;
  } else if (tab === "avatar") {
    icon = <AccountCircleIcon />;
  } else if (tab === "username") {
    icon = <PersonIcon />;
  } else if (tab === "password") {
    icon = <KeyIcon />;
  } else if (tab === "signOut") {
    icon = <LogoutIcon />;
  } else if (tab === "delete") {
    icon = <DeleteIcon />;
  }
  return (
    <Button
      variant={
        tabs[currentTab].text === tabs[tab].text ? "contained" : "outlined"
      }
      color={tabs[currentTab].text === tabs[tab].text ? "green" : "neutral"}
      startIcon={icon}
      onClick={() => {
        changeTab(tab);
      }}
    >
      {tabs[tab].text}
    </Button>
  );
}
