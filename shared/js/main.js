// Shared utilities for all versions

// Navigation scroll effect
export const initNavigation = () => {
  const nav = document.querySelector('.main-nav');
  if (!nav) return;

  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
};

// Intersection Observer for animations
export const initAnimations = () => {
  const animatedElements = document.querySelectorAll('[data-animate]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const animation = entry.target.getAttribute('data-animate');
        entry.target.classList.add(`animate-${animation}`);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  animatedElements.forEach(el => observer.observe(el));
};

// Counter animation for stats
export const animateCounter = (element, target, duration = 2000) => {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;

  const updateCounter = () => {
    current += increment;
    if (current < target) {
      element.textContent = Math.floor(current);
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target;
    }
  };

  updateCounter();
};

// Initialize counters when visible
export const initCounters = () => {
  const counters = document.querySelectorAll('[data-count]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.getAttribute('data-count'));
        animateCounter(entry.target, target);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5
  });

  counters.forEach(counter => observer.observe(counter));
};

// Mobile menu toggle
export const initMobileMenu = () => {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (!toggle || !navLinks) return;

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    toggle.classList.toggle('active');
  });
};

// Typing effect for hero text
export const typeWriter = (element, text, speed = 50) => {
  let i = 0;
  element.textContent = '';
  
  const type = () => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  };
  
  type();
};

// Particle background effect
export const createParticles = (container, count = 50) => {
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 5 + 's';
    particle.style.animationDuration = (Math.random() * 20 + 10) + 's';
    container.appendChild(particle);
  }
};

// Load dynamic content
export const loadContent = (url, container) => {
  return fetch(url)
    .then(response => response.text())
    .then(html => {
      container.innerHTML = html;
    })
    .catch(error => console.error('Error loading content:', error));
};

// Form handling
export const initForms = () => {
  const forms = document.querySelectorAll('form[data-ajax]');
  
  forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const formData = new FormData(form);
      const button = form.querySelector('button[type="submit"]');
      const originalText = button.textContent;
      
      button.textContent = 'Sending...';
      button.disabled = true;
      
      // Simulate form submission
      setTimeout(() => {
        button.textContent = 'Success!';
        form.reset();
        
        setTimeout(() => {
          button.textContent = originalText;
          button.disabled = false;
        }, 2000);
      }, 1500);
    });
  });
};

// Initialize all common features
export const initCommon = () => {
  initNavigation();
  initAnimations();
  initCounters();
  initMobileMenu();
  initForms();
};

// Export for use in individual versions
export default {
  initCommon,
  initNavigation,
  initAnimations,
  initCounters,
  initMobileMenu,
  initForms,
  typeWriter,
  createParticles,
  animateCounter,
  loadContent
};