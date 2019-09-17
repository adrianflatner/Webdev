// Initiates the SVG
var s = $('svg').get(0);

// id of animation
var sId = null;

// Gets width and height of svg
var win = s.getBoundingClientRect();

$(document).ready(function () {
    $("#svgg").mouseenter(function () {
        sAnimate();
    });
});

// Stops animation at click
$(document).ready(function () {
    $("#svgg").click(function () {
        sStopAnimate();
    });
});

var sColors = [
    "#a64ac9",
    '#fccd04',
    '#ffb48f',
    '#f5e6cc',
    '#17e9e0'
];

function sObject(x, y, vx, vy, r) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.r = r;
    this.color = sColors[Math.floor(Math.random() * sColors.length)];

    this.sDraw = function () {
        var c = $(document.createElementNS('http://www.w3.org/2000/svg', 'circle')).get(0);
        c.setAttribute("cx", this.x);
        c.setAttribute("cy", this.y);
        c.setAttribute("r", this.r);
        c.setAttribute("fill", this.color);
        s.appendChild(c);
    }

    this.sUpdate = function () {
        if (this.x + this.r > win.width || this.x - this.r < 0) {
            this.vx = -this.vx;
        }
        if (this.y + this.r > win.height || this.y - this.r < 0) {
            this.vy = -this.vy;
        }
        this.x += this.vx;
        this.y += this.vy;
        this.sDraw();
    }
}

// Creates array with objects, random to eachother
var sObjectArray = [];
for (var i = 0; i < 10; i++) {
    var r = 8;
    var x = Math.random() * (win.width - r * 2) + r;
    var y = Math.random() * (win.height - r * 2) + r;
    var vx = (Math.random() - 0.5);
    var vy = (Math.random() - 0.5);
    sObjectArray.push(new sObject(x, y, vx, vy, r));
}

// Clears canvas and loops through the objects in the array
function sAnimate() {
    sId = requestAnimationFrame(sAnimate);
    for (var i = 0; i < sObjectArray.length; i++) {
        sObjectArray[i].sUpdate();
    }
}

// Stops animation
function sStopAnimate() {
    cancelAnimationFrame(sId);
}