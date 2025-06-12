export default class VictoryScene extends Phaser.Scene {
  constructor() {
    super({ key: 'VictoryScene' });
  }

  create() {
    this.add.text(this.scale.width / 2, this.scale.height / 2 - 100, '🎉 Congratulations!', {
      fontSize: '48px',
      fill: '#ffffff',
    }).setOrigin(0.5);

    this.add.text(this.scale.width / 2, this.scale.height / 2 - 40, 'You delivered 50 presents!', {
      fontSize: '28px',
      fill: '#ffffff',
    }).setOrigin(0.5);

    const menuButton = this.add.text(this.scale.width / 2, this.scale.height / 2 + 60, '🏠 Return to Main Menu', {
      fontSize: '26px',
      fill: '#ffcc00',
      backgroundColor: '#333',
      padding: { x: 10, y: 5 },
    })
    .setOrigin(0.5)
    .setInteractive()
    .on('pointerdown', () => {
      this.scene.start('StartScene');
    });
  }
}
