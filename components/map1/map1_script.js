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
			startConfetti();
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
				startConfetti();
				$("#congrat-msg").text("Congratulations, you found the treasure! Your result is " + clicksCounter + " clicks!");
				message.style.zIndex="2";
				
            }
            
         });
        
    }
) 
//////// -- COPIED CONFETTI SCRIPT -- //////// 

var maxParticleCount = 150; //set max confetti count
var particleSpeed = 2; //set the particle animation speed
var startConfetti; //call to start confetti animation
var stopConfetti; //call to stop adding confetti
var toggleConfetti; //call to start or stop the confetti animation depending on whether it's already running
var removeConfetti; //call to stop the confetti animation and remove all confetti immediately

(function() {
	startConfetti = startConfettiInner;
	stopConfetti = stopConfettiInner;
	toggleConfetti = toggleConfettiInner;
	removeConfetti = removeConfettiInner;
	var colors = ["DodgerBlue", "OliveDrab", "Gold", "Pink", "SlateBlue", "LightBlue", "Violet", "PaleGreen", "SteelBlue", "SandyBrown", "Chocolate", "Crimson"]
	var streamingConfetti = false;
	var animationTimer = null;
	var particles = [];
	var waveAngle = 0;
	
	function resetParticle(particle, width, height) {
		particle.color = colors[(Math.random() * colors.length) | 0];
		particle.x = Math.random() * width;
		particle.y = Math.random() * height - height;
		particle.diameter = Math.random() * 10 + 5;
		particle.tilt = Math.random() * 10 - 10;
		particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
		particle.tiltAngle = 0;
		return particle;
	}

	function startConfettiInner() {
		var width = window.innerWidth;
		var height = window.innerHeight;
		window.requestAnimFrame = (function() {
			return window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.oRequestAnimationFrame ||
				window.msRequestAnimationFrame ||
				function (callback) {
					return window.setTimeout(callback, 16.6666667);
				};
		})();
		var canvas = document.getElementById("confetti-canvas");
		if (canvas === null) {
			canvas = document.createElement("canvas");
			canvas.setAttribute("id", "confetti-canvas");
			canvas.setAttribute("style", "display:block;z-index:999999;pointer-events:none");
			document.body.appendChild(canvas);
			canvas.width = width;
			canvas.height = height;
			window.addEventListener("resize", function() {
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
			}, true);
		}
		var context = canvas.getContext("2d");
		while (particles.length < maxParticleCount)
			particles.push(resetParticle({}, width, height));
		streamingConfetti = true;
		if (animationTimer === null) {
			(function runAnimation() {
				context.clearRect(0, 0, window.innerWidth, window.innerHeight);
				if (particles.length === 0)
					animationTimer = null;
				else {
					updateParticles();
					drawParticles(context);
					animationTimer = requestAnimFrame(runAnimation);
				}
			})();
		}
	}

	function stopConfettiInner() {
		streamingConfetti = false;
	}

	function removeConfettiInner() {
		stopConfetti();
		particles = [];
	}

	function toggleConfettiInner() {
		if (streamingConfetti)
			stopConfettiInner();
		else
			startConfettiInner();
	}

	function drawParticles(context) {
		var particle;
		var x;
		for (var i = 0; i < particles.length; i++) {
			particle = particles[i];
			context.beginPath();
			context.lineWidth = particle.diameter;
			context.strokeStyle = particle.color;
			x = particle.x + particle.tilt;
			context.moveTo(x + particle.diameter / 2, particle.y);
			context.lineTo(x, particle.y + particle.tilt + particle.diameter / 2);
			context.stroke();
		}
	}

	function updateParticles() {
		var width = window.innerWidth;
		var height = window.innerHeight;
		var particle;
		waveAngle += 0.01;
		for (var i = 0; i < particles.length; i++) {
			particle = particles[i];
			if (!streamingConfetti && particle.y < -15)
				particle.y = height + 100;
			else {
				particle.tiltAngle += particle.tiltAngleIncrement;
				particle.x += Math.sin(waveAngle);
				particle.y += (Math.cos(waveAngle) + particle.diameter + particleSpeed) * 0.5;
				particle.tilt = Math.sin(particle.tiltAngle) * 15;
			}
			if (particle.x > width + 20 || particle.x < -20 || particle.y > height) {
				if (streamingConfetti && particles.length <= maxParticleCount)
					resetParticle(particle, width, height);
				else {
					particles.splice(i, 1);
					i--;
				}
			}
		}
	}
})();

