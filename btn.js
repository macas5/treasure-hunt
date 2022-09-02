export const btnElement = (maps) => {
    const btnElement = document.createElement('button');
    btnElement.className += 'main-btn'
    btnElement.innerText = "Let's play!"
    document.querySelector('.body-class').appendChild(btnElement)

    // Hover
    btnElement.addEventListener("mouseover", mouseOver);
    btnElement.addEventListener("mouseout", mouseOut);

    function mouseOver() {
        btnElement.style.fontSize = '50px';
        btnElement.style.backgroundColor = '#3990ec98'
    }

    function mouseOut() {
        btnElement.style.fontSize = "2em";
        btnElement.style.backgroundColor = 'rgba(30, 85, 143, 0.598)'
    }

    // Play random game
    btnElement.addEventListener('click', playRandom);
    function playRandom() {
        let randomNumber = Math.trunc(Math.random()*4)
        console.log(randomNumber);
        console.log(maps.length);
        //location.href = 'index.html'
        // parent.open = 'maps[0]'
    }

}
