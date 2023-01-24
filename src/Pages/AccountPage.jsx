import Account from "../Components/Account";

export default function AccountPage(props) {
  const { currentAvatar, currentUser, changeUser, changeProfileAvatar, game } =
    props;

  if (game.key !== null) {
    game?.destroy(true);
  }

  return (
    <Account
      currentAvatar={currentAvatar}
      currentUser={currentUser}
      changeUser={changeUser}
      changeProfileAvatar={changeProfileAvatar}
    />
  );
}
