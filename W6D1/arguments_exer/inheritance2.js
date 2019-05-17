// Object.create
Function.prototype.inherits = function (parent) {
    this.prototype = Object.create(parent.prototype);
    this.prototype.contructor = this;
}

function MovingObject(color) {
    this.color = color;
}

MovingObject.prototype.moves = function () {
    console.log("zoom");
}

Ship.inherits(MovingObject);
Asteroid.inherits(MovingObject);

function Ship() { }
Ship.prototype.flies = function () {
    console.log("Swishhh");
}

function Asteroid() {
    MovingObject.call(this.color);
}
Asteroid.prototype.blowup = function () {
    console.log("Kaboom");
}

movingObject = new MovingObject("purple");
ship = new Ship("orange");
ast = new Asteroid("red");