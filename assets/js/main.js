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

const descriptions = [
    "Does the person in question hold 'traditional values' in high regard, or reject the ideas of progressivism?",
    "Modernism here refers to the enlightenment. Does the person reject the Enlightenment or enlightenment values? (ie. equality, democracy, freedom of speech)",
    "Is the person in question an anti-intellectual? For example, will they disregard science from 'biased sources' with no real refutation or have a disdain for intellectual curiosity?",
    "Does this person hold a dogmatic contempt for those who try to refute their baseless or vague claims or refuse to update incorrect positions when presented with evidence?",
    "Does the person in question seek to exploit a fear of others? (ie. migrants, minority groups)",
    "Does the person in question lay down points to engage a middle-class base? (ie. 'they're coming for your small business', 'the working class are trying to usurp you')",
    "Does the person in question focus heavily on a specific narrative, usually that of something bringing down the country/civilisation? (think QAnon, civil wair baiting, etc.)",
    "Do the enemies they present both seem pathetic yet unbelievably powerful? (ie. SJWs are cringy snowflakes but also control our institutions)",
    "Fascism requires a perpetual enemy to fight against and will swap to new ones once others go away. Is there ever triumph or respite when it comes to this person's political struggle?",
    "Does this person consider outsiders to be weaker or inferior to the in-group? (think the dehumanisation of those from other countries or political doctrines)",
    "Does this person prime their audience, indirectly or directly, to give their life to a cause? (figuratively by dedicating free time to cause or literally)",
    "Does this person hold disdain for women and 'the sexually deviant' in comparison to straight men? (or actively rejects their gaining of rights)",
    "Does this person exploit the idea of populism to suit their goals? (ie. caring about worker rights but only when it's against migrants or only caring about gender rights when it comes to family courts)",
    "Does this person use a lot of ideology specific terminology? (think incels with their cavalcade of terms, not people using technical language)"
];

var i;
var qn = 0;
var fasc = [];
var net = [];
var antifa = [];

function displayQuestion() {
    pointsContainer.innerHTML = '"' + points[window.qn] + '"';
    quizContainer.innerHTML = descriptions[window.qn]
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