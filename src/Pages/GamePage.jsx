import { useEffect } from "react";
import DinoGameScene from "../scenes/DinoGameScene";
import Phaser from "phaser";
import { submitScore } from "../Networking";

export default function Gamepage({ game, setGame, currentUser }) {
  const gameConfig = {
    type: Phaser.AUTO,
    pixelArt: true,
    transparent: true,
    //autoCenter: true,
    parent: "game",
    physics: {
      default: "arcade",
      arcade: {
        debug: true,
      },
    },
    width: 1000,
    height: 300,
    scene: [DinoGameScene],
  };

  console.log(game.key);
  useEffect(() => {
    if (game.key == null) {
      const newGame = new Phaser.Game(gameConfig);
      setGame(newGame);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSendClick = async () => {
    let scene = game.scene.keys.helloworld;
    let handlescore = scene.createScore();
    console.log(handlescore);
    if (handlescore !== 0) {
      const response = await submitScore(handlescore, currentUser);
      console.log(response);
      handlescore = 0;
    }
  };

  return (
    <div>
      <h1> Game Page</h1>
      <button onClick={handleSendClick}>send score to leaderboard</button>
    </div>
  );
}
