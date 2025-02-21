document.addEventListener('DOMContentLoaded', () => {
    // Initialize scroll animations with a lower threshold for better visibility
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -20px 0px'
    };

    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // Add fade-in class to posts and cards with shorter delay
    document.querySelectorAll('.card, .post-card').forEach((element, index) => {
        element.classList.add('fade-in');
        element.style.transitionDelay = `${index * 0.05}s`;
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Initialize Bootstrap tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

    // Add hover effect to navigation items
    const navItems = document.querySelectorAll('.nav-link');
    navItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-2px)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0)';
        });
    });

    // Animate flash messages with improved timing
    const flashMessages = document.querySelectorAll('.alert');
    flashMessages.forEach(message => {
        message.style.animation = 'slideIn 0.5s ease-out';
        setTimeout(() => {
            message.classList.add('hiding');
            message.addEventListener('transitionend', () => {
                message.style.display = 'none';
            });
        }, 5000);
    });
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateY(-100%); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }

    .nav-link {
        transition: transform 0.3s ease;
    }
`;
document.head.appendChild(style);