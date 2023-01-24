import DinoGameScene from "./scenes/DinoGameScene";
import Phaser from "phaser";

const gameConfig = {
  type: Phaser.AUTO,
  pixelArt: true,
  transparent: true,
  parent: "game",
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
  width: window.innerWidth,
  height: 300,
  scene: [DinoGameScene],
};

const itemData = [
  {
    img: "dino-idle-formatted.png",
    title: "original dino",
  },
  {
    img: "dino-baseball.png",
    title: "baseball dino",
  },
  {
    img: "dino-disco.png",
    title: "disco dino",
  },
  {
    img: "dino-mariachi.png",
    title: "mariachi dino",
  },
  {
    img: "dino-rainbow.png",
    title: "rainbow dino",
  },
  {
    img: "dino-sigma.png",
    title: "sigma dino",
  },
  {
    img: "dino-spiderman.png",
    title: "spiderman dino",
  },
];

const bucketBaseUrl = "https://chrome-dino-game.s3.amazonaws.com/assets/";

export { itemData, bucketBaseUrl, gameConfig };
