import { mazeWalls } from "./assets/data.js";

const maze = document.querySelector("#maze-img");
const victoryScreen = document.querySelector("#victoryScreen");
const reloadButton = document.querySelector("#reload");
const mainPageButtons = document.querySelectorAll(".mainPage");
const pirate = {
    posX : 1,
    posY : 3,
    element : document.querySelector('#pirate-img')
}

const eligibleMove = (character, walls) => {
    const charRow = "row" + character.posY;
    const charCol = "col" + character.posX;

    const eligibleMoves = [];

    if (walls[charRow][charCol].moveableUp) eligibleMoves.push('up');
    if (walls[charRow][charCol].moveableRight) eligibleMoves.push('right');
    if (walls[charRow][charCol].moveableDown) eligibleMoves.push('down');
    if (walls[charRow][charCol].moveableLeft) eligibleMoves.push('left');

    return eligibleMoves;
};

const move = (key, character, walls) => {
    const characterEl = character.element;

    const top = characterEl.offsetTop;
    const left = characterEl.offsetLeft;
    switch (key) {
        case 'ArrowUp':
            if (eligibleMove(character, walls).includes('up')){
                character.posY -= 1;
                characterEl.style.top = (top - 28) + 'px';
            } 
            break;
            
        case 'ArrowRight':
            if (eligibleMove(character, walls).includes('right')){
                character.posX += 1;
                characterEl.style.left = (left + 28) + 'px';
            }
            break;
                
        case 'ArrowDown':
            if (eligibleMove(character, walls).includes('down')) {
                character.posY += 1;
                characterEl.style.top = (top + 28) + 'px';
            }
            break;  
                    
        case 'ArrowLeft':
            if (eligibleMove(character, walls).includes('left')){
                character.posX -= 1;
                characterEl.style.left = (left - 28) + 'px';
            }
            break;
                        
        default:
            break;
        }
}

const keyPress = (e) => {
    move(e.code, pirate, mazeWalls);

    const charRow = "row" + pirate.posY;
    const charCol = "col" + pirate.posX;
    if (mazeWalls[charRow][charCol].treasure == true) {
        victoryScreen.style.display = 'block';
    }
}

window.onload = () => {
    const mazeCoords = maze.getBoundingClientRect();
    const pirateEl = pirate.element;

    const pirateStartingX = mazeCoords.left + 117;
    const pirateStartingY = mazeCoords.top + 168;

    pirateEl.style.left = pirateStartingX + 'px';
    pirateEl.style.top = pirateStartingY + 'px';
}

const reloadPage = () => {
    location.reload();
}

const mainPage = () => {
    window.open('../../index.html', '_self');
}



document.addEventListener('keydown', (key) => keyPress(key));
reloadButton.addEventListener('click', reloadPage);
mainPageButtons.forEach(button => button.addEventListener('click', mainPage));