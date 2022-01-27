let order = [];
let orderCliques = [];
let scored = 0;

const blue = document.querySelector('.blue');
const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    orderCliques = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

let lightColor = (element, number) => {
    number = number * 500;
    setTimeout( () => {
        element.classList.add('selected');
    }, number -250);

    setTimeout( () => {
        element.classList.remove('selected');
    });
    
}

let checkOrder = () => {
    for(let i in orderCliques) {
        if(orderCliques[i] != order[i])
        gameOver();
        break;
    }

    if(orderCliques.length == order.length) {
        alert(`Score: ${scored}\n Você Acertou! Iniciando próxima fase!`);
        nextLevel(); 
    }

}

let click = (color) => {
    orderCliques[orderCliques.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },500)
    
}

let createColorElement = (color) => {
    if(color == 0){
        return green;
    } else if(color == 1){
        return red;
    } else if(color == 2){
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

//passar fase

let nextLevel = () => {
    scored++;
    shuffleOrder();
}

//game over
let gameOver = () => {
    alert(`Pontuação: ${scored}!\nGame Over! Clique para reiniciar`);
    order = [];
    orderCliques = [];

    playGame();
}

let playGame = () => {
    alert('Bem vindo ao nosso jogo! Nova partida inciando');
    scored = 0; 

    nextLevel();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();