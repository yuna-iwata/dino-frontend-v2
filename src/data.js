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

const gameImages = [
  {
    gameName: "ground",
    fileName: "ground",
  },
  {
    gameName: "dino-hurt",
    fileName: "dino-hurt",
  },
  {
    gameName: "restart",
    fileName: "restart",
  },
  {
    gameName: "game-over",
    fileName: "game-over",
  },
  {
    gameName: "cloud",
    fileName: "cloud",
  },
  {
    gameName: "hat-1",
    fileName: "baseball-cap",
  },
  {
    gameName: "hat-2",
    fileName: "sombrero",
  },
  {
    gameName: "hat-3",
    fileName: "sigma-hat",
  },
  {
    gameName: "hat-4",
    fileName: "glasses",
  },
  {
    gameName: "hat-5",
    fileName: "spiderman-mask",
  },
  {
    gameName: "hat-6",
    fileName: "rainbow-hat",
  },
  {
    gameName: "skin-1",
    fileName: "dino-baseball-legless",
  },
  {
    gameName: "skin-2",
    fileName: "dino-mariachi-legless",
  },
  {
    gameName: "skin-3",
    fileName: "dino-sigma-legless",
  },
  {
    gameName: "skin-4",
    fileName: "dino-disco-legless",
  },
  {
    gameName: "skin-5",
    fileName: "dino-spiderman-legless",
  },
  {
    gameName: "skin-6",
    fileName: "dino-rainbow-legless",
  },
  {
    gameName: "start-box",
    fileName: "white-box",
  },
  {
    gameName: "cacti1",
    fileName: "bigcacti-1",
  },
  {
    gameName: "cacti2",
    fileName: "bigcacti-2",
  },
  {
    gameName: "cacti3",
    fileName: "bigcacti-3",
  },
  {
    gameName: "cacti4",
    fileName: "smallcacti-1",
  },
  {
    gameName: "cacti5",
    fileName: "smallcacti-2",
  },
  {
    gameName: "cacti6",
    fileName: "smallcacti-3",
  },
];

const gameSpriteSheets = [
  {
    gameName: "enemy-bird",
    fileName: "enemy-bird",
    frameWidth: 92,
    frameHeight: 77,
  },
  {
    gameName: "dino-run",
    fileName: "dino-run",
    frameWidth: 88,
    frameHeight: 94,
  },
  {
    gameName: "dino-duck",
    fileName: "dino-duck",
    frameWidth: 118,
    frameHeight: 94,
  },
  {
    gameName: "dino-baseball-duck",
    fileName: "dino-baseball-duck",
    frameWidth: 118,
    frameHeight: 94,
  },
  {
    gameName: "dino-mariachi-duck",
    fileName: "dino-mariachi-duck",
    frameWidth: 118,
    frameHeight: 94,
  },
  {
    gameName: "dino-sigma-duck",
    fileName: "dino-sigma-duck",
    frameWidth: 118,
    frameHeight: 94,
  },
  {
    gameName: "dino-disco-duck",
    fileName: "dino-disco-duck",
    frameWidth: 118,
    frameHeight: 94,
  },
  {
    gameName: "dino-spiderman-duck",
    fileName: "dino-spiderman-duck",
    frameWidth: 118,
    frameHeight: 94,
  },
  {
    gameName: "dino-rainbow-duck",
    fileName: "dino-rainbow-duck",
    frameWidth: 118,
    frameHeight: 94,
  },
];

const gameAudio = [
  { gameName: "jump-audio", fileName: "jump" },
  { gameName: "hit-audio", fileName: "hit" },
  { gameName: "reach-audio", fileName: "reach" },
];

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

export {
  itemData,
  lockedItemData,
  bucketBaseUrl,
  gameConfig,
  gameImages,
  gameSpriteSheets,
  gameAudio,
};
