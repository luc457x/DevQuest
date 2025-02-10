document.addEventListener('DOMContentLoaded', function() {
    function applyNightMode() {
        const now = new Date();
        const hours = now.getHours();

        if (hours >= 6 && hours < 18) {
            document.body.classList.remove('night-mode');
            document.body.classList.add('day-mode');
        } else {
            document.body.classList.remove('day-mode');
            document.body.classList.add('night-mode');
        }
    }

    applyNightMode();

    // Update the mode every hour
    setInterval(applyNightMode, 3600000);
});
