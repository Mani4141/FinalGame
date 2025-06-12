import LoadScene from './Scenes/LoadScene.js';
import StartScene from './Scenes/StartScene.js';
import GameScene from './Scenes/GameScene.js';
import GameOverScene from './Scenes/GameOverScene.js';
import GameScene2 from './Scenes/GameScene2.js';
import GameScene3 from './Scenes/GameScene3.js';
import VictoryScene from './Scenes/Victoryscene.js';
import RulesScene from './Scenes/RulesScene.js';

const config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: '#000000',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 1000 },
      debug: false
    }
  },
  scene: [LoadScene, StartScene, GameScene, GameScene2, GameScene3, GameOverScene, VictoryScene, RulesScene],
  scale: {
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
};
new Phaser.Game(config);
