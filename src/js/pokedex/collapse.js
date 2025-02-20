document.addEventListener('DOMContentLoaded', function () {
	const collapseButton = document.getElementById('collapse-button');
	const mainContent = document.querySelector('.collapse');

	console.log('Initial scrollHeight:', mainContent.scrollHeight);

	mainContent.style.maxHeight = mainContent.scrollHeight + 'px';

	function updateMaxHeight() {
		if (mainContent.style.maxHeight !== '1px') {
			mainContent.style.maxHeight = mainContent.scrollHeight + 'px';
		}
	}

	mainContent.offsetHeight;

	window.addEventListener('resize', updateMaxHeight);

	collapseButton.addEventListener('click', function () {
		if (mainContent.style.maxHeight !== '1px') {
			mainContent.style.maxHeight = '1px';
			mainContent.style.overflowY = 'hidden';
		} else {
			mainContent.style.maxHeight = mainContent.scrollHeight + 'px';
		}
	});
});