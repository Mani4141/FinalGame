export default class LoadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'LoadScene' });
  }

  preload() {
    // Sprites
    this.load.image('santa', 'assets/santa2.png');
    this.load.image('chimney', 'assets/chimney.png');
    this.load.image('gift', 'assets/gift.png');
    this.load.image('bg', 'assets/bg.jpg');
    this.load.image('spark', 'assets/star_08.png');
    this.load.image('heart', 'assets/heart.webp');
    this.load.image('pickup', 'assets/pickup.png');


    // Audio
    this.load.audio('giftDrop', 'assets/giftlanded.aac');
    this.load.audio('bgMusic', 'assets/bgmusic.mp3');
    this.load.audio('loseheart', 'assets/loseheart.aac');

    // Particles (if used)
    this.load.image('snowflake', 'assets/Snow.png');
  }

  create() {
    this.scene.start('StartScene'); // Go to main menu after loading
  }
}
