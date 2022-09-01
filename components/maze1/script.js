const maze = document.querySelector("#maze-img");
const pirate = document.querySelector('#pirate-img');

const eligibleMove = () => {
    const position = [pirate.offsetLeft, pirate.offsetTop]
    const eligibleMoves = ['up', 'right', 'down', 'left'];

    const indexUp = eligibleMoves.indexOf('up')
    if (position[1] <= 125) eligibleMoves.splice(indexUp, 1);

    const indexRight = eligibleMoves.indexOf('right')
    if (position[0] >= 435) eligibleMoves.splice(indexRight, 1);

    const indexDown = eligibleMoves.indexOf('down')
    if (position[1] >= 425) eligibleMoves.splice(indexDown, 1);

    const indexLeft = eligibleMoves.indexOf('left')
    if (position[0] <= 125) eligibleMoves.splice(indexLeft, 1);
    
    return eligibleMoves;
};


const move = (key) => {
    const top = pirate.offsetTop - 8;
    const left = pirate.offsetLeft - 8;
    console.log(eligibleMove());
    switch (key) {
        case 'ArrowUp':
            if (eligibleMove().includes('up')) pirate.style.top = (top - 5) + 'px';
            else pirate.style.top = top +'px';
            break;

        case 'ArrowRight':
            if (eligibleMove().includes('right')) pirate.style.left = (left + 5) + 'px';
            break;

        case 'ArrowDown':
            if (eligibleMove().includes('down')) pirate.style.top = (top + 5) + 'px';
            break;  

        case 'ArrowLeft':
            if (eligibleMove().includes('left')) pirate.style.left = (left - 5) + 'px';
            break;
   
        default:
            break;
    }
}

const keyPress = (e) => {
    move(e.code);
}

document.addEventListener('keydown', (key) => keyPress(key));