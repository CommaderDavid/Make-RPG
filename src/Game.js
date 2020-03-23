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
    if (enemy.hitPoints > 0) {
      enemy.hitPoints -= playerAttack;
      return enemy;
    } else if (enemy.hitPoints <= 0) {
      enemy.inCombat = false;
      enemy.dead = true;
      return enemy;
    }
  }
}
