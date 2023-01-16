import { useState, useEffect } from "react";
import DinoGameScene from "../scenes/DinoGameScene";
import Phaser from "phaser";

export default function Gamepage({ game, setGame }) {
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

  const [score, setScore] = useState(0);

  console.log(game.key);
  useEffect(() => {
    if (game.key == null) {
      const newGame = new Phaser.Game(gameConfig);
      setGame(newGame);
    }
  });

  const handleClick = () => {
    let scene = game.scene.keys.helloworld;
    const handlescore = scene.createScore();
    console.log(handlescore);
    setScore(handlescore);
  };

  return (
    <div>
      <h1> Game Page</h1>
      <h3>score: {score}</h3>
      <button onClick={handleClick}>get score</button>
    </div>
  );
}
