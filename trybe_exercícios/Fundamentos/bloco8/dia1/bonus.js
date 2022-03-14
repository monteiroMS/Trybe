const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: () => (
    {
      dano: () => (
        Math.floor(Math.random() * ((mage.intelligence * 2) - mage.intelligence) + mage.intelligence)
      ), 
      manaSpent: () => {
        if (mage.mana < 15) {
          return 'Não possui mana suficiente';
        } else {
          mage.mana -= 15;
        }
      },
    }
  ),
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: () => (
    Math.floor(Math.random() * ((warrior.weaponDmg * warrior.strength) - warrior.strength)) + warrior.strength
  ),
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: () => (
    Math.floor(Math.random() * (dragon.strength - 15)) + 15
  ),
};

const battleMembers = { mage, warrior, dragon };

