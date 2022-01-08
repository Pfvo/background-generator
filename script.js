var body = document.querySelector("body");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var codeRgb = document.querySelector(".codeRgb");
var codeHex = document.querySelector(".codeHex");
var btn = document.querySelector("button")
var hexChars = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"]


function changeBg() {
	document.body.style.background = "linear-gradient(to right, "
	+ color1.value + ", "
	+ color2.value
	+ ")";
	codeRgb.textContent = document.body.style.background + ";"
	codeHex.textContent = "linear-gradient(to right, "
	+ color1.value + ", "
	+ color2.value
	+ ");";
};

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function generateHex() {
	var min = 0;
	var max = hexChars.length - 1;
	rndHexColor = [];
	for (i=0; i < 6; i++) {
		rndHexColor.push(hexChars[getRndInteger(min, max)])
	}
	return "#" + rndHexColor.join("");
}

function getRandomColors() {
	color1.value = generateHex();
	color2.value = generateHex();
	changeBg();
}

color1.addEventListener("input", changeBg);
color2.addEventListener("input", changeBg);
btn.addEventListener("click", getRandomColors);