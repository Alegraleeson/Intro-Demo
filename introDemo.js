let harryAttack = 25;
let lordVAttack = 35;

if(harryAttack > lordVAttack){
    console.log("Harry has a better attack than Lord V");
} else if (lordVAttack > harryAttack) {
    console.log("Lord V has a better attack than Harry")
} else {
    console.log("Harry and Lord V have the same attack")
}

let harryHealth = 100;
let harryDefense = 0;
let lordVHealth = 1;
let lordVDefense = 1;

console.log('Lord V Attacks Harry ---> "Avra kadavra"')
if (harryHealth <= lordVAttack){
    console.log("Harry has been slain")
} else {
    harryHealth -= lordVAttack;
    console.log(`Harry's health is down ${lordVAttack} to ${harryHealth}`)
}

harryDefense += 25;

if(harryHealth <= (lordVAttack-harryDefense)){
    console.log("Harry has been slain!")
} else {
    harryHealth -= (lordVAttack - harryDefense)
    console.log(`Harry's health is down ${harryHealth}`)
}

let healthKit = 50;

if((harryHealth + healthKit) >= 100){
    harryHealth = 100;
} else {
    harryHealth += healthKit;
}
console.log(`Harry got some help.  Health is now ${harryHealth}`)

let coinTossHeads = false;

if (coinTossHeads !==false){
    console.log("The fight continues");
} else {
    console.log("Harry is allowed to run away.")
}

class Fighter {
    constructor(name, attack, health, defense) {
      this.name = name;
      this.attack = attack;
      this.health = health;
      this.defense = defense;
    }
}

let harry = new Fighter ("Harry", harryAttack, harryHealth, harryDefense);
let lordV = new Fighter ("Lord V", lordVAttack, lordVHealth, lordVDefense);

console.log(harry.attack)

// for( let i=0; i<=10; i++){
//     if(harry.health <= 0) {
//         console.log("Harry has been slain")
//     } else {
//         harry.health -= (lordV.attack - harry.defense)
//     console.log(`Harry's health is ${harry.health}`)
//     }
    
// }

while(harryHealth > 0){
    harryHealth -= (lordV.attack - harry.defense)
    console.log(`Harry's health is ${harry.health}`);

    if(harry.health <= 0){
        console.log("Harry has been slain")
    }
}
