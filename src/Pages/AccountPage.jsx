import Account from "../Components/Account";
import Cover from "../Components/Coverphoto";
import React from "react";

export default function AccountPage({
  profile,
  username,
  score,
  rank,
  scoreList,
  changeUser,
}) {
  return (
    <div>
      <Cover />
      <Account
        profile={profile}
        username={username}
        score={score}
        rank={rank}
        scoreList={scoreList}
        changeUser={changeUser}
      />
    </div>
  );
}
