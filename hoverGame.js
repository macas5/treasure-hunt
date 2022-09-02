export const hoverGame = () => {
    //const hoverGame = document.querySelectorAll('main-btn');
    document.getElementsByClassName("main-title").addEventListener("mouseover", mouseOver);
    document.getElementsByClassName("main-title").addEventListener("mouseout", mouseOut);

    function mouseOver() {
        document.getElementById("main-title").style.color = 'red';
    }

    function mouseOut() {
        document.getElementById("main-title").style.color = "black";
    }

}
