let clicks = 0;
let diffLevel = 70;
let elem;
const targets = [
  new Target("FOX", 100, 175, "./assets/fox.png"),
  new Target("BEAR", 269, 70, "./assets/bear.png"),
  new Target("TIGER", 326, 411, "./assets/tiger.png"),
  new Target("WOLF", 455, 600, "./assets/wolf.png"),
  new Target("DEER", 87, 263, "./assets/deer.png"),
  new Target("HARE", 169, 111, "./assets/hare.png"),
  new Target("SNAKE", 226, 480, "./assets/snake.png"),
  new Target("LEOPARD", 355, 389, "./assets/leopard.png"),
  new Target("SQUIRREL", 400, 222, "./assets/squirrel.png"),
  new Target("LION", 77, 376, "./assets/lion.png"),
];

function Target(name, x, y, url) {
  this.name = name;
  this.x = x;
  this.y = y;
  this.url = url;
}

function getRandomTarget(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  elem = arr[randomIndex];
  document.getElementById("instruction").innerHTML =
    "Try to find the " + elem.name + " !";
  return elem;
}

const target = getRandomTarget(targets);

let getDistance = function (event, target) {
  const diffX = event.offsetX - target.x;
  const diffY = event.offsetY - target.y;
  return Math.sqrt(diffX * diffX + diffY * diffY);
};

let displaysClue = function (distance) {
  let clickScore = document.getElementById("clickScore");
  clickScore.style.display = "block";
  clickScore.innerHTML = "Your SCORE: " + clicks + "!";
  let hintWindow = document.getElementById("hintWindow");
  if (distance >= 200) {
    hintWindow.innerHTML = "FREEZING!";
  } else if (distance < 200 && distance > 150) {
    hintWindow.innerHTML = "You are COLD!";
  } else if (distance <= 150 && distance > 120) {
    hintWindow.innerHTML = "WARMER!";
  } else if (distance <= 120 && distance > 110) {
    hintWindow.innerHTML = "You are WARM!";
  } else if (distance <= 110 && distance > 100) {
    hintWindow.innerHTML = "Very WARM!";
  } else {
    hintWindow.innerHTML = "HOT!";
  }
};

function enableGame() {
  changeButtonState();
  let treasureMap = document.getElementById("treasureMap");
  treasureMap.addEventListener("click", (event) => {
    clicks++;
    const distance = getDistance(event, target);
    displaysClue(distance);
    if (distance < diffLevel) {
      targetFoundPopUp();
      createAgainButton();
    }
  });
}

function targetFoundPopUp() {
  let foundTarget = document.getElementById("foundTarget");
  foundTarget.style.display = "block";
  let text = document.getElementById("foundTargetText");
  text.innerHTML ="Good Job!" + "<br>" + "You found the " + elem.name + " in " + clicks +" clicks!";
  document.getElementById("popUpImg").src = elem.url;
 }

  const btnReturn = document.createElement("button");
  btnReturn.setAttribute("id", "btnReturn");
  btnReturn.innerHTML = "Main page!";
  document.body.appendChild(btnReturn);
  btnReturn.addEventListener("click", () => (window.location = "../../index.html"));

function createAgainButton() {
  const clueBtns = document.getElementById("clueButtons");
  const btnAgain = document.createElement("button");
  btnAgain.setAttribute("id", "btnAgain");
  btnAgain.innerHTML = "Play again!";
  clueBtns.appendChild(btnAgain);
  btnAgain.addEventListener("click", () => {
    window.location.reload();
  });
}

function removeButtons() {
  btnAgain.remove();
  btnReturn.remove();
}

const difEasy = document.getElementById("easy");
difEasy.addEventListener("click", () => {
  diffLevel = 80;
  enableGame();
});

const difMedium = document.getElementById("medium");
difMedium.addEventListener("click", () => {
  diffLevel = 30;
  enableGame();
});

const difHard = document.getElementById("hard");
difHard.addEventListener("click", () => {
  diffLevel = 10;
  enableGame();
});

function changeButtonState() {
  difEasy.disabled = true;
  difMedium.disabled = true;
  difHard.disabled = true;
}