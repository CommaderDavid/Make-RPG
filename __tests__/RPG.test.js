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
