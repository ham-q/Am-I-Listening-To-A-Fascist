const quizContainer = document.getElementById('quiz');
const pointsContainer = document.getElementById('points');

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
for (i = 0; i < points.length; i++) {
    pointsContainer.innerHTML = '"' + points[i] + '"';
    var not_pressed = true;
    while (not_pressed) {
        
    }
}