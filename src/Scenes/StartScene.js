export default class StartScene extends Phaser.Scene {
  constructor() {
    super({ key: 'StartScene' });
  }

  create() {
    //background
    this.background = this.add.image(this.scale.width / 2, this.scale.height / 2, 'cozyBg');
    this.background.setDisplaySize(this.scale.width, this.scale.height);
    this.background.setDepth(0);
    //title
    this.add.text(this.scale.width / 2, 150, 'Santa’s Sleigh Sprint', {
      fontSize: '64px',
      fontFamily: 'Arial',
      fontStyle: 'bold',
      color: '#ffffff',
      stroke: '#000000',
      strokeThickness: 8,
      shadow: {
        offsetX: 2,
        offsetY: 2,
        color: '#222222',
        blur: 3,
        stroke: true,
        fill: true
      },
      align: 'center'
    }).setOrigin(0.5);
    //level text
    const createLevelText = (y, text, sceneKey) => {
      const txt = this.add.text(this.scale.width / 2, y, text, {
        fontSize: '32px',
        fontFamily: 'Arial',
        fontStyle: 'bold',
        color: '#00ff00',
        stroke: '#000000',
        strokeThickness: 5,
        shadow: {
          offsetX: 1,
          offsetY: 1,
          color: '#222222',
          blur: 2,
          stroke: true,
          fill: true
        },
        align: 'center'
      }).setOrigin(0.5).setInteractive();

      txt.on('pointerdown', () => {
        this.scene.start(sceneKey);
      });
    };

    createLevelText(300, 'Level 1', 'GameScene');
    createLevelText(360, 'Level 2', 'GameScene2');
    createLevelText(420, 'Level 3', 'GameScene3');
    //rules text
    const rulesText = this.add.text(this.scale.width / 2, 550, 'Rules & Credits', {
      fontSize: '32px',
      fontFamily: 'Arial',
      fontStyle: 'bold',
      color: '#00ffff',
      stroke: '#000000',
      strokeThickness: 5,
      shadow: {
        offsetX: 1,
        offsetY: 1,
        color: '#222222',
        blur: 2,
        stroke: true,
        fill: true
      },
      align: 'center'
    }).setOrigin(0.5).setInteractive();

    rulesText.on('pointerdown', () => {
      this.scene.start('RulesScene');
    });
  }
}
