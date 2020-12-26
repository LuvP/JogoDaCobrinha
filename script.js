let canvas = document.getElementsById("snake");
let context = canvas.getContext("2d"); //Renderiza o desenho dentro do canvas
let box = 32; //32px cada quadrado(tamanho) 
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";

function criarBG() {
    context.fillStyle = "lightgreen" //Estilo do canvas
    context.fillRect(0, 0, 16 * box, 16 * box) // Desenha o retângulo(onde ocorre o game)
}

function criarCobrinha(){
    for(i = 0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[1].y, box, box);
    }
}

document,addEventListener('Keydown', update);

function update (event){
    if(event.keyCode == 37 && direction != "right") direction ="left";
    if(event.keycode == 38 && diection != "down") direction = "up";
    if(event.keycode == 39 && direction != "left") direction = "right";
    if(event.keycode == 40 && direction != "up") direction = "down"; 
}


function iniciarJogo(){
    if(snale[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction =="up") snake[0].y = 16 * box;
    
    criarBG();
    criarCobrinha();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    snake.pop(); //retira ultimo elemento do arrau

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);