let stars = parseInt(localStorage.getItem('stars')) || 0;
document.getElementById('stars-count').innerText = stars;

// Get references to the slider and the text element that displays the duration value
const durationSlider = document.getElementById('duration');
const durationValueText = document.getElementById('duration-value');

// Update the duration value display when the slider is moved
durationSlider.addEventListener('input', function() {
  const durationValue = durationSlider.value;  // Get the current value of the slider
  durationValueText.textContent = durationValue;  // Update the displayed value
});

// Elements
const modal = document.getElementById('modal');
const completionModal = document.getElementById('completion-modal');
const openModalBtn = document.getElementById('open-modal');
const closeModalBtn = document.getElementById('close-modal');
const activityForm = document.getElementById('activity-form');
const activityPage = document.querySelector('.activity-page');
const mainPage = document.querySelector('.main-page');
const activityHeader = document.getElementById('activity-header');
const timerDisplay = document.getElementById('timer');
const completeYesBtn = document.getElementById('complete-yes');
const completeNoBtn = document.getElementById('complete-no');

let timerInterval;

// Open Input Modal
openModalBtn.addEventListener('click', () => {
	modal.classList.remove('hidden');
});

// Close Input Modal
closeModalBtn.addEventListener('click', () => {
	modal.classList.add('hidden');
});

// Handle Activity Form Submission
activityForm.addEventListener('submit', function (e) {
	e.preventDefault();
	const activity = document.getElementById('activity').value;
	const duration = parseInt(document.getElementById('duration').value);

	if (!activity || !duration) return;

	startActivity(activity, duration);
	modal.classList.add('hidden');
	mainPage.classList.add('hidden');
	activityPage.classList.remove('hidden');
});

// Start Timer and Activity
function startActivity(activity, duration) {
	activityHeader.textContent = activity;
	let remainingTime = duration * 60; // in seconds

	timerInterval = setInterval(() => {
		console.log(remainingTime)
		if (remainingTime < 0) {
			document.querySelector('.alert').style.display = 'block';
			document.querySelector('.container').style.display = 'none';
		}
		let seconds = remainingTime
		const days = Math.floor(seconds / (24 * 3600));
		seconds %= (24 * 3600);
		const hours = Math.floor(seconds / 3600);
		seconds %= 3600;
		const minutes = Math.floor(seconds / 60);
		seconds %= 60;

		document.querySelector('#days').textContent = days;
		document.querySelector('#hours').textContent = hours;
		document.querySelector('#minutes').textContent = minutes;
		document.querySelector('#seconds').textContent = seconds;
		remainingTime--
		if (remainingTime < 0) {
			clearInterval(timerInterval);
			showCompletionModal();
		}
	}, 1000);
}

// Show Completion Modal
function showCompletionModal() {
	completionModal.classList.remove('hidden');
}

// Handle Completion Modal Buttons
completeYesBtn.addEventListener('click', () => {
	stars++;
	localStorage.setItem('stars', stars);
	resetApp();
});

completeNoBtn.addEventListener('click', () => {
	stars = 0;
	localStorage.setItem('stars', stars);
	resetApp();
});

// Reset App
function resetApp() {
	completionModal.classList.add('hidden');
	mainPage.classList.remove('hidden');
	activityPage.classList.add('hidden');
	document.getElementById('stars-count').innerText = stars;
}