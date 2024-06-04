document.addEventListener('DOMContentLoaded', () => {
    // Carousel functionality
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    setInterval(() => {
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % items.length;
        items[currentIndex].classList.add('active');
    }, 3000);

    // Modal functionality
    const modal = document.getElementById('myModal');
    const openModal = document.querySelector('.open-modal');
    const closeModal = document.querySelector('.close-btn');

    openModal.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Dark mode toggle
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});
