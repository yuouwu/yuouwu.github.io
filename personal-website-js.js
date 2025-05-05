// This script can be added to the HTML template to add some interactive elements
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Optional: Add subtle animation for page elements
    const fadeInElements = document.querySelectorAll('.bio-section p');
    
    fadeInElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 100 * (index + 1));
    });
    
    // Optional: Add dark mode toggle
    const createDarkModeToggle = () => {
        const toggleButton = document.createElement('button');
        toggleButton.innerHTML = '🌙';
        toggleButton.classList.add('dark-mode-toggle');
        toggleButton.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            border: none;
            background: none;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 10px;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.7);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
        `;
        
        document.body.appendChild(toggleButton);
        
        toggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                document.documentElement.style.setProperty('--text-color', '#f5f5f5');
                document.documentElement.style.setProperty('--bg-color', '#222');
                document.documentElement.style.setProperty('--link-color', '#aaa');
                document.documentElement.style.setProperty('--link-hover-color', '#fff');
                toggleButton.innerHTML = '☀️';
            } else {
                document.documentElement.style.setProperty('--text-color', '#333');
                document.documentElement.style.setProperty('--bg-color', '#f5f5f2');
                document.documentElement.style.setProperty('--link-color', '#555');
                document.documentElement.style.setProperty('--link-hover-color', '#000');
                toggleButton.innerHTML = '🌙';
            }
        });
    };
    
    // Uncomment to add dark mode toggle
    // createDarkModeToggle();
});
