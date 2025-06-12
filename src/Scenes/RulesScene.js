export default class RulesScene extends Phaser.Scene {
  constructor() {
    super({ key: 'RulesScene' });
  }

  create() {
    const { width, height } = this.scale;
    this.background = this.add.image(width / 2, height / 2, 'rulesBg');
    this.background.setDisplaySize(width, height);
    this.background.setDepth(0);

    // Title
    this.add.text(width / 2, 50, '📜 Rules & Credits', {
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

    // Rules Text
    const rulesText = `
🎮 CONTROLS:
- Move Up/Down: W / S
- Drop Gift: SPACE

🎯 GOAL:
- Deliver presents by hitting chimneys
- Pick up Reindeers to get plus 1 present
- Avoid missing chimneys — 3 misses = Game Over
- Reach 50 presents to win!

Level Breakdown:
- First level gifts start colliding after traveling at least 400 pixels
- Second level gifts start colliding after 200 pixels capped at 300 pixels
- also fire rate slowed down to 2 per second
- third level gifts start colliding after 400 pixels capped at 400 pixels plus no reindeers
- also fire rate slowed down to 1 per second
- each level gets progressively faster
- I wanted the gifts to have the feel that they were getting dropped down from the sky to go
- into the chimneys hence the delay for colliding.

👨‍💻 CREDITS:
- Designed by: Manvir Sohi
- Music: bgmusic.mp3
- Sound FX: giftlanded.wav, loseheart.wav
- all sourced from https://pixabay.com/music/search/genre/christmas/
- Background from alarmy.com
- various other assets found on google images or kenny-assets
    `;

    this.add.text(width / 2, 120, rulesText, {
      fontSize: '18px',
      fontFamily: 'Arial',
      color: '#ffffff',
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
      align: 'left',
      wordWrap: { width: width * 0.8 }
    }).setOrigin(0.5, 0);

    // Back Button
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
