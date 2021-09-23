// use "debugger" to look for bugs and broken code.
import { stateControl, changeState, powerLevel, hitChance, totalHP } from "./../src/character.js";

describe('stateControl', () => {

    test('should populate an enemy instance', () => {
        let newPower = changeState("power")(0)
        let newState = stateControl(newPower)
        expect(newState).toEqual({ power: 0 })
    });

    test('should change enemy instance and give a power level', () => {
        let newPower = changeState("power")(5)
        let level = powerLevel(2)
        let newState = stateControl(newPower)
        expect(level(newState.power)).toEqual(10)
    })

    test('should create a hit chance instance', () => {
        let newDodge = changeState("dodge")(50)
        let weight = hitChance(40)
        let newState = stateControl(newDodge)
        expect(weight(newState.dodge)).toEqual(10)
    })

    test('should create total Hit points', () => {
        let newHitPoints = changeState("hp")(20)
        let armor = totalHP(30)
        let newState = stateControl(newHitPoints)
        expect(armor(newState.hp)).toEqual(50)
    })
})