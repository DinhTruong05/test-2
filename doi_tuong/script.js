function Hero(image, top, left, size, speed){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="../pikacry/' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;"  alt="hero"/>';
    }

    this.moveRight = function(){
        if (this.left + this.speed < window.innerWidth - this.size) {
            this.left += this.speed;
        }
    }

    this.moveLeft = function(){
        if (this.left - this.speed >= 0) {
            this.left -= this.speed;
        }
    }

    this.moveUp = function(){
        if (this.top - this.speed >= 0) {
            this.top -= this.speed;
        }
    }

    this.moveDown = function(){
        if (this.top + this.speed < window.innerHeight - this.size) {
            this.top += this.speed;
        }
    }
}

// Thay ảnh nhân vật bằng "mario.png" và tốc độ là 30
let hero = new Hero('mario.jpg', 20, 30, 100, 30);

// Hàm cập nhật nhân vật trên màn hình
function render(){
    document.getElementById('game').innerHTML = hero.getHeroElement();
}

// Bắt sự kiện bàn phím để điều khiển nhân vật
document.addEventListener('keydown', function(event){
    switch(event.key){
        case 'ArrowRight':
            hero.moveRight();
            break;
        case 'ArrowLeft':
            hero.moveLeft();
            break;
        case 'ArrowUp':
            hero.moveUp();
            break;
        case 'ArrowDown':
            hero.moveDown();
            break;
    }
    render();
});

render();
