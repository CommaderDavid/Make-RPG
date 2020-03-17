import { Player } from "./player.js";
import { Enemy } from "./enemy.js";

export class MainGame {
  constructor(player, enemy) {
    this.player = player;
    this.enemy = enemy;
  }

  playerHit(player, enemyAttack) {
    player -= enemyAttack;
    console.log("player is hit!");
    return player;
  }

  enemyHit(enemy, playerAttack) {
    enemy -= playerAttack;
    console.log("enemy is Hit!" + enemy);
    return enemy;
  }
}
