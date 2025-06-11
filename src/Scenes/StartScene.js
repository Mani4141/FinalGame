export default class StartScene extends Phaser.Scene {
  constructor() {
    super({ key: 'StartScene' });
  }

  create() {
    this.add.text(300, 200, 'Santa’s Sleigh Sprint', {
      fontSize: '32px',
      fill: '#fff'
    });

    const playText = this.add.text(350, 300, 'PLAY', {
      fontSize: '24px',
      fill: '#0f0'
    }).setInteractive();

    playText.on('pointerdown', () => {
      this.scene.start('GameScene');
    });

    // Optional: Background music preload
    //this.sound.play('bgMusic', { loop: true, volume: 0.2 });
  }
}
