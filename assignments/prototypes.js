/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:

*/

/*
function fakeHumanioild (attributes) {

  GameObject
  this.createdAt = attributes.createdAt,
  this.name = attributes.name, 
  this.dimensions = attributes.dimensions

  CharacterStats
  this.healthPoints = charAttributes.healthPoints;

  Humanoid
  this.team = attributes.team;
  this.weapons = attributes.weapons;
  this.language = attributes.language;
}
*/

function GameObject(attributes) {
  this.createdAt = attributes.createdAt,
  this.name = attributes.name, 
  this.dimensions = attributes.dimensions
}

GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game`;
}

const wwww = new GameObject({
  createdAt: new Date(),
  name: 'Rick',
  dimensions: {
    length: 2,
    width: 3,
    height: 4,
  }
})
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

CharacterStats.prototype = Object.create(GameObject.prototype);

function CharacterStats(charAttributes) {
  GameObject.call(this, charAttributes);
  this.healthPoints = charAttributes.healthPoints;
}

CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage`;
}

const www2 = new CharacterStats({
  createdAt: new Date(),
  name: 'notRick',
  dimensions: {
    length: 1,
    width: 1,
    height: 1,
  },
  healthPoints: 5
})
console.log(www2);
console.log(www2.takeDamage());
/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
  function Humanoid(attributes) {
    CharacterStats.call(this, attributes);
    this.team = attributes.team;
    this.weapons = attributes.weapons;
    this.language = attributes.language;
  }

  Humanoid.prototype = Object.create(CharacterStats.prototype);

  Humanoid.prototype.greet = function() {
    return `${this.name} offers a greeting in  ${this.language}`;
  }

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 
function Villain(attributes) {
  Humanoid.call(this, attributes);
  this.catchPhrase = attributes.catchPhrase;
}

Villain.prototype = Object.create(Humanoid.prototype);

Villain.prototype.slashSlash = function(person, damage) {
  //new HP
  let personHP = person.healthPoints-damage;
  // set persons HP
  if (personHP <= 0) {
    return `${this.name} slashes ${person.name} for ${damage} damage. ${person.name} is knocked out.`;
} else {
    person.healthPoints = personHP;
    return `${this.name} slashes ${person.name} for ${damage} damage. ${person.name} has ${personHP} left`;
}
}

Villain.prototype.speak = function () {
  return `${this.name} yells ${this.catchPhrase}`
}

const mrVillain = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ], 
  language: 'Common Tongue',
  catchPhrase: 'up, up, and beyond'
})


function Hero(attributes) {
  Humanoid.call(this, attributes);
  this.catchPhrase = attributes.catchPhrase;
}

Hero.prototype = Object.create(Humanoid.prototype);

Hero.prototype.slashSlash = function(person, damage) {
  //new HP
  let personHP = person.healthPoints-damage;
  // set persons HP
  if (personHP <= 0) {
    return `${this.name} slashes ${person.name} for ${damage} damage. ${person.name} is knocked out.`;
} else {
    person.healthPoints = personHP;
    return `${this.name} slashes ${person.name} for ${damage} damage. ${person.name} has ${personHP} left`;
}
}

Hero.prototype.speak = function () {
  return `${this.name} yells ${this.catchPhrase}`
}

const mrHero = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ], 
  language: 'Common Tongue',
  catchPhrase: 'something goes here'
})


/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ], 
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!