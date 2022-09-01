// setting target coordinates for hidden treasure, storing them in an array
let hiddenTreasure = [
    {x : 242, y : 158 },
    {x : 564, y : 293 },
    {x : 89, y : 378 },
    {x : 376, y : 272 },
    {x : 364, y : 379 },
    {x : 106, y : 299 },
    {x : 198, y : 382 },
    {x : 373, y : 371 },
    {x : 513, y : 246 },
    {x : 330, y : 153 },
    {x : 334, y : 97 },
    {x : 377, y : 269 },
] 

function pickRandomCoordinates(arr) {
    let result = arr[Math.floor(Math.random() * arr.length)];
    return result
}

let target = {
    x: pickRandomCoordinates(hiddenTreasure).x, 
    y: pickRandomCoordinates(hiddenTreasure).y
};

console.log(target)
function getDistance(clickEvent, target) {
    let differForX=clickEvent.offsetX - target.x;
    let differForY=clickEvent.offsetY - target.y;
    // console.log(clickEvent.offsetX + " " + clickEvent.offsetY) // --> this allows you to see which potential target coordinates can be used and put them in an array.
    return Math.sqrt((differForX*differForX) + (differForY*differForY))
};

function getProgressHints(distance) { 
    if (distance<12) { return "Boiling hot!"}
    else if(distance < 20) {return "Really hot!"}
    else if(distance < 40) {return "Hot!"}
    else if(distance < 80) {return "Warm"}
    else if(distance < 160) {return "Cold"}
    else if(distance < 320) {return "Really cold"}
    else {return "Freezing!"}
};

let clicks=0;

$("#map").click(function(event){clicks++;
    let distance=getDistance(event, target);
    let distanceHint=getProgressHints(distance);
    $("#distance").text(distanceHint);
    if (distance<10) { alert("Congratulations! You found the treasure in " + clicks + " clicks!")}
 });

function pageReload() {
    window.location.reload()
}
document.querySelector('#easy').onclick = function(){pageReload()}

document.querySelector('#hard').onclick = function(){
    
    document.getElementById("game-rules").innerHTML = "get ready!!!"
    const darkBGr = document.getElementById("background")
    darkBGr.setAttribute("src", "https://wallpaperaccess.com/full/3591276.jpg")
    darkBGr.style.opacity = "0.9"
    let darkmode = document.getElementsByClassName("darkmode")
    for (let i=0; i<darkmode.length; i++){
        darkmode[i].style.color = "black";
        function getProgressHints(distance) { 
            if (distance < 8) { return "Boiling hot!"}
            else if(distance < 10) {return "Really hot!"}
            else if(distance < 20) {return "Hot!"}
            else if(distance < 50) {return "Warm"}
            else if(distance < 100) {return "Cold"}
            else if(distance < 200) {return "Really cold"}
            else {return "Freezing!"}
        };
        let clicks2=0;
        
        $("#map").click(function(event){clicks2++;
            let distance=getDistance(event, target);
            let distanceHint=getProgressHints(distance);
            $("#distance").text(distanceHint);
            if (distance < 5) { alert("Congratulations! You found the treasure in " + clicks2 + " clicks!")}
         });
     
    };

}