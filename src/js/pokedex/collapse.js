document.addEventListener('DOMContentLoaded', function() {
    const collapseButton = document.getElementById('collapse-button');
    const mainContent = document.querySelector('.collapse');

    mainContent.style.maxHeight = mainContent.scrollHeight + 'px';

    function updateMaxHeight() {
        if (mainContent.style.maxHeight !== '1px') {
            mainContent.style.maxHeight = mainContent.scrollHeight + 'px';
        }
    }

    window.addEventListener('resize', updateMaxHeight);

    collapseButton.addEventListener('click', function() {
        if (mainContent.style.maxHeight !== '1px') {
            mainContent.style.maxHeight = '1px';
        } else {
            mainContent.style.maxHeight = mainContent.scrollHeight + 'px';
        }
    });
});