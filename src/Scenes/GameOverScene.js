export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameOverScene' });
  }

  init(data) {
    this.score = data.score || 0;
  }

  create() {
    this.add.text(400, 200, 'Game Over', {
      fontSize: '64px',
      fill: '#ff0000',
    }).setOrigin(0.5);

    this.add.text(400, 280, `Score: ${this.score}`, {
      fontSize: '32px',
      fill: '#ffffff',
    }).setOrigin(0.5);

    const mainMenuBtn = this.add.text(400, 360, 'Return to Main Menu', {
      fontSize: '28px',
      fill: '#00ffcc',
    }).setOrigin(0.5).setInteractive();

    mainMenuBtn.on('pointerdown', () => {
      this.scene.start('StartScene'); // 🎯 Go back to StartScene
    });
  }
}
