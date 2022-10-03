'use strict';

const textAreaEl = document.getElementById('textarea'),
	totalCounterEl = document.getElementById('total-counter'),
	remainingCounterEl = document.getElementById('remaining-counter');

textAreaEl.addEventListener('keyup', () => {
	updateCounter();
});

function updateCounter() {
	totalCounterEl.innerText = textAreaEl.value.length;
	remainingCounterEl.innerText = textAreaEl.getAttribute("maxLength") - textAreaEl.value.length;
	if (remainingCounterEl.innerText < 15) {
		remainingCounterEl.style.color = 'red';
	} else {
		remainingCounterEl.style.color = 'rgb(223, 231, 235)';
	}
	
}