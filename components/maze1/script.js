const maze = document.querySelector("#maze-img");
const pirate = document.querySelector('#pirate-img');

const move = (key) => {
    const top = pirate.offsetTop - 8;
    const left = pirate.offsetLeft - 8;
    switch (key) {
        case 'ArrowRight':
            pirate.style.left = (left + 5) + 'px';
            break;

        case 'ArrowLeft':
            pirate.style.left = (left - 5) + 'px';
            break;

        case 'ArrowUp':
            pirate.style.top = (top - 5) + 'px';
            break;

        case 'ArrowDown':
            pirate.style.top = (top + 5) + 'px';
            break;  
   
        default:
            break;
    }
}

const keyPress = (e) => {
    move(e.code);
}

document.addEventListener('keydown', (key) => keyPress(key));