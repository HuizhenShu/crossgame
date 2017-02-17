    // Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    var rax = Math.floor(Math.random() * 5);
    var ray = Math.floor(Math.random() * 3 + 1);
    this.x = 101 * rax;
    this.y = 83 * ray;
    this.rad = Math.random();
    this.rate = 200;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks

Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x > -166 && this.x < 505)
    {
        this.x = this.x + dt * (this.rate) * (this.rad);
    }
    var ray = Math.floor(Math.random() * 3 + 1);
    if (this.x < -101 || this.x > 505){
        this.x = -101;
        this.y = 83 * ray;
    };
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(){
    this.sprite = 'images/char-boy.png';
    var rax = Math.floor(Math.random() * 5);
    var ray = Math.floor(Math.random() * 2 + 4);
    this.x = 101 * rax;
    this.y = 83 * ray;
    this.life =3;
    this.rate = 0;
};
Player.prototype.update = function(){
    // this.x = this.x;
    // this.y = this.y;

};
Player.prototype.render=function() {
     ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
Player.prototype.handleInput = function(de){
    switch(de)
    {
    case 'left':
        this.x = this.x - 101;
        this.y = this.y;

        break;
    case 'up':
        this.x = this.x;
        this.y = this.y - 83;
        break;
    case 'right':
        this.x = this.x + 101;
        this.y = this.y;
        break;
    case 'down':
        this.x = this.x;
        this.y = this.y + 83;
        break;
    }
    if (this.x < 0) {
        this.x = 0;
    };
    if (this.x > 404){
        this.x = 404;
    }
    if (this.y < 0) {
        this.y = 0;
    };
    if (this.y > 415) {
        this.y = 415;
    }
}
//add diamond
var Diamond = function(){
    this.diamondImg = [
        'images/Gem Green.png',   
        'images/Gem Blue.png',  
        'images/Gem Orange.png'    
    ]
    var rax = Math.floor(Math.random() * 5);
    var ray = Math.floor(Math.random() * 3 + 1);
    var imgNum = Math.floor(Math.random() * 3);
    this.x = 25+101 * rax;
    this.y = 50+83 * ray;
    this.num = imgNum;
    
}

Diamond.prototype.render = function(){

    ctx.drawImage(Resources.get(this.diamondImg[this.num]), this.x, this.y, 60, 60);
}
Diamond.prototype.new = function (){
    var rax = Math.floor(Math.random() * 5);
    var ray = Math.floor(Math.random() * 3 + 1);
    var imgNum = Math.floor(Math.random() * 3);
    this.x = 25+101 * rax;
    this.y = 50+83 * ray;
    this.num = imgNum;
   ctx.drawImage(Resources.get(this.diamondImg[this.num]), this.x, this.y, 60, 60);
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
//var allEnemies = Enemy;

var Enemies = new Array();
for (var i = 0 ; i < 20; i++){
    var enemy = new Enemy();
    //console.log(enemy.x)
    Enemies.push(enemy);
}
var allEnemies = Enemies.slice(0,5);

var Player = new Player();
var Diamond = new Diamond();
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    Player.handleInput(allowedKeys[e.keyCode]);
});
