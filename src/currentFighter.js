import { Enemy } from "./enemy.js";

export class CurrentFighter {
  constructor(currentEnemy) {
    this.currentEnemy = currentEnemy;
    // begin work on switching fighters
  }

  switchEnemy() {
    if (this.currentEnemy.dead === true) {
      return this.currentEnemy.dead;
    }
  }
}
