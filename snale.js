const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//建立蛇蛇、蘋果物件    
snake = {
    //身體位置    
    body: [ { x: MAP_SIZE / 2, y: MAP_SIZE / 2 } ],  
    //身體長度    
    size: 5, 
    //行進方向 
    direction: { x: 0, y: -1 }, 
    //畫蛇
    drawSnake: function () {
        this.moveSnake();
ctx.fillStyle='lime';
for (let i=0; i<this.body.length; i++){      
    ctx.fillRect(
    this.body[i].x * BLOCK_SIZE,
    this.body[i].y * BLOCK_SIZE,
    BLOCK_SIZE,
    BLOCK_SIZE
    );
}

    },
    //移動蛇
    moveSnake: function () {
        newBlock = {
    x: this.body[0].x + this.direction.x,
    y: this.body[0].y + this.direction.y
}
this.body.unshift(newBlock);
while (this.body.length > this.size) {

    this.body.pop();
}

    },

 }
apple = { 
    
    //蘋果位置
    x: 5,
    y: 5,
    //畫蘋果
    drawApple: function () {
    },
    //放蘋果
    putApple: function () {
    },
}





