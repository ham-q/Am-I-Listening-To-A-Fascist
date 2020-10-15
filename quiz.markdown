---
layout: quiz
permalink: quiz
---

<p id="points" class="font-italic text-default"></p>
<p id="quiz"></p>
<br>
<button class="btn quiz-box btn-dark-green py-3" onclick="nextQuestion('fascist', '1.5')">Strongly True</button>
<br>
<button class="btn quiz-box btn-success py-3" onclick="nextQuestion('fascist', '1')">True</button>
<br>
<button class="btn quiz-box btn-blue-grey py-3" onclick="nextQuestion('neutral', '1')">Neutral</button>
<br>
<button class="btn quiz-box btn-danger py-3" onclick="nextQuestion('antifascist', '1')">False</button>
<br>
<button class="btn quiz-box btn-unique py-3" onclick="nextQuestion('antifascist', '1.5')">Strongly False</button>
<br>
<button id='back' class="btn back-box btn-blue-grey py-3" onclick="previousQuestion()">Back</button>