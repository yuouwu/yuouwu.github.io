// This script can be added to the HTML template to add some interactive elements
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links (only for hash links)
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle hash links (links that start with #)
            if (href.startsWith('#')) {
                e.preventDefault();
                
                const targetElement = document.querySelector(href);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
            // Otherwise, let the browser handle navigation normally
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
    
    // Make research descriptions expandable/collapsible
    const descriptionParagraphs = document.querySelectorAll('.research-content > p:not(.research-meta)');
    
    descriptionParagraphs.forEach(paragraph => {
        const fullText = paragraph.textContent;
        const maxLength = 120; // Number of characters to show initially
        
        if (fullText.length > maxLength) {
            // Create shortened version
            const shortText = fullText.substring(0, maxLength) + '...';
            
            // Set initial shortened text
            paragraph.textContent = shortText;
            paragraph.dataset.fullText = fullText;
            paragraph.dataset.shortText = shortText;
            paragraph.dataset.expanded = 'false';
            
            // Create Read More button
            const toggleButton = document.createElement('button');
            toggleButton.className = 'read-more-toggle';
            toggleButton.textContent = 'Read more';
            
            // Add button after paragraph
            paragraph.parentNode.insertBefore(toggleButton, paragraph.nextSibling);
            
            // Add click event
            toggleButton.addEventListener('click', function() {
                const isExpanded = paragraph.dataset.expanded === 'true';
                
                if (isExpanded) {
                    paragraph.textContent = paragraph.dataset.shortText;
                    toggleButton.textContent = 'Read more';
                    paragraph.dataset.expanded = 'false';
                } else {
                    paragraph.textContent = paragraph.dataset.fullText;
                    toggleButton.textContent = 'Read less';
                    paragraph.dataset.expanded = 'true';
                }
            });
        }
    });
});
