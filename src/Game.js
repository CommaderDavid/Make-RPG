import { Player } from "./player.js";
import { Enemy } from "./enemy.js";

export class MainGame {
  constructor(player, enemy) {
    this.player = player;
    this.enemy = enemy;
  }

  playerHit(player, enemyAttack) {
    this.player.hitPoints -= enemyAttack;
    return player;
  }

  playerReset() {
    this.player.hitPoints += this.player.recovery;
    console.log("inside playerReset", this.player.hitPoints);
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
