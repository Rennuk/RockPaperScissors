const cpuHand = document.querySelector('.cpu-hand');
const handOptions = document.querySelector('.options-container');
const resultContainer = [...document.querySelectorAll('.result-container div')];
const replayGameContainer = document.querySelector('.replay-game-container');
const replayBtn = document.querySelector('.replay-btn');
const compareResults = {
    cpu: [],
    p1: []
}
let gameComplete = false;

const initialiseGame = () => {
    const randomiseHand = Math.floor(Math.random() * 3) + 1;

    compareResults.cpu.push(randomiseHand);
};

const checkSelections = () => {
    const cpuMove = compareResults.cpu[0];
    const playerMove = compareResults.p1[0];

    const outcome = (playerMove - cpuMove + 3) % 3;

    if (outcome === 0) {
        resultContainer[resultContainer.length - 1].classList.add('draw');
    } else if (outcome === 1) {
        resultContainer[0].classList.add('win');
    } else if (outcome === 2) {
        resultContainer[1].classList.add('lose');
    }

    gameComplete = true;
    
    if(gameComplete) {
        replayGameContainer.classList.add('game-end');
    }
};

const resetGame = () => {
    Object.keys(compareResults).forEach( (key) => {
        compareResults[key] = [];
    })

    replayGameContainer.classList.remove('game-end');
    resultContainer.forEach( (elem) => {
        elem.classList = '';
    })

    gameComplete = false

    initialiseGame();
}

initialiseGame();

handOptions.addEventListener('click', (event) => {

    if(event){
        event.stopPropagation();
    }

    const seletion = Number(event.target.id);
    compareResults.p1.push(seletion);

    checkSelections();
});

replayBtn.addEventListener('click', () => { 
    resetGame();
});
