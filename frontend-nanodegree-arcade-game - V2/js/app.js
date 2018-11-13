// Enemies the player must avoid
const Enemy = function (x, y) {
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = 120;
    this.startingX = x;
};

// Reset the enemy to its starting position
Enemy.prototype.resetPosition = function () {
    this.x = this.startingX;
}

// Enemy update function
Enemy.prototype.update = function (dt) {
    // Ensure the game runs at the same speed for all computers.
    this.x += this.speed * dt;
    // Reset the enemy's position once it goes off canvas
    if (this.x >= 505) {
        this.resetPosition();
    }
    // For each updated position check for a collision with the player
    this.checkCollision();
};

// Check collision function
Enemy.prototype.checkCollision = function () {
    if (this.x >= player.x - 40 && this.x <= player.x + 40 && this.y >= player.y - 40 && this.y <= player.y + 40) {
        player.resetPosition();
    }
}

// Draw the enemy on the screen
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Player class
const Player = function (x, y) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
};

// Reset player position function
Player.prototype.resetPosition = function () {
    this.x = 200;
    this.y = 400;
};

// Player update function
Player.prototype.update = function () {
    if (this.y === -20) {
        this.resetPosition();
    }
};

// Player render function
Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Player handle input method
Player.prototype.handleInput = function (key) {
    if (key === 'left' && this.x > -20) {
        this.x = this.x - 20;
    } else if (key === 'right' && this.x < 420) {
        this.x = this.x + 20;
    } else if (key === 'up' && this.y > -20) {
        this.y = this.y - 20;
    } else if (key === 'down' && this.y < 420) {
        this.y = this.y + 20;
    }
};

// Instantiate objects
const player1 = new Player(200, 400);
const enemy1 = new Enemy(-110, 60);
const enemy2 = new Enemy(-600, 60);
const enemy3 = new Enemy(-200, 140);
const enemy4 = new Enemy(-700, 140);
const enemy5 = new Enemy(-120, 220);
const enemy6 = new Enemy(-600, 220);

// All enemy objects in an array called allEnemies
let allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6];

// Player object in a variable called player
let player = player1;

// Player.handleInput() method
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


