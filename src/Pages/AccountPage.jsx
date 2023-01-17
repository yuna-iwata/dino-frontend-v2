import Account from "../Components/Account";
import Cover from "../Components/Coverphoto";
import React from "react";

export default function AccountPage({
  currentAvatar,
  username,
  score,
  rank,
  scoreList,
  changeUser,
  changeProfileAvatar,
  itemData,
  baseUrl,
}) {
  return (
    <div>
      <Cover />
      <Account
        currentAvatar={currentAvatar}
        username={username}
        score={score}
        rank={rank}
        scoreList={scoreList}
        changeUser={changeUser}
        changeProfileAvatar={changeProfileAvatar}
        itemData={itemData}
        baseUrl={baseUrl}
      />
    </div>
  );
}
