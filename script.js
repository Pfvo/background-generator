var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomizer = document.getElementById("randomizer");
var colorArray = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
var randomColor1 = "";
var randomColor2 = "";

function random(r) {
	for (i = 0; i < 6; i++) {
	r = r + colorArray[Math.floor(Math.random() * 15)]
	}
		return r
}

function randomBtn() {
	color1.value = "#" + random(randomColor1);
	color2.value = "#" + random(randomColor2);
	setGradient();
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomizer.addEventListener("click", randomBtn);