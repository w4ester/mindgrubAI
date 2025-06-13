// Library JavaScript Functionality

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initSearch();
    initSmoothScroll();
    initNavigation();
});

// Theme management
const initTheme = () => {
    const html = document.documentElement;
    const currentTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', currentTheme);
};

// Search functionality
const initSearch = () => {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.querySelector('.search-button');
    
    if (!searchInput || !searchButton) return;
    
    // Search on enter
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            performSearch(searchInput.value);
        }
    });
    
    // Search on button click
    searchButton.addEventListener('click', () => {
        performSearch(searchInput.value);
    });
};

const performSearch = (query) => {
    if (!query.trim()) return;
    
    // In a real implementation, this would search through documents
    console.log('Searching for:', query);
    
    // Highlight search results
    const sections = document.querySelectorAll('.guide-card, .article-title, .reference-list a');
    sections.forEach(section => {
        const text = section.textContent.toLowerCase();
        if (text.includes(query.toLowerCase())) {
            section.style.outline = '2px solid var(--accent-orange)';
            section.style.outlineOffset = '4px';
            setTimeout(() => {
                section.style.outline = '';
                section.style.outlineOffset = '';
            }, 3000);
        }
    });
};

// Smooth scrolling for anchor links
const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                const offset = 80;
                const targetPosition = target.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
};

// Navigation active state
const initNavigation = () => {
    const updateActiveNav = () => {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    };
    
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();
};

// Add interactive animations
document.querySelectorAll('.guide-card, .resource-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add loading animation for article links
document.querySelectorAll('.article-link, .guide-card').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.href && this.href.includes('.html')) {
            e.preventDefault();
            this.style.opacity = '0.6';
            this.innerHTML += ' <span style="margin-left: 8px;">Loading...</span>';
            
            // Simulate navigation (in real app, would navigate)
            setTimeout(() => {
                console.log('Navigating to:', this.href);
                // window.location.href = this.href;
            }, 500);
        }
    });
});