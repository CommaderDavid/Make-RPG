import { Player } from "./player.js";
import { Enemy } from "./enemy.js";

export class MainGame {
  constructor(player, enemy) {
    this.player = player;
    this.enemy = enemy;
  }

  playerHit(player, enemyAttack) {
    player.hitPoints -= enemyAttack;
    return player;
  }

  enemyHit(enemy, playerAttack) {
    enemy.hitPoints -= playerAttack;
    return enemy;
  }
}
