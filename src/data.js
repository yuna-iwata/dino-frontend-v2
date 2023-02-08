import DinoGameScene from "./game/DinoGameScene";
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
    img: "dino-mariachi.png",
    title: "mariachi dino",
  },
  {
    img: "dino-sigma.png",
    title: "sigma dino",
  },
  {
    img: "dino-disco.png",
    title: "disco dino",
  },
  {
    img: "dino-spiderman.png",
    title: "spiderman dino",
  },
  {
    img: "dino-rainbow.png",
    title: "rainbow dino",
  },
];

const lockedItemData = [
  {
    img: "dino-idle-formatted.png",
    title: "original dino",
  },
  {
    img: "dino-baseball-locked.png",
    title: "baseball dino locked",
  },
  {
    img: "dino-mariachi-locked.png",
    title: "mariachi dino locked",
  },
  {
    img: "dino-sigma-locked.png",
    title: "sigma dino locked",
  },
  {
    img: "dino-disco-locked.png",
    title: "disco dino locked",
  },
  {
    img: "dino-spiderman-locked.png",
    title: "spiderman dino locked",
  },
  {
    img: "dino-rainbow-locked.png",
    title: "rainbow dino locked",
  },
];

const bucketBaseUrl = "https://chrome-dino-game.s3.amazonaws.com/assets/";

export { itemData, lockedItemData, bucketBaseUrl, gameConfig };
