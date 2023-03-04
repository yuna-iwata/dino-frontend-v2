import Phaser from "phaser";
import { GAME_OVER, NEW_GAME } from "./events";
import { gameImages, gameSpriteSheets, gameAudio } from "../data";

let player;
let cursors;
let startBox;
let obstacles;
let hats;
let wearHat;
let readyForBird = 0;
let runGame = false;
let allHatsCollected = false;
let totalNumOfHats = 6;
let renderTime = 0;
let timeForHat = false;
let score = 0;
let hatNum = 0;
let obstaclesRendered = 0;
let timeBetweenObstacles = 0;
const width = window.innerWidth;
const height = 300;
const scale = 0.5;

export default class DinoGameScene extends Phaser.Scene {
  constructor() {
    super("DinoGameScene");
  }

  preload() {
    this.load.setBaseURL("https://chrome-dino-game.s3.amazonaws.com/assets");
    //**********LOAD AUDIO********//
    gameAudio.forEach((asset) => {
      this.load.audio(asset.gameName, `${asset.fileName}.m4a`);
    });
    //**********LOAD IMAGES********//
    gameImages.forEach((asset) => {
      this.load.image(asset.gameName, `${asset.fileName}.png`);
    });
    this.load.image("dino-idle", "dino-idle-formatted.png", {
      frameWidth: 10,
      frameHeight: 10,
    });
    //**********LOAD SPRITEs********//
    gameSpriteSheets.forEach((asset) => {
      this.load.spritesheet(asset.gameName, `${asset.fileName}.png`, {
        frameWidth: asset.frameWidth,
        frameHeight: asset.frameHeight,
      });
    });
    this.load.bitmapFont("myfont", `dino-pixel.png`, `dino-pixel.fnt`);
  }
  create() {
    //**********SET UP STATIC OBJECTS********//
    this.speed = 12;
    score = 0;

    this.ground = this.add
      .tileSprite(0, height, 100, 26, "ground")
      .setOrigin(0, 1)
      .setScale(scale);

    startBox = this.physics.add
      .sprite(0, height - 100, "start-box")
      .setOrigin(0, 1)
      .setImmovable();

    player = this.physics.add
      .sprite(0, height, "dino-idle")
      .setOrigin(0, 1)
      .setScale(scale);

    player.setBodySize(30, 92, false);
    player.setOffset(25);

    player.setCollideWorldBounds(true);
    player.setGravityY(3000);

    obstacles = this.physics.add.group();
    hats = this.physics.add.group();
    this.physics.add.overlap(player, hats, this.collectHat, null, this);

    this.gameOverText = this.add
      .image(width / 2, height / 2, "game-over")
      .setAlpha(0)
      .setScale(0.7);
    this.restart = this.add
      .image(width / 2, height / 2 + 50, "restart")
      .setAlpha(0)
      .setScale(0.6)
      .setInteractive();

    this.clouds = this.add.group();
    this.clouds.addMultiple([
      this.add.image(400, 130, "cloud"),
      this.add.image(600, 100, "cloud"),
      this.add.image(700, 50, "cloud"),
    ]);

    this.clouds.setAlpha(0);

    this.jumpSound = this.sound.add("jump-audio", { volume: 0.2 });
    this.gameOverSound = this.sound.add("hit-audio", { volume: 0.2 });
    this.reachSound = this.sound.add("reach-audio", { volume: 0.2 });
    //**********ANIMATIONS********//

    this.anims.create({
      key: "dino-run-anim",
      frames: this.anims.generateFrameNumbers("dino-run", {
        start: 2,
        end: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "dino-duck-anim",
      frames: this.anims.generateFrameNumbers("dino-duck", {
        start: 0,
        end: 1,
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "dino-baseball-duck-anim",
      frames: this.anims.generateFrameNumbers("dino-baseball-duck", {
        start: 0,
        end: 1,
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "dino-mariachi-duck-anim",
      frames: this.anims.generateFrameNumbers("dino-mariachi-duck", {
        start: 0,
        end: 1,
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "dino-sigma-duck-anim",
      frames: this.anims.generateFrameNumbers("dino-sigma-duck", {
        start: 0,
        end: 1,
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "dino-disco-duck-anim",
      frames: this.anims.generateFrameNumbers("dino-disco-duck", {
        start: 0,
        end: 1,
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "dino-spiderman-duck-anim",
      frames: this.anims.generateFrameNumbers("dino-spiderman-duck", {
        start: 0,
        end: 1,
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "dino-rainbow-duck-anim",
      frames: this.anims.generateFrameNumbers("dino-rainbow-duck", {
        start: 0,
        end: 1,
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "enemy-bird-anim",
      frames: this.anims.generateFrameNumbers("enemy-bird", {
        start: 0,
        end: 1,
      }),
      frameRate: 6,
      repeat: -1,
    });

    cursors = this.input.keyboard.createCursorKeys();

    //**********SCORE********//

    this.displayScore = this.add
      .text(width, 0, "00000", {
        fill: "#535353",
        font: "900 35px Courier",
        resolution: 5,
      })
      .setOrigin(1, 0)
      .setAlpha(0);
    this.displayItemScore = this.add
      .text(width - 120, 6, "items: 0/6", {
        fill: "#535353",
        font: "900 25px Courier",
        resolution: 5,
      })
      .setOrigin(1, 0)
      .setAlpha(0);
    // this.scoreLabel = this.add.bitmapText(50, "myfont", "0", 128);
    this.startGame();
    this.createColliders();
    this.updateScore();
  }

  startGame() {
    //**********START GAME WITH SPACEBAR********//
    // prettier-ignore
    this.physics.add.overlap(startBox, player, () => {
      startBox.disableBody(true,true)
      const expandGround = this.time.addEvent({
        delay: 1,
        loop:true,
        callbackScope: this,
        callback: () => {
          player.anims.play("dino-run-anim", true);
          if(this.ground.width<width/scale){
            if (player.body.deltaAbsY() === 0) {
              this.ground.width += width / 40;
              player.setVelocityX(60)
            }
          } else {
            this.ground.width = width/scale
            runGame = true
            player.setVelocityX(0);
            player.setPosition(92, height)
            this.displayScore.setAlpha(1);
            this.displayItemScore.setAlpha(1);
            expandGround.remove()
          
          }
        }
      })
   
    }, null, this);
  }

  createScore() {
    if (!runGame) {
      return score;
    } else {
      return 0;
    }
  }

  createColliders() {
    this.physics.add.collider(
      player,
      obstacles,
      () => {
        this.physics.pause();
        runGame = false;
        this.anims.pauseAll();
        player.setTexture("dino-hurt");
        renderTime = 0;
        readyForBird = 0;
        this.speed = 12;
        this.gameOverText.setAlpha(1);
        this.game.events.emit(GAME_OVER, score, hatNum);
        this.restart.setAlpha(1);
        const restartGame = () => {
          this.scene.restart();
          hatNum = 0;
          wearHat = null;
          this.anims.resumeAll();
          this.game.events.emit(NEW_GAME);
        };
        this.input.keyboard.on("keydown-SPACE", restartGame);
        this.input.keyboard.on("keydown-ENTER", restartGame);
        this.restart.on("pointerdown", restartGame);
        this.gameOverSound.play();
        if (wearHat) {
          wearHat.setAlpha(0);
        }
      },
      null,
      this
    );
  }

  renderHats() {
    if (hatNum >= totalNumOfHats) {
      hatNum = 0;
    }
    hats
      .create(width, height, `hat-${hatNum + 1}`)
      .setOrigin(0, 1)
      .setImmovable()
      .setScale(scale);
  }

  collectHat(player, hats) {
    hatNum += 1;
    hats.disableBody(true, true);
    if (wearHat) {
      wearHat.setAlpha(0);
    }
    //78
    wearHat = this.physics.add
      .sprite(92, height, `skin-${hatNum}`)
      .setOrigin(0, 1)
      .setScale(scale)
      .setVelocityY(player.body.velocity.y)
      .setY(player.body.y + 46);

    // this.physics.add.collider(wearHat, this.hatGround);
    wearHat.setCollideWorldBounds(true);
    wearHat.setGravityY(3000);
    if (hatNum <= totalNumOfHats && !allHatsCollected) {
      this.displayItemScore.setText(`items: ${hatNum}/6`);
    }
    if (hatNum > totalNumOfHats) {
      hatNum = 1;
      allHatsCollected = true;
    }
  }

  renderObstacles() {
    const obstacleNum = Math.floor(Math.random() * 7) + 1;
    if (obstacleNum === 7 && readyForBird > 10) {
      const birdHeight = [18, 35, 50];
      let obstacle = obstacles
        .create(
          this.game.config.width,
          this.game.config.height - birdHeight[Math.floor(Math.random() * 3)],
          `enemy-bird`
        )
        .setOrigin(0, 1)
        .setScale(scale);
      obstacle.setBodySize(80, 40, true);
      obstacle.anims.play("enemy-bird-anim", 1);
      obstacle.body.height = obstacle.body.height / 1.5;
    } else if (obstacleNum < 7) {
      readyForBird += 1;
      let obstacle = obstacles.create(width, height, `cacti${obstacleNum}`);
      obstacle.body.offset.y = 10;
      obstacle.setOrigin(0, 1).setImmovable().setScale(scale);
    }
  }

  updateScore() {
    this.time.addEvent({
      delay: 1000 / 7,
      loop: true,
      callbackScope: this,
      callback: () => {
        if (runGame) {
          score++;
          this.speed += 0.01;

          if (score % 100 === 0) {
            this.reachSound.play();
            this.tweens.add({
              targets: this.displayScore,
              duration: 100,
              repeat: 3,
              alpha: 0,
              yoyo: true,
            });
          }
        }

        let zeroArray = new Array(5 - String(score).length).fill(0);
        let scoreArray = Array.from(String(score), Number);
        let zeroScoreArray = zeroArray.concat(scoreArray);

        this.displayScore.setText(zeroScoreArray.join(""));
      },
    });
  }

  keyCommands() {
    if (cursors.down.isDown && player.body.velocity.x === 0) {
      player.body.height = 58 * scale;
      player.body.offset.y = 34;
      if (wearHat) {
        wearHat.setAlpha(0);
      }
    }
    if (
      cursors.down.isUp &&
      player.body.height === 58 * scale &&
      player.body.velocity.x === 0
    ) {
      player.body.height = 92 * scale;
      player.body.offset.y = 0;

      if (wearHat) {
        wearHat.setAlpha(1);
      }
    }

    if (player.body.deltaAbsY() > 0) {
      player.anims.stop();
      player.setTexture("dino-run");
    } else {
      if (player.body.height === 92 * scale) {
        player.anims.play("dino-run-anim", true);
      } else {
        if (hatNum === 0) {
          player.anims.play("dino-duck-anim", true);
        } else if (hatNum === 1) {
          wearHat.setAlpha(0);
          player.anims.play("dino-baseball-duck-anim", true);
        } else if (hatNum === 2) {
          wearHat.setAlpha(0);
          player.anims.play("dino-mariachi-duck-anim", true);
        } else if (hatNum === 3) {
          wearHat.setAlpha(0);
          player.anims.play("dino-sigma-duck-anim", true);
        } else if (hatNum === 4) {
          wearHat.setAlpha(0);
          player.anims.play("dino-disco-duck-anim", true);
        } else if (hatNum === 5) {
          wearHat.setAlpha(0);
          player.anims.play("dino-spiderman-duck-anim", true);
        } else if (hatNum === 6) {
          wearHat.setAlpha(0);
          player.anims.play("dino-rainbow-duck-anim", true);
        }
      }
    }
  }

  update(time, delta) {
    if (
      cursors.space.isDown &&
      player.body.onFloor() &&
      player.body.velocity.x === 0
    ) {
      this.jumpSound.play();
      player.body.height = 92 * scale;
      player.body.offset.y = 0;
      player.setVelocityY(-900);
      if (wearHat) {
        wearHat.setVelocityY(-900);
        wearHat.setAlpha(1);
      }
    }
    if (runGame) {
      //**********START GAME********//
      this.clouds.setAlpha(1);
      Phaser.Actions.IncX(this.clouds.getChildren(), -this.speed * scale * 0.5);
      this.clouds.getChildren().forEach((cloud) => {
        if (cloud.getBounds().right < 0) {
          cloud.x = width + 30;
        }
      });
      this.ground.tilePositionX += this.speed;
      //**********OBSTACLES********//
      Phaser.Actions.IncX(obstacles.getChildren(), -this.speed * scale);
      Phaser.Actions.IncX(hats.getChildren(), -this.speed * scale);
      renderTime += delta * this.speed * 0.08;
      if (score > 0 && score % 250 === 0) {
        timeForHat = true;
      }
      if (renderTime >= 500 && obstaclesRendered === 0) {
        timeBetweenObstacles = Math.floor(Math.random() * 1300) + 500;
        this.renderObstacles();
        obstaclesRendered += 1;
        renderTime = 0;
      } else if (renderTime >= timeBetweenObstacles && obstaclesRendered > 0) {
        if (timeForHat) {
          this.renderHats();
          timeForHat = false;
        } else {
          this.renderObstacles();
        }
        timeBetweenObstacles = Math.floor(Math.random() * 1300) + 500;
        renderTime = 0;
      }
      this.keyCommands();
    }
  }
}
