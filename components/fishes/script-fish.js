$("#lake").ripples({
    resolution: 512,
    dropRadius: 20,
    interactive: true,
    perturbance: 0.02,
});
let screenWidth = $(window).width()
// console.log(screenWidth)

function createRandomCoordinates(size) {return Math.floor(Math.random()*size)}; 
const lakeWidth = screenWidth - 200;
const lakeHeight = 340;
const hiddenSpot = {
    x: createRandomCoordinates(lakeWidth),
    y: createRandomCoordinates(lakeHeight)
}

let clicksCounter = 0;

function calcDistance(clickEvent, hiddenSpot){
    let deltaX=clickEvent.offsetX - hiddenSpot.x;
    let deltaY=clickEvent.offsetY - hiddenSpot.y;
    return Math.sqrt((deltaX*deltaX) + (deltaY*deltaY))
}

function getProgressFeedback(distance){
    if (distance < 15) { return "Hold on! The fish is almost hooked!"}
    else if(distance < 25) {return "You are so, so close!"}
    else if(distance < 40) {return "You are getting warmer!"}
    else if(distance < 80) {return "Warm"}
    else if(distance < 200) {return "Ooops, the fish have swum away!"}
    else {return "There are no fishes near you!"}
}

$("#lake").click(function(event){clicksCounter++;
    const distance=calcDistance(event, hiddenSpot);
    const progress=getProgressFeedback(distance);
    $("#feedback").text(progress);
    if (distance<10) { 
        const message =document.getElementById("congrat-msg");
        message.style.visibility="visible";
        $("#message").text("Congratulations! You caught the fish in " + clicksCounter + " catches!");
        clicksCounter=0;
           
    }
 });

 const pageReload = () => window.location.reload()

 document.getElementById("new-game").addEventListener("click", pageReload)
 document.getElementById("close").addEventListener("click", pageReload)
 const indexPage = () => window.open('../../index.html', '_self');
 document.getElementById("index-page").addEventListener("click", indexPage)
