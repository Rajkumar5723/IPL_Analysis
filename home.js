document.addEventListener('DOMContentLoaded', function() {
    const sportItems = document.querySelectorAll('.sport-item');

    // Handle click event for each cricket item
    sportItems.forEach(item => {
        item.addEventListener('click', () => {
            const sportName = item.querySelector('h2').textContent;
            alert(`Clicked on ${sportName}`);

            // Example: Redirect to specific cricket analysis page
            window.location.href = `cricket-analysis.html?category=${sportName.toLowerCase()}`;
        });
    });
});
