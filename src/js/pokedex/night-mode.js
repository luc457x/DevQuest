document.addEventListener('DOMContentLoaded', function () {
	function applyNightMode(isDayMode) {
		const toggleButton = document.getElementById('toggle-button');
		const toggleImage = toggleButton.querySelector('img');

		if (isDayMode) {
			document.body.classList.remove('night-mode');
			document.body.classList.add('day-mode');
			if (toggleImage) {
				toggleImage.src = './src/img/pokedex/day.png';
				toggleImage.alt = 'Solrock';
			}
		} else {
			document.body.classList.remove('day-mode');
			document.body.classList.add('night-mode');
			if (toggleImage) {
				toggleImage.src = './src/img/pokedex/night.png';
				toggleImage.alt = 'Lunatone';
			}
		}
	}

	function checkTimeAndApplyMode() {
		const now = new Date();
		const hours = now.getHours();
		const isDayMode = hours >= 6 && hours < 18;
		applyNightMode(isDayMode);
	}

	checkTimeAndApplyMode();

	// Update mode every hour
	setInterval(checkTimeAndApplyMode, 3600000);

	// Add event listener for toggle button
	const toggleButton = document.getElementById('toggle-button');
	toggleButton.addEventListener('click', function () {
		const isDayMode = document.body.classList.contains('day-mode');
		applyNightMode(!isDayMode);
	});
});
