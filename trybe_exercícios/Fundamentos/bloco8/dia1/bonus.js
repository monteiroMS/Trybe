const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const damageMago = () => (
  Math.floor(Math.random() * ((mage.intelligence * 2) - mage.intelligence) + mage.intelligence)
)

const manaSpentMago = () => {
  if (mage.mana < 15) {
    console.log('Mago não possui mana suficiente');
    return 0;
  } else {;
    return 15;
  }
}

const danoMago = () => (
  { dano: damageMago(), manaSpent: manaSpentMago() }
);

const danoGuerreiro = () => (
  Math.floor(Math.random() * ((warrior.weaponDmg * warrior.strength) - warrior.strength)) + warrior.strength
);

const danoDragao = () => (
  Math.floor(Math.random() * (dragon.strength - 15)) + 15
)

const battleMembers = { mage, warrior, dragon };

const gameActions = {
  warriorTurn: (callback) => {
    const danoWarrior = callback();
    dragon.healthPoints -= danoWarrior;
    warrior.damage = danoWarrior;
  },
  mageTurn: (callback) => {
    const danoMage = callback();
    if (danoMage.manaSpent === 0) {
      dragon.healthPoints -= 0;
      mage.damage = 0;
      mage.mana -= 0;
    } else {
      dragon.healthPoints -= danoMage.dano;
      mage.damage = danoMage.dano;
      mage.mana -= danoMage.manaSpent;
    }
  },
  dragonTurn: (callback) => {
    const danoDragon = callback();
    mage.healthPoints -= danoDragon;
    warrior.healthPoints -= danoDragon;
    dragon.damage = danoDragon;
  },
  result: () => console.log(battleMembers),
};

gameActions.warriorTurn(danoGuerreiro);
gameActions.mageTurn(danoMago);
gameActions.dragonTurn(danoDragao);
gameActions.result();