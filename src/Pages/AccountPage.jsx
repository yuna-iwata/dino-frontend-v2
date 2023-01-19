import Account from "../Components/Account";
import React from "react";

export default function AccountPage({
  currentAvatar,
  username,
  rank,
  changeUser,
  changeProfileAvatar,
  itemData,
  baseUrl,
  game,
}) {
  if (game.key !== null) {
    game?.destroy(true);
  }
  return (
    <div>
      <Account
        currentAvatar={currentAvatar}
        username={username}
        rank={rank}
        changeUser={changeUser}
        changeProfileAvatar={changeProfileAvatar}
        itemData={itemData}
        baseUrl={baseUrl}
      />
    </div>
  );
}
