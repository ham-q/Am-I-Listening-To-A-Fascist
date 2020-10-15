const resultContainer = document.getElementById('results');
const testContainer = document.getElementById('test');

var fasc = localStorage.getItem("fascistScore").split(",");
var net = localStorage.getItem("neutralScore").split(",");
var antifa = localStorage.getItem("antifascistScore").split(",");

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
        resultContainer.innerHTML = "fascist lol";
    } else if (score < 0.2) {
        var img = document.createElement("img");
        img.src = "assets/images/AntifaResult.png";
        testContainer.appendChild(img);
        resultContainer.innerHTML = "antifa freddy";
    } else {
        var img = document.createElement("img");
        img.src = "assets/images/NeutralResult.png";
        testContainer.appendChild(img);
        resultContainer.innerHTML = "neutral lmaooo";
    }
}

displayResults(deduceRestults(fasc, net, antifa));