let car = {
  speed: 0,
  stability: 0,
  xp: 0
};

function updateUI() {
  document.getElementById("speed").innerText = car.speed;
  document.getElementById("stability").innerText = car.stability;
  document.getElementById("xp").innerText = car.xp;
}

function addPart() {
  car.speed += Math.floor(Math.random() * 5) + 1;
  car.stability += Math.floor(Math.random() * 5) + 1;
  updateUI();
}

function openGift() {
  let rarity = Math.random();

  if (rarity < 0.6) {
    car.speed += 2;
    alert("Common gift 🎁");
  } else if (rarity < 0.9) {
    car.speed += 5;
    alert("Rare gift 🔥");
  } else {
    car.speed += 10;
    alert("Legendary gift 🚀");
  }

  updateUI();
}

let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");

let carX = 50;

function drawCar() {
  ctx.fillStyle = "lime";
  ctx.fillRect(carX, 150, 50, 20);
}

function startRace() {
  carX = 50;
  race();
}

function race() {
  ctx.clearRect(0, 0, 600, 300);

  carX += car.speed * 0.3 + 1;

  drawCar();

  if (carX < 550) {
    requestAnimationFrame(race);
  } else {
    winRace();
  }
}

function winRace() {
  let xpGain = car.speed + car.stability;
  car.xp += xpGain;

  alert("Win! +" + xpGain + " XP 🏁");
  updateUI();
}

updateUI();
