export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameOverScene' });
  }

  init(data) {
    this.score = data.score || 0;
  }

  create() {
    const { width, height } = this.scale;

    this.background = this.add.image(width / 2, height / 2, 'sadBg');
    this.background.setDisplaySize(width, height);
    this.background.setDepth(0);

    this.add.text(width / 2, 200, 'Game Over', {
      fontSize: '80px',         // Bigger font size
      fill: '#ff0000',
      stroke: '#000000',        // Black outline
      strokeThickness: 6,
      shadow: {                 // Subtle shadow for contrast
        offsetX: 3,
        offsetY: 3,
        color: '#000000',
        blur: 4,
        stroke: true,
        fill: true
      },
      fontStyle: 'bold',
      fontFamily: 'Arial',
      align: 'center',
    }).setOrigin(0.5);

    this.add.text(width / 2, 300, `Score: ${this.score}`, {
      fontSize: '40px',         // Bigger font size
      fill: '#ffffff',
      stroke: '#000000',
      strokeThickness: 4,
      shadow: {
        offsetX: 2,
        offsetY: 2,
        color: '#000000',
        blur: 3,
        stroke: true,
        fill: true
      },
      fontStyle: 'bold',
      fontFamily: 'Arial',
      align: 'center',
    }).setOrigin(0.5);

    const mainMenuBtn = this.add.text(width / 2, 400, 'Return to Main Menu', {
      fontSize: '36px',         // Bigger font size
      fill: '#00ffcc',
      stroke: '#000000',
      strokeThickness: 4,
      shadow: {
        offsetX: 2,
        offsetY: 2,
        color: '#000000',
        blur: 3,
        stroke: true,
        fill: true
      },
      fontStyle: 'bold',
      fontFamily: 'Arial',
      align: 'center',
    }).setOrigin(0.5).setInteractive();

    mainMenuBtn.on('pointerdown', () => {
      this.scene.start('StartScene'); // Go back to StartScene
    });
  }
}
