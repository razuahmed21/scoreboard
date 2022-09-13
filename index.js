// =====================================HOME
let homeValue = (document.getElementById("h-score").textContent = 0);
let homeValueA = document.getElementById("h-score");

function homeAdd() {
	let prviousScore = document.getElementById("h-score").textContent;
	prviousScore = Number(prviousScore);
	let result = prviousScore + 1;
	homeValueA.textContent = result;
	colorIndicator();
}

function homeAdd2() {
	let prviousScore = document.getElementById("h-score").textContent;
	prviousScore = Number(prviousScore);
	let result = prviousScore + 2;
	homeValueA.textContent = result;
	colorIndicator();
}

function homeAdd3() {
	let prviousScore = document.getElementById("h-score").textContent;
	prviousScore = Number(prviousScore);
	let result = prviousScore + 3;
	homeValueA.textContent = result;
	colorIndicator();
}

// =====================================GUEST

let guestValue = (document.getElementById("g-score").textContent = 0);
let guestValueA = document.getElementById("g-score");

function guestAdd() {
	let prviousScore = document.getElementById("g-score").textContent;
	prviousScore = Number(prviousScore);
	let result = prviousScore + 1;
	guestValueA.textContent = result;
	colorIndicator();
}

function guestAdd2() {
	let prviousScore = document.getElementById("g-score").textContent;
	prviousScore = Number(prviousScore);
	let result = prviousScore + 2;
	guestValueA.textContent = result;
	colorIndicator();
}

function guestAdd3() {
	let prviousScore = document.getElementById("g-score").textContent;
	prviousScore = Number(prviousScore);
	let result = prviousScore + 3;
	guestValueA.textContent = result;
	colorIndicator();
}
// =====================================RESET+INDICATOR

function colorIndicator() {
	let checkHome = document.getElementById("h-score").textContent;
	let checkGuest = document.getElementById("g-score").textContent;
	// let fullTime = document.getElementById("g-score").textContent;
	let checkHomeWin = "Norway Win";
	let checkGuestWin = "Denamrk Win";
	let checkGuestDraw = "Match Draw";

	checkHome = Number(checkHome);
	checkGuest = Number(checkGuest);

	if (checkHome > checkGuest) {
		console.log("left");
		document.getElementById("h-score").style.color = "#05c46b";
		document.getElementById("g-score").style.color = "#f94f6d";
		document.getElementById("fullTime").textContent = `${checkHomeWin} `;
	} else if (checkHome < checkGuest) {
		console.log("right");
		document.getElementById("h-score").style.color = "#f94f6d";
		document.getElementById("g-score").style.color = "#05c46b";
		document.getElementById("fullTime").textContent = `${checkGuestWin} `;
	} else if (checkHome === checkGuest) {
		document.getElementById("h-score").style.color = "#f94f6d";
		document.getElementById("g-score").style.color = "#f94f6d";
		document.getElementById("fullTime").textContent = `${checkGuestDraw} `;
	}
}

function reset() {
	document.getElementById("h-score").textContent = 0;
	document.getElementById("g-score").textContent = 0;
	document.getElementById("h-score").style.color = "#f94f6d";
	document.getElementById("g-score").style.color = "#f94f6d";
	document.getElementById("fullTime").textContent = "Match Draw";
}
