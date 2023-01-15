import { useState, useEffect } from "react";
import HelloWorldScene from "../scenes/HelloWorldScene";
//

export default function Gamepage() {
  const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    pixelArt: true,
    transparent: true,
    //autoCenter: true,
    physics: {
      default: "arcade",
      arcade: {
        debug: true,
      },
    },
    width: 1000,
    height: 300,
    scene: [HelloWorldScene],
  };
  const game = new Phaser.Game(config);

  const [score, setScore] = useState(0);
  let scene = game.scene.keys.helloworld as HelloWorldScene;

  const handleClick = () => {
    scene = game.scene.keys.helloworld as HelloWorldScene;
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
