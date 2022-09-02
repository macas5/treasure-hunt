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
    btnElement.addEventListener('click', playGame);

    function playGame(e) {
        console.log(e.target);
        const rand = Math.trunc(Math.random() * maps.length)
        const link = maps[rand].link
        location.href = link
    }

}



