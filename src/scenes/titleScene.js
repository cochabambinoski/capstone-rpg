/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-unresolved */

import Phaser from 'phaser';
import config from '../config/config';
import Button from '../helpers/button';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  create() {
    this.add.text(110, 60, 'Chichus       Tales', {
      fontSize: '100px', textAlign: 'center', fontFamily: 'Ranchers', fill: '#fff',
    });
    this.add.image(445, 100, 'alcohol');

    this.gameButton = new Button(this, config.width / 2, config.height / 2, 'blueButton1', 'blueButton2', 'Play', 'WorldScene');
    this.optionsButton = new Button(this, config.width / 2, (config.height / 2) + 100, 'blueButton1', 'blueButton2', 'Options', 'Options');
    this.instructionsButton = new Button(this, config.width / 2, (config.height / 2) + 200, 'blueButton1', 'blueButton2', 'Help', 'InstructionsScene');

    this.model = this.sys.game.globals.model;
    if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
      this.bgMusic = this.sound.add('bgMusic', { volume: 0.5, loop: true });
      this.bgMusic.play();
      this.model.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
    }
  }

  centerButton(gameObject, offset = 0) {
    Phaser.Display.Align.In.Center(
      gameObject,
      this.add.zone(
        config.width / 2,
        (config.height / 2) - (offset * 100),
        config.width,
        config.height,
      ),
    );
  }

  centerButtonText(gameText, gameButton) {
    Phaser.Display.Align.In.Center(gameText, gameButton);
  }
}
