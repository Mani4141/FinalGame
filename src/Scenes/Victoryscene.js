export default class VictoryScene extends Phaser.Scene {
  constructor() {
    super({ key: 'VictoryScene' });
  }

  create() {
    const { width, height } = this.scale;

    this.background = this.add.image(width / 2, height / 2, 'victoryBg');
    this.background.setDisplaySize(width, height);
    this.background.setDepth(0);

    this.add.text(width / 2 - 50, height / 2 - 120, '🎉 Congratulations!', {
      fontSize: '64px',               // Bigger font
      fill: '#ffffff',
      stroke: '#000000',              // Black stroke outline
      strokeThickness: 6,
      shadow: {                      // Subtle shadow
        offsetX: 3,
        offsetY: 3,
        color: '#000000',
        blur: 4,
        stroke: true,
        fill: true,
      },
      fontStyle: 'bold',
      fontFamily: 'Arial',
      align: 'center',
    }).setOrigin(0.5);

    this.add.text(width / 2, height / 2 - 50, 'You delivered 50 presents!', {
      fontSize: '36px',               // Bigger font
      fill: '#ffffff',
      stroke: '#000000',
      strokeThickness: 4,
      shadow: {
        offsetX: 2,
        offsetY: 2,
        color: '#000000',
        blur: 3,
        stroke: true,
        fill: true,
      },
      fontStyle: 'bold',
      fontFamily: 'Arial',
      align: 'center',
    }).setOrigin(0.5);

    const menuButton = this.add.text(width / 2, height / 2 + 60, '🏠 Return to Main Menu', {
      fontSize: '32px',               // Bigger font
      fill: '#ffcc00',
      backgroundColor: '#333',
      padding: { x: 15, y: 8 },       // Slightly more padding for bigger text
      stroke: '#000000',
      strokeThickness: 4,
      shadow: {
        offsetX: 2,
        offsetY: 2,
        color: '#000000',
        blur: 3,
        stroke: true,
        fill: true,
      },
      fontStyle: 'bold',
      fontFamily: 'Arial',
      align: 'center',
    })
    .setOrigin(0.5)
    .setInteractive()
    .on('pointerdown', () => {
      this.scene.start('StartScene');
    });
  }
}
