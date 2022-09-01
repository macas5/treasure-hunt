const maze = document.querySelector("#maze-img");
const pirate = document.querySelector('#pirate-img');
const activeKeys = [];
let isRunning = true;

const move = (key) => {
    const top = pirate.offsetTop - 8;
    const left = pirate.offsetLeft - 8;
    switch (key) {
        case 'ArrowRight':
            pirate.style.left = (left + 5) + 'px';
            console.log('move right');
            break;

        case 'ArrowLeft':
            pirate.style.left = (left - 5) + 'px';
            console.log('move left');
            break;

        case 'ArrowUp':
            pirate.style.top = (top - 5) + 'px';
            console.log('move up');
            break;

        case 'ArrowDown':
            pirate.style.top = (top + 5) + 'px';
            console.log('move down');
            break;  
   
        default:
            console.log('invalid move');
            
            break;
    }
}

const keyPress = (e) => {
    move(e.code);
}

document.addEventListener('keydown', (key) => keyPress(key));