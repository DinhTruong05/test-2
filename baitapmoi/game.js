const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let car = {
    x: 400,
    y: 500,
    width: 40,
    height: 80,
    speed: 2,
    direction: "up",
    image: new Image()
};
car.image.src = 'car.png';

let obstacles = [];
let rewards = [];
let score = 0;
let gameOver = false;

function generateObstacle() {
    let obs = {
        x: Math.random() * (canvas.width - 40),
        y: -40,
        width: 40,
        height: 40,
        color: 'red'
    };
    obstacles.push(obs);
}

function generateReward() {
    let reward = {
        x: Math.random() * (canvas.width - 30),
        y: -30,
        width: 30,
        height: 30,
        color: 'gold'
    };
    rewards.push(reward);
}

function drawCar() {
    ctx.save();
    ctx.translate(car.x + car.width / 2, car.y + car.height / 2);
    if (car.direction === "left") ctx.rotate(-Math.PI / 2);
    if (car.direction === "right") ctx.rotate(Math.PI / 2);
    if (car.direction === "down") ctx.rotate(Math.PI);
    ctx.drawImage(car.image, -car.width / 2, -car.height / 2, car.width, car.height);
    ctx.restore();
}

function drawObjects(list) {
    list.forEach(obj => {
        ctx.fillStyle = obj.color;
        ctx.fillRect(obj.x, obj.y, obj.width, obj.height);
    });
}

function checkCollision(rect1, rect2) {
    return (
        rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y
    );
}

function update() {
    if (gameOver) return;

    if (car.direction === "up") car.y -= car.speed;
    else if (car.direction === "down") car.y += car.speed;
    else if (car.direction === "left") car.x -= car.speed;
    else if (car.direction === "right") car.x += car.speed;


    car.x = Math.max(0, Math.min(canvas.width - car.width, car.x));
    car.y = Math.max(0, Math.min(canvas.height - car.height, car.y));

    // Update obstacles
    obstacles.forEach(o => o.y += 2);
    rewards.forEach(r => r.y += 1.5);

    // Check collisions
    for (let o of obstacles) {
        if (checkCollision(car, o)) {
            gameOver = true;
            alert("Game Over! Score: " + score);
            return;
        }
    }

    for (let i = rewards.length - 1; i >= 0; i--) {
        if (checkCollision(car, rewards[i])) {
            score++;
            rewards.splice(i, 1);
        }
    }

    // Remove off-screen
    obstacles = obstacles.filter(o => o.y < canvas.height);
    rewards = rewards.filter(r => r.y < canvas.height);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCar();
    drawObjects(obstacles);
    drawObjects(rewards);

    // Draw score
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText("Score: " + score, 10, 20);
}

function loop() {
    update();
    draw();
    if (!gameOver) requestAnimationFrame(loop);
}

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") car.direction = "left";
    if (e.key === "ArrowRight") car.direction = "right";
    if (e.key === "ArrowUp") car.direction = "up";
    if (e.key === "ArrowDown") car.direction = "down";
    if (e.ctrlKey) car.speed = 5;
});

document.addEventListener("keyup", (e) => {
    if (e.key === "Control") car.speed = 2;
});

setInterval(generateObstacle, 1500);
setInterval(generateReward, 3000);

loop();
