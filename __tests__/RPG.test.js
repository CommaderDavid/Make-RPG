// use "debugger" to look for bugs and broken code.
import { MainGame } from "./../src/Game.js";
import { Player } from "./../src/player.js";
import { Enemy } from "./../src/enemy.js";

describe('MainGame', () => {

  test('should see a player character and enemy', () => {
    var startGame = new MainGame("John", "Cyborg");

    expect(startGame.player).toEqual("John");
    expect(startGame.enemy).toEqual("Cyborg");
  });
});

describe('Player', () => {

  test('should show how hard the player hits and their total hit points', () => {
    var chris = new Player(84, 9);

    expect(chris.hitPoints).toEqual(84);
    expect(chris.attack).toEqual(9);
  });
});

describe('Enemy', () => {

  test('should show enemy health and attack damage', () => {
    var cyborg = new Enemy(108, 20);

    expect(cyborg.hitPoints).toEqual(108);
    expect(cyborg.attack).toEqual(20);
  })
})
