import Account from "../Components/Account.jsx";
import Cover from "../Components/Coverphoto.jsx";
import React from "react";

export default function AccountPage({ rowList }) {
  return (
    <div>
      <Cover />
      <Account />
    </div>
  );
}
