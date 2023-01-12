import Account from "../Components/Account.jsx";
import Cover from "../Components/Coverphoto.jsx";
import React from "react";

export default function AccountPage({
  profile,
  username,
  score,
  rank,
  scoreList,
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
      />
    </div>
  );
}
