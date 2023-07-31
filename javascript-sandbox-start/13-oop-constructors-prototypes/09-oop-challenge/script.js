function Player(name){
  this.name = name;
  this.points = 0;
  this.lvl = 1;
}

Player.prototype.gainXp = (xp) =>{
  Player.call(this, points);
  this.points + xp;
}

Player.prototype.describe = () =>{
  console.log(`
  Player Name: ${this.name} \n
  Player XP: ${this.points} \n
  Player Level: ${this.lvl} \n
  `);
}




//leave off at 2:21


let player1 = new Player('Bob');
let player2 = new Player('Alice');

player1.gainXp(5);
player2.gainXp(7);
player1.gainXp(3);
player2.gainXp(2);
player1.gainXp(8);
player2.gainXp(4);

console.log(player1.describe()); // Bob is level 2 with 6 experience points
console.log(player2.describe()); // Alice is level 2 with 3 experience points
