import Phaser from "phaser";

var player;
var cursors;
var startBox;
var obstacles;
var runGame = false;
var renderTime = 0;
var obstaclesRendered = 0;
var timeBetweenObstacles = 0;
const width = 1000;
const height = 300;
const scale = 0.5;

class MyGame extends Phaser.Scene {
  // constructor() {
  //   super();
  // }

  preload() {
    this.load.setBaseURL("https://chrome-dino-game.s3.amazonaws.com/assets");
    //**********LOAD IMAGES********//
    this.load.image("ground", "ground.png");
    this.load.image("dino-idle", "dino-idle.png");
    //**********LOAD SPRITEs********//
    this.load.spritesheet("dino-run", "dino-run.png", {
      frameWidth: 88,
      frameHeight: 94,
    });
    this.load.spritesheet("dino-duck", "dino-duck.png", {
      frameWidth: 118,
      frameHeight: 94,
    });
    //**********LOAD OBSTACLES********//
    this.load.image("cacti1", "bigcacti-1.png");
    this.load.image("cacti2", "bigcacti-2.png");
    this.load.image("cacti3", "bigcacti-3.png");
    this.load.image("cacti4", "smallcacti-1.png");
    this.load.image("cacti5", "smallcacti-2.png");
    this.load.image("cacti6", "smallcacti-3.png");
    this.load.image("dino-hurt", "dino-hurt.png");
  }

  create() {
    //**********SET UP STATIC OBJECTS********//
    this.speed = 10;
    this.score = 0;

    this.ground = this.add
      .tileSprite(0, height, 100, 26, "ground")
      .setOrigin(0, 1)
      .setScale(scale);

    startBox = this.physics.add
      .sprite(0, height - 200)
      .setOrigin(0, 1)
      .setImmovable();

    player = this.physics.add
      .sprite(0, height, "dino-idle")
      .setOrigin(0, 1)
      .setScale(scale);

    player.setCollideWorldBounds(true);
    player.setGravityY(3000);

    obstacles = this.physics.add.group();
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

    cursors = this.input.keyboard.createCursorKeys();

    //**********SCORE AND GAME OVER********//

    this.displayScore = this.add
      .text(width, 0, "00000", {
        fill: "#535353",
        font: "900 35px Courier",
        resolution: 5,
      })
      .setOrigin(1, 0)
      .setAlpha(0);

    this.highScoreDisplay = this.add
      .text(0, 0, "00000", {
        fill: "#535353",
        font: "900 35px Courier",
        resolution: 5,
      })
      .setOrigin(1, 0)
      .setAlpha(0);

    this.gameOverScreen = this.add
      .container(width / 2, height / 2 - 50)
      .setAlpha(0);
    this.gameOverText = this.add.image(0, 0, "game-over");
    this.restart = this.add.image(0, 80, "restart").setInteractive();
    this.gameOverScreen.add([this.gameOverText, this.restart]);

    //**********START GAME WITH SPACEBAR********//
    // prettier-ignore
    this.physics.add.overlap(startBox, player, () => {
      startBox.disableBody(true,true)
      const expandGround = this.time.addEvent({
        delay: 20,
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
            this.displayScore.setAlpha(1);
            expandGround.remove()
          
          }
        }
      })
   
    }, null, this);

    this.createColliders();
    this.handleScore();
  }

  createColliders() {
    // prettier-ignore
    this.physics.add.collider(player, obstacles, () => {
      this.highScoreDisplay.x = this.displayScore.x - this.displayScore.width - 20;

      const highScore = this.highScoreDisplay.text.substr(this.highScoreDisplay.lenfth - 5);

      const finalScore = Number(this.displayScore.text) > Number(highScore) ? this.displayScore.text : highScore

      this.highScoreDisplay.setText('HI ' + finalScore);
      this.highScoreDisplay.setAlpha(1);

      this.physics.pause();
      this.runGame = false
      this.player.setTexture('dino-hurt')
      this.anims.pauseAll()
      this.gameOverScreen.setAlpha(1);
      this.renderTime = 0;
      this.speed = 10;
      this.score = 0;

    }, null, this);
  }

  renderObstacles() {
    const obstacleNum = Math.floor(Math.random() * 6) + 1;
    let obstacle = obstacles.create(width, height, `cacti${obstacleNum}`);
    obstacle.body.offset.y = 10;
    obstacle.setOrigin(0, 1).setImmovable().setScale(scale);
  }

  handleScore() {
    this.time.addEvent({
      delay: 1000 / 10,
      loop: true,
      callbackScope: this,
      callback: () => {
        if (!this.runGame) {
          return;
        }

        this.score++;
        this.speed += 0.01;

        if (this.score % 100 === 0) {
          this.tweens.add({
            targets: this.displayScore,
            duration: 100,
            repeat: 3,
            alpha: 0,
            yoyo: true,
          });
        }

        const score = Array.from(String(this.score), Number);
        for (let i = 0; i < 5 - String(this.score).length; i++) {
          score.unshift(0);
        }

        this.displayScore.setText(score.join(""));
      },
    });
  }

  keyCommands() {
    if (cursors.down.isDown) {
      player.body.height = 58 * scale;
      player.body.offset.y = 34;
    }
    if (cursors.up.isDown) {
      player.body.height = 92 * scale;
      player.body.offset.y = 0;
    }

    if (player.body.deltaAbsY() > 0) {
      player.anims.stop();
      player.setTexture("dino-run");
    } else {
      if (player.body.height === 92 * scale) {
        player.anims.play("dino-run-anim", true);
      } else {
        player.anims.play("dino-duck-anim", true);
      }
    }
  }

  update(time, delta) {
    if (cursors.space.isDown && player.body.onFloor()) {
      player.body.height = 92 * scale;
      player.body.offset.y = 0;
      player.setVelocityY(-1000);
      console.log("jump");
    }
    //**********START GAME********//
    if (runGame) {
      this.ground.tilePositionX += this.speed;
      //**********OBSTACLES********//
      Phaser.Actions.IncX(obstacles.getChildren(), -this.speed * scale);
      renderTime += delta * this.speed * 0.08;
      console.log(renderTime);
      console.log("time between");
      console.log(timeBetweenObstacles);
      if (renderTime >= 1300 && obstaclesRendered === 0) {
        console.log("first");
        timeBetweenObstacles = Math.floor(Math.random() * 1300) + 500;
        this.renderObstacles();
        obstaclesRendered += 1;
        renderTime = 0;
      } else if (renderTime >= timeBetweenObstacles && obstaclesRendered > 0) {
        this.renderObstacles();
        timeBetweenObstacles = Math.floor(Math.random() * 1300) + 500;
        renderTime = 0;
      }
      this.keyCommands();
    }
  }
}

const config = {
  type: Phaser.AUTO,
  pixelArt: true,
  transparent: true,
  autoCenter: true,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
  width: 1000,
  height: 300,
  scene: MyGame,
};

export default function Game() {
  const game = new Phaser.Game(config);
}
