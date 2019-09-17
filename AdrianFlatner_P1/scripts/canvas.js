// Initiates the canvas
var canvas = $('canvas').get(0);
var c = canvas.getContext('2d');

// id of animation
var id = null;

// Initiates animation-function on mouseover
$(document).ready(function () {
    $("#canvass").mouseenter(function () {
        animate();
    });
});

// Stops animation at click
$(document).ready(function () {
    $("#canvass").click(function () {
        stopAnimate();
    });
});

// Starting position with text and rectangles for framing
c.beginPath();
c.fillStyle = '#b39bc8';
c.fillRect(0, 0, 20, 20);
c.stroke();

c.beginPath();
c.fillStyle = '#f0ebf4';
c.fillRect(280, 0, 20, 20);
c.stroke();

c.beginPath();
c.fillStyle = '#f172a1';
c.fillRect(280, 130, 20, 20);
c.stroke();

c.beginPath();
c.fillStyle = '#e64398';
c.fillRect(0, 130, 20, 20);
c.stroke();

var colors = [
    "#a1c3d1",
    '#b39bc8',
    '#f0ebf4',
    '#f172a1',
    '#e64398'
];

// Delivers an object with position, speed and boundaries
function Object(x, y, vx, vy, r) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.r = r;
    this.color = colors[Math.floor(Math.random() * colors.length)];

    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.r, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    }

    this.update = function () {
        if (this.x - this.r < 0 || this.x + this.r > canvas.width) {
            this.vx = -this.vx;
        }
        if (this.y - this.r < 0 || this.y + this.r > canvas.height) {
            this.vy = -this.vy;
        }
        this.x += this.vx;
        this.y += this.vy;
        this.draw();
    }
}
// Creates array with objects, random to eachother
var objectArray = [];
for (var i = 0; i < 20; i++) {
    var r = Math.random() * 10;
    var x = Math.random() * (canvas.width - r * 2) + r;
    var y = Math.random() * (canvas.height - r * 2) + r;
    var vx = (Math.random() - 0.5);
    var vy = (Math.random() - 0.5);
    objectArray.push(new Object(x, y, vx, vy, r));
}

// Clears canvas and loops through the objects in the array
function animate() {
    id = requestAnimationFrame(animate);
    for (var i = 0; i < objectArray.length; i++) {
        objectArray[i].update();
    }
}

// Stops animation
function stopAnimate() {
    cancelAnimationFrame(id);
}