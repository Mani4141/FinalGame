export default class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  create() {
    this.physics.world.gravity.y = 0;

    // 🎨 Background — position and size will be set in resize()
    this.bg = this.add.tileSprite(400, 300, 800, 600, 'bg');

    //lanes — will be recalculated in resize()
    this.lanes = [300, 800, 1000];
    this.currentLaneIndex = 1;

    // 🎅 Santa
    this.player = this.physics.add.sprite(100, this.lanes[this.currentLaneIndex], 'santa').setScale(1.2);
    this.player.setCollideWorldBounds(true);
    this.player.body.allowGravity = false;
    this.player.setImmovable(true);

    // ⌨️ Controls
    this.cursors = this.input.keyboard.createCursorKeys();
    this.dropKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this.upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);


    this.giftExplosion = this.add.particles(0,0,'spark', {
    speed: { min: -100, max: 100 },
    scale: { start: 0.5, end: 0 },
    lifespan: 500,
    quantity: 15,
    frequency: -1,
    on: false
    });

    // 🏠 Chimneys
    this.chimneys = this.physics.add.group();

    // 🎁 Gifts
    this.gifts = this.add.group();

    // ✨ Score UI
    this.score = 0;
    this.scoreText = this.add.text(16, 16, 'Presents Delivered: 0', {
      fontSize: '30px',
      fill: '#000000',
    });

    // 🏗️ Chimney Spawner
    this.time.addEvent({
      delay: 2000,
      callback: this.spawnChimney,
      callbackScope: this,
      loop: true,
    });

    // 💥 Collision: Gift in chimney

    // 📦 Rooftop Present Pickups
    this.pickups = this.physics.add.group();

    this.time.addEvent({
      delay: 5000,
      callback: this.spawnPickup,
      callbackScope: this,
      loop: true,
    });

    this.physics.add.overlap(this.player, this.pickups, (player, pickup) => {
      pickup.destroy();
      this.score += 1;
      this.scoreText.setText(`Presents Delivered: ${this.score}`);
    });




    // Listen for resize event
    this.scale.on('resize', this.resize, this);

    // Initial resize call
    this.resize({ width: this.scale.width, height: this.scale.height });
  }

  update() {
    // 🎮 Movement between lanes
    if (Phaser.Input.Keyboard.JustDown(this.upKey)) {
      if (this.currentLaneIndex > 0) {
        this.currentLaneIndex--;
        this.player.y = this.lanes[this.currentLaneIndex];
      }
    }

    if (Phaser.Input.Keyboard.JustDown(this.downKey)) {
      if (this.currentLaneIndex < this.lanes.length - 1) {
        this.currentLaneIndex++;
        this.player.y = this.lanes[this.currentLaneIndex];
      }
    }

    // Background auto-scroll
    this.bg.tilePositionX += 10;

    // 🎁 Drop gift
    if (Phaser.Input.Keyboard.JustDown(this.dropKey)) {
        this.dropGift();
    }

    // Move chimneys left and destroy if off-screen
    this.chimneys.children.iterate(chimney => {
      if (chimney) {
        chimney.x -= 5;
        if (chimney.x < -50) chimney.destroy();
      }
    });
  }

  dropGift() {
  const gift = this.add.sprite(this.player.x, this.player.y, 'gift').setScale(4);
  this.gifts.add(gift);

  const startX = gift.x;
  const targetX = gift.x + 500; // total travel distance
  const targetY = gift.y;

  gift.canCheckCollision = false;
  gift.collided = false;

  this.tweens.add({
    targets: gift,
    x: targetX,
    y: targetY,
    scale: { from: 4, to: 1 },
    duration: 1000,
    onUpdate: () => {
      const traveled = gift.x - startX;

      // Enable collision checking after 200px
      if (traveled > 400) {
        gift.canCheckCollision = true;
      }

      if (gift.canCheckCollision && !gift.collided) {
        this.chimneys.children.iterate(chimney => {
          if (!chimney) return;
          if (
            chimney.active &&
            Phaser.Geom.Intersects.RectangleToRectangle(
              gift.getBounds(),
              chimney.getBounds()
            )
          ) {
            gift.collided = true;
            this.giftExplosion.emitParticleAt(gift.x, gift.y, 5);
            gift.destroy();
            chimney.destroy();
            this.score += 1;
            this.scoreText.setText(`Presents Delivered: ${this.score}`);
          }
        });
      }
    },
    onComplete: () => {
      if (gift.active) {
        gift.destroy();
      }
    }
  });
}

    spawnChimney() {
    const x = this.scale.width + 50; // spawn off right side
    const laneY = Phaser.Utils.Array.GetRandom(this.lanes);
    const chimney = this.physics.add.sprite(x, laneY, 'chimney').setScale(0.1);

    chimney.body.allowGravity = false;
    chimney.setGravityY(0);
    chimney.setVelocityY(0);

    this.chimneys.add(chimney);
  }

  spawnPickup() {
    const x = this.scale.width + 50;
    const pickup = this.physics.add.sprite(x, Phaser.Math.Between(this.lanes[0], this.lanes[this.lanes.length - 1]), 'gift');
    pickup.body.allowGravity = false;
    this.pickups.add(pickup);
  }

  resize(gameSize) {
    const width = gameSize.width;
    const height = gameSize.height;

    // Resize and reposition background
    this.bg.setSize(width, height);
    this.bg.setPosition(width / 2, height / 2);

    // Recalculate lanes based on height (you can adjust these ratios)
    this.lanes = [height * 0.25, height * 0.55, height * 0.85];

    // Update player position to current lane
    this.player.y = this.lanes[this.currentLaneIndex];

    // Keep player near left side with some padding
    this.player.x = width * 0.1;

    // Reposition score UI (top-left corner with some padding)
    this.scoreText.setPosition(16, 16);
  }
}
