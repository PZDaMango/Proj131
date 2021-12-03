img = "";

function preload() {
    img = loadImage('headphones_and_laptop.jpeg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Laptop", 165, 50);
    noFill();
    stroke("#FF0000");
    rect(150, 20, 340, 200 );
}