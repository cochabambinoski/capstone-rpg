/* eslint-disable no-undef */
import {
  enemySelect, scoreUpdate, powerAssign,
} from './helperMock';

describe('select the enemy according to the current score', () => {
  test('return clefero if score < 50', () => {
    expect(enemySelect(10)).toBe('clefero');
  });

  test('return clefero or gangman if score > 50', () => {
    expect(enemySelect(70)).toBe('gurka');
  });
});

describe('assign the hp and the damage differently', () => {
  test('clefero should have 80 damage', () => {
    expect(powerAssign('clefero')[1]).toBe(80);
  });

  test('master would have hp 200', () => {
    expect(powerAssign('master')[0]).toBe(200);
  });
});

describe('update the score according to the current level', () => {
  test('add 35 point if level1', () => {
    expect(scoreUpdate(20)).toBe(35);
  });

  test('add 100 point if level 3', () => {
    expect(scoreUpdate(210)).toBe(100);
  });
});
