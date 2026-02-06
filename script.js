// Smooth scroll for better UX
document.addEventListener('DOMContentLoaded', () => {
    // Add smooth reveal on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Video optimization
    const video = document.getElementById('bg-video');
    if (video) {
        video.playbackRate = 0.8; // Slightly slower for more dramatic effect
    }

    // Parallax effect for profile section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const profile = document.querySelector('.profile');
        if (profile) {
            profile.style.transform = `translateY(${scrolled * 0.3}px)`;
            profile.style.opacity = 1 - (scrolled / 500);
        }
    });

    // Random glitch effect on name
    const nameElement = document.querySelector('.name');
    setInterval(() => {
        if (Math.random() > 0.95) {
            nameElement.style.textShadow = `
                ${Math.random() * 4 - 2}px ${Math.random() * 4 - 2}px 0 rgba(0, 212, 255, 0.8),
                ${Math.random() * 4 - 2}px ${Math.random() * 4 - 2}px 0 rgba(255, 0, 255, 0.5)
            `;
            setTimeout(() => {
                nameElement.style.textShadow = '';
            }, 50);
        }
    }, 100);
});
