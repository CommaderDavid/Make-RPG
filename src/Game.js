import { Player } from "./player.js";
import { Enemy } from "./enemy.js";

export class MainGame {
  constructor(player, enemy) {
    this.player = player;
    this.enemy = enemy;
  }

  playerHit(enemyAttack) {
    this.player.hitPoints -= enemyAttack;
  }

  enemyHit(enemy, playerAttack) {
    if (enemy.hitPoints > 0) {
      enemy.hitPoints -= playerAttack;
      enemy.inCombat = true;
      return enemy;
    } else if (enemy.hitPoints <= 0) {
      // this works on healing the player when the enemy switches
      enemy.inCombat = false;
      enemy.dead = true;
      this.player.hitPoints += this.player.recovery;
      return enemy;
    }
  }
}
