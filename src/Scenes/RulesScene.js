export default class RulesScene extends Phaser.Scene {
  constructor() {
    super({ key: 'RulesScene' });
  }

  create() {
    const { width, height } = this.scale;

    // 🖼️ Background
    this.background = this.add.image(width / 2, height / 2, 'rulesBg');
    this.background.setDisplaySize(width, height);
    this.background.setDepth(0);

    // 🏷️ Title
    this.add.text(width / 2, 40, '📜 Rules & Credits', {
      fontSize: '48px',
      fontFamily: 'Arial',
      fontStyle: 'bold',
      color: '#ffffff',
      stroke: '#000000',
      strokeThickness: 8,
      shadow: {
        offsetX: 3,
        offsetY: 3,
        color: '#222222',
        blur: 4,
        stroke: true,
        fill: true
      },
      align: 'center'
    }).setOrigin(0.5);

    // ✍️ Split the rules into left and right columns
    const leftText = `
🎮 CONTROLS:
- Move Up/Down: W / S
- Drop Gift: SPACE

🎯 GOAL:
- Deliver presents by hitting chimneys
- Pick up Reindeers to gain presents
- Avoid missing chimneys — 3 misses = Game Over
- Reach 50 presents to win!

🌠 DESIGN NOTES:
- Gifts are delayed to feel like 
  they’re falling from the sky

`;

    const rightText = `
📈 LEVELS:
- Level 1: Gifts collide after 400px
- Level 2: Collide after 200–300px
  + Drop rate: 2/sec
- Level 3: Collide after 400px
  + No pickups, 1/sec drop rate
- Speed increases with each level

👨‍💻 CREDITS:
- Design: Manvir Sohi
- Music: pixabay.com
- Background: alarmy.com
- Assets: Kenny / Google
`;

    this.add.text(width * 0.15, 120, leftText, {
      fontSize: '18px',
      fontFamily: 'Arial',
      color: '#ffffff',
      stroke: '#000000',
      strokeThickness: 4,
      shadow: {
        offsetX: 2,
        offsetY: 2,
        color: '#222222',
        blur: 3,
        stroke: true,
        fill: true
      },
      align: 'left',
      wordWrap: { width: width * 0.3 }
    });

    this.add.text(width * 0.55, 120, rightText, {
      fontSize: '18px',
      fontFamily: 'Arial',
      color: '#ffffff',
      stroke: '#000000',
      strokeThickness: 4,
      shadow: {
        offsetX: 2,
        offsetY: 2,
        color: '#222222',
        blur: 3,
        stroke: true,
        fill: true
      },
      align: 'left',
      wordWrap: { width: width * 0.3 }
    });

    // 🔙 Back Button
    const backButton = this.add.text(width / 2, height - 60, '← Back to Main Menu', {
      fontSize: '28px',
      fontFamily: 'Arial',
      fontStyle: 'bold',
      color: '#00ff00',
      stroke: '#000000',
      strokeThickness: 5,
      shadow: {
        offsetX: 2,
        offsetY: 2,
        color: '#222222',
        blur: 3,
        stroke: true,
        fill: true
      },
      align: 'center'
    }).setOrigin(0.5).setInteractive();

    backButton.on('pointerdown', () => {
      this.scene.start('StartScene');
    });
  }
}
