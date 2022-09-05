export const headerElement = () => {

    const headerElement = document.createElement('h1');
    headerElement.className += 'main-title'
    headerElement.innerText = "Treasure Hunters"
    document.querySelector('.body-class').appendChild(headerElement)
    // Movements
    gsap.from('.main-title', {
        duration: 1, x: '100%'
    })
    // Hover
    headerElement.addEventListener("mouseover", mouseOver);
    headerElement.addEventListener("mouseout", mouseOut);

    function mouseOver() {
     headerElement.style.fontSize = '50px';
    }

    function mouseOut() {
        headerElement.style.fontSize = "2em";
    }
}


