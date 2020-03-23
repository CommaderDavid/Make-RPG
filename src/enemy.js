export class Enemy {
  constructor(hitPoints, attack) {
    this.hitPoints = hitPoints;
    this.attack = attack;
    this.inCombat = true;
    this.dead = false;
  }
}
