import Account from "../Components/Account";

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
    <Account
      currentAvatar={currentAvatar}
      username={username}
      rank={rank}
      changeUser={changeUser}
      changeProfileAvatar={changeProfileAvatar}
      itemData={itemData}
      baseUrl={baseUrl}
    />
  );
}
