const resultContainer = document.getElementById('results');
const testContainer = document.getElementById('test');

var fasc = localStorage.getItem("fascistScore").split(",");
var net = localStorage.getItem("neutralScore").split(",");
var antifa = localStorage.getItem("antifascistScore").split(",");

const results = [
    "The person in question, while perhaps not fully a fascist, definitely seems to lean heavily on their side. One need not hit all the points to be one after, as fascism is quite a varied set of beliefs. I'd suggest you be wary of what they have to say and, if possible be critical of any points relating to the points presented in the quiz.",
    "It seems they are in the middle, neither fascist or antifascist (or perhaps holds a mix of the two). While not fascists directly, those who straddle the fence may easily fall into or copy fascist talking points, given their lack of rejection. Be critical of both them and all content creator you consume and what they're putting out there. If it's anything like the 14 points mentioned in the quiz, you'll know what you're dealing with.",
    "Congrats, it seems the person in question is very much to opposite of a fascist. You needn't worry about their takes bringing you further to the ideology, though I'd still suggest you be critical of both them and all content creators you consume to understand what they're feeding you, especially if it's anything close to the 14 points shown in the quiz."
]

function sum(arr) {
    var sum = 0;
    var i = 0;
    while (i<arr.length-1) {
        sum = sum + parseFloat(arr[i]);
        i++;
        console.log(arr[i]);
    }
    return sum;
}

function deduceRestults(fasc, net, antifa) {
    var fascScore = sum(fasc);
    var antifaScore = sum(antifa);
    var totalScore = (fascScore - antifaScore) + 21;
    return totalScore/42;
}

function displayResults(score) {
    if (score > 0.6) {
        var img = document.createElement("img");
        img.src = "assets/images/FascistResult.png";
        testContainer.appendChild(img);
        resultContainer.innerHTML = results[0];
    } else if (score < 0.2) {
        var img = document.createElement("img");
        img.src = "assets/images/AntifaResult.png";
        testContainer.appendChild(img);
        resultContainer.innerHTML = results[2];
    } else {
        var img = document.createElement("img");
        img.src = "assets/images/NeutralResult.png";
        testContainer.appendChild(img);
        resultContainer.innerHTML = results[1];
    }
}

displayResults(deduceRestults(fasc, net, antifa));