export default class LoadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'LoadScene' });
  }

  preload() {
    // Sprites
    this.load.image('santa', 'assets/santa.png');
    this.load.image('chimney', 'assets/chimney.png');
    this.load.image('gift', 'assets/gift.png');
    this.load.image('bg', 'assets/bg.jpg');
    this.load.image('spark', 'assets/star_08.png');

    // Audio
    //this.load.audio('jump', 'assets/audio/jump.wav');
    this.load.audio('giftDrop', 'assets/audio/giftlanded.wav');
    this.load.audio('bgMusic', 'assets/audio/bgmusic.mp3');

    // Particles (if used)
    this.load.image('snowflake', 'assets/sprites/Snow.png');
  }

  create() {
    this.scene.start('StartScene'); // Go to main menu after loading
  }
}
