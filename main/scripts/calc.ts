const GK: HTMLInputElement = document.getElementById("GK");
document.getElementById("btn").onclick = function() {calc()};
GK.onchange = function() {calc()};

function calcGPA(i, j, GK: number) :HTMLElement {
	let score = (i*GK + j*(1-GK))*0.5;
	let GPA = "";
	switch (true) {
		case (score >= 9.5):
			GPA = "A+";
			break;
		case (score >= 8.5):
			GPA = "A";
			break;
		case (score >= 8):
			GPA = "B+";
			break;
		case (score >= 7):
			GPA = "B";
			break;
		case (score >= 6.5):
			GPA = "C+";
			break;
		case (score >= 5.5):
			GPA = "C";
			break;
		case (score >= 5.0):
			GPA = "D+";
			break;
		case (score >= 4.0):
			GPA = "D";
			break;
		default:
			GPA = "F";
			break;
	}
	let val = document.createElement("td");
	val.innerHTML = GPA;
	return val;
}

function calc() {
	document.getElementById("scoreTable")?.remove();
	
	const body: HTMLElement = document.body;
	const scoreTable: HTMLElement = document.createElement("table");
	scoreTable.setAttribute("id", "scoreTable");
	let row = document.createElement("tr");
	let val = document.createElement("th");
	row.appendChild(val);
	
	for (let i = 6; i < 21; ++i) {
		val = document.createElement("th");
		val.innerHTML = (i*0.5).toFixed(1);
		row.appendChild(val);
	}
	scoreTable.appendChild(row);
	
	for (let i = 6; i < 21; ++i) {
		row = document.createElement("tr");
		val = document.createElement("th");
		val.innerHTML = (i*0.5).toFixed(1);
		row.appendChild(val);
		
		for (let j = 6; j < 21; ++j) {
			row.appendChild(calcGPA(i,j,+GK.value));
		}
		scoreTable.appendChild(row);
	}
	
	body.insertBefore(scoreTable, document.getElementById("footer"));
}