// use "debugger" to look for bugs and broken code.
import { MainGame } from "./../src/Game.js";
import { CurrentFighter } from "./../src/currentFighter.js";
import { Player } from "./../src/player.js";
import { Enemy } from "./../src/enemy.js";

describe('MainGame', () => {

  test('should see a player character and enemy', () => {
    const john = new Player(10, 3);
    const cyborg = new Enemy(10, 10);
    let startGame = new MainGame(john, cyborg);

    expect(startGame.player).toEqual(john);
    expect(startGame.enemy).toEqual(cyborg);
  });

  test('player should get hit and lose hp', () => {
    const john = new Player(10, 3);
    const cyborg = new Enemy(10, 10);
    let startGame = new MainGame(john, cyborg);
    const hit = startGame.playerHit(john, cyborg.attack);

    expect(hit.hitPoints).toEqual(0);
  });

  test('enemy should get hit and lose hp', () => {
    const john = new Player(10, 3);
    const cyborg = new Enemy(10, 10);
    let startGame = new MainGame(john, cyborg);
    const hit = startGame.enemyHit(cyborg, john.attack);

    expect(hit.hitPoints).toEqual(7);
  });
});

describe('Player', () => {

  test('should show how hard the player hits and their total hit points', () => {
    const chris = new Player(84, 9);

    expect(chris.hitPoints).toEqual(84);
    expect(chris.attack).toEqual(9);
  });
});

describe('Enemy', () => {

  test('should show enemy health and attack damage', () => {
    const cyborg = new Enemy(108, 20);

    expect(cyborg.hitPoints).toEqual(108);
    expect(cyborg.attack).toEqual(20);
    expect(cyborg.inCombat).toEqual(true);
  });
});

describe('CurrentFighter', () => {

  test('should switch to boss after enemy is defeated', () => {
    const john = new Player(10, 10);
    const cyborg = new Enemy(0, 10);
    let startGame = new MainGame(john, cyborg);

    const hitEnemy = startGame.enemyHit(cyborg, john.attack);

    let killedEnemy = new CurrentFighter(hitEnemy);

    let action = killedEnemy.switchEnemy();

    expect(action).toEqual(true);
  });
});
