document.getElementById("btn").onclick = function() {calc()};

function calcGPA(i, j, GK) {
	let score = (i*GK + j*(1-GK))*0.5;
	switch (true) {
		case (score >= 9.5):
			return "A+";
			break;
		case (score >= 8.5):
			return "A";
			break;
		case (score >= 8):
			return "B+";
			break;
		case (score >= 7):
			return "B";
			break;
		case (score >= 6.5):
			return "C+";
			break;
		case (score >= 5.5):
			return "C";
			break;
		case (score >= 5.0):
			return "D+";
			break;
		case (score >= 4.0):
			return "D";
			break;
		default:
			return "F";
			break;
	}
}

function calc() {
	if (document.getElementById("scoreTable") !== null) {
		document.getElementById("scoreTable").remove();
	}
	
	const body = document.body;
	const GK = document.getElementById("GK").value;
	const scoreTable = document.createElement("table");
	scoreTable.setAttribute("id", "scoreTable");
	row = document.createElement("tr");
	val = document.createElement("th");
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
			val = document.createElement("td");
			val.innerHTML = calcGPA(i,j, GK);
			row.appendChild(val);
		}
		scoreTable.appendChild(row);
	}
	
	body.insertBefore(scoreTable, footer);
}