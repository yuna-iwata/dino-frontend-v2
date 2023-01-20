import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AvatarSelection from "../../Components/AccountPageSubPages/AvatarSelection";

const itemData = [{ img: "", title: "test" }];
const currentAvatar = 0;
const baseUrl = "../../../public/dino-idle.png";

test("Change Avatar subpage contains choose avatar heading", () => {
  render(<AvatarSelection itemData={itemData} />);
  const selectAvatarHeading = screen.getByRole("heading", {
    name: /Select an avatar/i,
  });
  expect(selectAvatarHeading).toBeInTheDocument();
});

test("Change Avatar sub-page renders a labelled element", () => {
  render(
    <AvatarSelection
      itemData={itemData}
      currentAvatar={currentAvatar}
      baseUrl={baseUrl}
    />
  );
  const avatarLabel = screen.getByLabelText("test");
  expect(avatarLabel).toBeInTheDocument();
});
