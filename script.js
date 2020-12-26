let canvas = document.getElementsById("snake");
let context = canvas.getContext("2d"); //Renderiza o desenho dentro do canvas
let box = 32; //32px cada quadrado(tamanho) 
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box

}

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

criarBG();