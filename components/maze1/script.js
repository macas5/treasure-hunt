const mazeImg = document.querySelector("#maze-img");
const activeKeys = [];

const keyPress = (e) => {
    const index = activeKeys.indexOf(e.code);
    if (index == -1) {
        activeKeys.push(e.code);
    }
    console.log(`activeKeys ${activeKeys}`);
}

const keyRelease = (e) => {
    const index = activeKeys.indexOf(e.code);
    if (index !== -1){
        activeKeys.splice(index, 1);
    }
    console.log(`activeKeys ${activeKeys}`);
}

document.addEventListener('keydown', (key) => keyPress(key));
document.addEventListener('keyup', (key) => keyRelease(key));