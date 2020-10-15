const quizContainer = document.getElementById('quiz');
const pointsContainer = document.getElementById('points');
const backButton = document.getElementById('back');

const points = [
    "The Cult of Tradition",
    "The Rejection of modernism",
    "The Cult of Action for Action's Sake",
    "Disagreement Is Treason",
    "Fear of Difference",
    "Appeal to a Frustrated Middle Class",
    "Obsession with a Plot",
    "Enemies are at the same time too strong and too weak",
    "Pacifism is Trafficking with the Enemy",
    "Contempt for the Weak",
    "Everybody is Educated to Become a Hero",
    "Machismo",
    "Selective Populism",
    "Newspeak"
];

var i;
var qn = 0;
var fasc = [];
var net = [];
var antifa = [];

function displayQuestion() {
    pointsContainer.innerHTML = '"' + points[window.qn] + '"';
    var text = "";
    text += window.qn + "=window.qn "
    quizContainer.innerHTML = text
    if (window.qn == 0) {
        backButton.disabled = true
    } else {
        backButton.disabled = false
    }
}

function nextQuestion(type, value) {
    if (window.qn == 13) {
        displayResults()
    } else {
        window.qn++
        displayQuestion();
        switch(type) {
            case "fascist":
                window.fasc.push(value);
                window.net.push(0);
                window.antifa.push(0);
                break;
            case "neutral":
                window.fasc.push(0);
                window.net.push(value);
                window.antifa.push(0);
                break;
            case "antifascist":
                window.fasc.push(0);
                window.net.push(0);
                window.antifa.push(value);
        }
    }
}
function previousQuestion() {
    window.fasc.pop()
    window.net.pop()
    window.antifa.pop()
    window.qn--
    displayQuestion();
    }

function displayResults() {
    localStorage.setItem("fascistScore",window.fasc);
    localStorage.setItem("neutralScore",window.net);
    localStorage.setItem("antifascistScore",window.antifa);
    location.href="results";
}

displayQuestion(qn);