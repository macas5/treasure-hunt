const hiddenTreasure = [
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

const pageReload = () => window.location.reload()
const indexPage = () => window.open('../../index.html', '_self');
document.getElementById("index-page").addEventListener("click", indexPage)
document.getElementById("easy").addEventListener("click", pageReload)
document.getElementById("start-game").addEventListener("click", pageReload)


const message = document.getElementById("congrats");
const closingIcon = document.getElementById("close-icon")
const darkmode = document.getElementsByClassName("darkmode")

closingIcon.addEventListener("click", pageReload)


function pickRandomCoordinates(arr) {
    return  arr[Math.floor(Math.random() * arr.length)];
    }
const target = {
        x: pickRandomCoordinates(hiddenTreasure).x, 
        y: pickRandomCoordinates(hiddenTreasure).y
    };
function calcDistance(event, target) {
        const deltaX=event.offsetX - target.x;
        const deltaY=event.offsetY - target.y;
        return Math.sqrt((deltaX*deltaX) + (deltaY*deltaY))
    };
function getProgressFeedback(distance) { 
        if (distance<12) { return "Auch! Don't burn yourself!"}
        else if(distance < 20) {return "It's hot!"}
        else if(distance < 40) {return "You are getting warmer and warmer!"}
        else if(distance < 80) {return "Warm"}
        else if(distance < 160) {return "Cold"}
        else if(distance < 320) {return "Brrr.. it's so cold!"}
        else {return "It's freezing!"}
    }; 

let clicksCounter=0;
    
$("#map").click(function(event){clicksCounter++;
        const distance=calcDistance(event, target);
        const progress=getProgressFeedback(distance);
        $("#result").text(progress);
        if (distance<10) {
			$("#congrat-msg").text("Congratulations, you found the treasure! Your result is " + clicksCounter + " clicks!");
			message.style.zIndex="2"
		}
     });

$("#hard").click(function(){
        document.getElementById("audio").play();
        const darkBGr = document.getElementById("background")
        darkBGr.setAttribute("src", "https://wallpaperaccess.com/full/3591276.jpg")
        darkBGr.style.opacity = "0.9";
        for (let i=0; i<darkmode.length; i++){
            darkmode[i].style.color = "black";}
        function pickRandomCoordinates(arr) {
            return  arr[Math.floor(Math.random() * arr.length)];
         }
        const target = {
            x: pickRandomCoordinates(hiddenTreasure).x, 
            y: pickRandomCoordinates(hiddenTreasure).y
        };
    
        function calcDistance(event, target) {
            const deltaX=event.offsetX - target.x;
            const deltaY=event.offsetY - target.y;
            return Math.sqrt((deltaX*deltaX) + (deltaY*deltaY))
        };
    
        function getProgressFeedback(distance) { 
            if (distance < 8) { return "Auch! Don't burn yourself!"}
            else if(distance < 10) {return "It's hot!"}
            else if(distance < 20) {return "You are getting warmer and warmer!"}
            else if(distance < 50) {return "Warm"}
            else if(distance < 100) {return "Cold"}
            else if(distance < 200) {return "Brrr.. it's so cold!"}
            else {return "It's freezing!"}
        };
    
        let clicksCounter=0;
    
        $("#map").click(function(event){
            clicksCounter++;
            const distance=calcDistance(event, target);
            const progress=getProgressFeedback(distance);
            $("#result").text(progress);
            if (distance<5) {
				$("#congrat-msg").text("Congratulations, you found the treasure! Your result is " + clicksCounter + " clicks!");
				message.style.zIndex="2";
				
            }
            
         });
        
    }
) 
