import { useState, useEffect } from "react";
import DinoGameScene from "../scenes/DinoGameScene";

const config: Phaser.Types.Core.GameConfig = {
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
const game = new Phaser.Game(config);

export default function Gamepage() {
  const [score, setScore] = useState(0);
  //let scene = game.scene.keys.helloworld as HelloWorldScene;

  const handleClick = () => {
    let scene = game.scene.keys.helloworld as DinoGameScene;
    const handlescore = scene.createScore();
    console.log(handlescore);
    setScore(handlescore);
  };

  return (
    <div>
      <h1> Game Page</h1>
      <h3>score:{score}</h3>
      <button onClick={handleClick}>get score</button>
    </div>
  );
}
