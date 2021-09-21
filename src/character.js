const characterState = () => {
  let currentState = {};
  return (stateChangeFunction = stat => stat) => {
    const newState = stateChangeFunction(currentState)
    currentState = { ...newState }
    return newState;
  }
}

export const stateControl = characterState();

export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    });
  }
}

export function powerLevel(strength) {
  return function (level) {
    return Math.trunc(level * strength);
  }
}

export function hitChance(dodge) {
  return function (armorWeight) {
    return Math.trunc(dodge - armorWeight);
  }
}

export function totalHP(armorHealth) {
  return function (hitPoints) {
    return Math.trunc(armorHealth + hitPoints);
  }
}