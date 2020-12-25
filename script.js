let canvas = document.getElementsById("snake");
let context = canvas.getContext("2d"); //Renderiza o desenho dentro do canvas
let box = 32; //32px cada quadrado(tamanho) 


function criarBG() {
    context.fillStyle = "lightgreen" //Estilo do canvas
    context.fillRect(0, 0, 16 * box, 16 * box) // Desenha o retângulo(onde ocorre o game)
}

criarBG();