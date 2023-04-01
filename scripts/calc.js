var GK = document.getElementById("GK");
document.getElementById("btn").onclick = function () { calc(); };
GK.onchange = function () { calc(); };
function calcGPA(i, j, GK) {
    var score = (i * GK + j * (1 - GK)) * 0.5;
    var GPA = "";
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
    var val = document.createElement("td");
    val.innerHTML = GPA;
    return val;
}
function calc() {
    var _a;
    (_a = document.getElementById("scoreTable")) === null || _a === void 0 ? void 0 : _a.remove();
    var body = document.body;
    var scoreTable = document.createElement("table");
    scoreTable.setAttribute("id", "scoreTable");
    var row = document.createElement("tr");
    var val = document.createElement("th");
    row.appendChild(val);
    for (var i = 6; i < 21; ++i) {
        val = document.createElement("th");
        val.innerHTML = (i * 0.5).toFixed(1);
        row.appendChild(val);
    }
    scoreTable.appendChild(row);
    for (var i = 6; i < 21; ++i) {
        row = document.createElement("tr");
        val = document.createElement("th");
        val.innerHTML = (i * 0.5).toFixed(1);
        row.appendChild(val);
        for (var j = 6; j < 21; ++j) {
            row.appendChild(calcGPA(i, j, +GK.value));
        }
        scoreTable.appendChild(row);
    }
    body.insertBefore(scoreTable, document.getElementById("footer"));
}
