/* eslint-disable import/no-unresolved */
import Phaser from 'phaser';

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  init() {
    this.readyCount = 0;
  }

  preload() {
    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x22222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);

    const { width } = this.cameras.main;
    const { height } = this.cameras.main;
    const loadingTxt = this.make.text({
      x: width / 2,
      y: (height / 2) - 50,
      text: 'Loading....',
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    });
    loadingTxt.setOrigin(0.5, 0.5);

    const percentTxt = this.make.text({
      x: width / 2,
      y: (height / 2) - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    percentTxt.setOrigin(0.5, 0.5);

    const assetTxt = this.make.text({
      x: width / 2,
      y: (height / 2) + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    assetTxt.setOrigin(0.5, 0.5);

    this.load.on('progress', (value) => {
      percentTxt.setText(`${parseInt(value * 100, 0)}%`);
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });

    this.load.on('fileProgress', (file) => {
      assetTxt.setText(`Loading asset: ${file.key}`);
    });

    this.load.on('complete', () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingTxt.destroy();
      percentTxt.destroy();
      assetTxt.destroy();
      this.ready();
    });

    this.timeEvent = this.time.delayedCall(5000, this.ready, [], this);

    this.load.image('blueButton1', 'assets/button1.png');
    this.load.image('blueButton2', 'assets/button2.png');
    this.load.image('box', 'assets/sound6.png');
    this.load.image('checkedBox', 'assets/sound3.png');
    this.load.audio('bgMusic', ['assets/sounds/battleTheme.mp3']);

    this.load.image('tree2', 'assets/tree1.png');
    this.load.image('tree1', 'assets/tree0.png');
    this.load.image('alcohol', 'assets/Alcohol.png');
    this.load.image('fight', 'assets/fight.jpg');

    this.load.image('court', 'assets/court.png');

    this.load.spritesheet('player', 'assets/RPG_assets.png', {
      frameWidth: 16,
      frameHeight: 16,
    });

    this.load.spritesheet('player2', 'assets/Fighter.png', {
      frameWidth: 105,
      frameHeight: 100,
    });

    this.load.image('hero1', 'assets/chichu.png');
    this.load.image('hero2', 'assets/chayane.png');
    this.load.image('clefero', 'assets/clefero.png');
    this.load.image('aparapita', 'assets/aparapita.png');
    this.load.image('gurka', 'assets/gurka.png');
    this.load.image('gangman', 'assets/gangman.png');
    this.load.image('master', 'assets/master.png');
  }

  ready() {
    this.scene.start('Title');
    this.readyCount += 1;
    if (this.readyCount === 2) {
      this.scene.start('Title');
    }
  }
}
