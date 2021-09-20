export class Enemy {
  constructor(hitPoints, attack) {
    this.hitPoints = hitPoints;
    this.attack = attack;
    this.inCombat = false;
    this.dead = false;
  }
}

function enemyPower(strength) {
  return function (level) {
    return Math.trunc(level * strength);
  }
}

function enemyHitChance(dodge) {
  return function (armorWeight) {
    return Math.trunc(dodge - armorWeight);
  }
}

function enemyTotalHP(armorHealth) {
  return function (hitPoints) {
    return Math.trunc(armorHealth + hitPoints);
  }
}