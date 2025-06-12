export default class StartScene extends Phaser.Scene {
  constructor() {
    super({ key: 'StartScene' });
  }

  create() {
    this.add.text(300, 150, 'Santa’s Sleigh Sprint', {
      fontSize: '32px',
      fill: '#fff'
    });

    const level1 = this.add.text(350, 250, 'Level 1', {
      fontSize: '24px',
      fill: '#0f0'
    }).setInteractive();

    const level2 = this.add.text(350, 300, 'Level 2', {
      fontSize: '24px',
      fill: '#0f0'
    }).setInteractive();

    const level3 = this.add.text(350, 350, 'Level 3', {
      fontSize: '24px',
      fill: '#0f0'
    }).setInteractive();

    level1.on('pointerdown', () => {
      this.scene.start('GameScene');
    });

    level2.on('pointerdown', () => {
      this.scene.start('GameScene2');
    });

    level3.on('pointerdown', () => {
      this.scene.start('GameScene3');
    });
    const rulesText = this.add.text(350, 500, 'Rules & Credits', {
      fontSize: '24px',
      fill: '#0ff'
    }).setInteractive();

    rulesText.on('pointerdown', () => {
      this.scene.start('RulesScene');
    });
  }
}
