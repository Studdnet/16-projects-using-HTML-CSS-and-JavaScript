const numOne = Math.ceil(Math.random() * 10);
const numTwo = Math.ceil(Math.random() * 10);

const questionMultiply = document.getElementById('question');
const formMultiply = document.getElementById('form');
const inputMultiply = document.getElementById('input');
const scoreMultiply = document.getElementById('score');
questionMultiply.innerText = `What is ${numOne} multiply by ${numTwo}?`; 

const correctAnswer = numOne * numTwo;

let score = JSON.parse(localStorage.getItem('score'));

if (!score) {
	score = 0; 
}

scoreMultiply.innerText = `score: ${score}`;

formMultiply.addEventListener('submit', ()=>{
	const userAnswer = +inputMultiply.value;

	if (userAnswer === correctAnswer) {
		score++;
		updateLocalStorage();
	} else {
		score --;
		updateLocalStorage();
	}
});

function updateLocalStorage() {
	localStorage.setItem('score', JSON.stringify(score)); 
}

