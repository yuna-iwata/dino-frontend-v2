import Account from "../Components/Account";
import Cover from "../Components/Coverphoto";
import React from "react";

export default function AccountPage({
  profile,
  username,
  rank,
  changeUser,
  game,
}) {
  if (game.key !== null) {
    game?.destroy(true);
  }
  return (
    <div>
      <Cover />
      <Account
        profile={profile}
        username={username}
        rank={rank}
        changeUser={changeUser}
      />
    </div>
  );
}
