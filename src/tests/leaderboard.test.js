import App from "../App";
import { render, screen, waitFor } from "@testing-library/react";
import Game from "../scenes/DinoGameScene";
import { fetchGlobalLeaderBoard } from "../Networking";
import * as api from "../Networking";
import LeaderboardPage from "../Pages/LeaderboardPage";
import Leaderboard from "../Components/Leaderboard";

jest.mock("../scenes/DinoGameScene");
jest.mock("../Networking");

beforeEach(() => {
  Game.mockClear();
  const game = new Game();
  game.destroy = jest.fn(() => undefined);
});

// test("leaderboard button exists and contains link to correct page", () => {
//   render(<App />);
//   const LeaderboardButton = screen.getAllByRole("link");
//   expect(LeaderboardButton[1].href).toContain("/leaderboard");
// });

// test("leaderboard page displays the text 'leaderboard'", () => {
//   render(<LeaderboardPage />);
//   const LeaderboardText = screen.getByText(/leaderboard/i);
//   expect(LeaderboardText).toBeInTheDocument();
// });

const apiMockData = [
  {
    name: "test",
    score: 0,
    date: "Thu, 19 Jan 2023 10:48:51 GMT",
    dino_id: 1,
  },
];

describe("api call fetches data", () => {
  beforeEach(() => jest.clearAllMocks());
  it("should render when api responds", async () => {
    fetchGlobalLeaderBoard.mockResolvedValue(apiMockData);
    const value = await fetchGlobalLeaderBoard();
    expect(value[0]["name"]).toBe("test");
  });
});

describe("table renders correct text", () => {
  beforeEach(() => jest.clearAllMocks());
  it("should render when api responds", async () => {
    api.fetchGlobalLeaderBoard.mockResolvedValue(apiMockData);
    // render(<Leaderboard baseUrl=null, itemData/>);
    await waitFor(() => {
      screen.getByText("test");
    });
  });
});
