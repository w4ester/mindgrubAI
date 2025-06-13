// Version A - Corporate/Professional JavaScript
import { initCommon, animateCounter } from '../../shared/js/main.js';

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
  initCommon();
  initROICalculator();
  initSmoothScroll();
  initAnimations();
});

// Initialize ROI Calculator
const initROICalculator = () => {
  const calculator = document.querySelector('.roi-calculator');
  if (!calculator) return;

  const inputs = calculator.querySelectorAll('input');
  const calculateBtn = calculator.querySelector('button');
  
  const calculate = () => {
    const revenue = parseFloat(document.getElementById('revenue')?.value || 10000000);
    const employees = parseInt(document.getElementById('employees')?.value || 500);
    const industry = document.getElementById('industry')?.value || 'Financial Services';
    
    // Industry multipliers
    const industryMultipliers = {
      'Financial Services': 1.3,
      'Healthcare': 1.2,
      'Retail': 1.1,
      'Manufacturing': 1.0
    };
    
    const multiplier = industryMultipliers[industry] || 1.0;
    
    // Calculate potential savings
    const automationSavings = employees * 50000 * 0.35 * multiplier; // 35% of employee cost
    const efficiencyGains = revenue * 0.08 * multiplier; // 8% revenue increase
    const costReduction = revenue * 0.12 * multiplier; // 12% cost reduction
    
    const totalSavings = automationSavings + efficiencyGains + costReduction;
    const efficiencyPercent = Math.round((efficiencyGains / revenue) * 100);
    const paybackMonths = Math.round((revenue * 0.05) / (totalSavings / 12)); // 5% of revenue as investment
    
    // Update UI
    updateROIDisplay(totalSavings, efficiencyPercent, paybackMonths);
  };
  
  const updateROIDisplay = (savings, efficiency, payback) => {
    const savingsEl = document.querySelector('.roi-metric:nth-child(1) .roi-value');
    const efficiencyEl = document.querySelector('.roi-metric:nth-child(2) .roi-value');
    const paybackEl = document.querySelector('.roi-metric:nth-child(3) .roi-value');
    
    if (savingsEl) {
      const savingsInMillions = savings / 1000000;
      savingsEl.textContent = `$${savingsInMillions.toFixed(1)}M`;
    }
    
    if (efficiencyEl) {
      efficiencyEl.textContent = `${efficiency}%`;
    }
    
    if (paybackEl) {
      paybackEl.textContent = `${payback} months`;
    }
    
    // Add pulse animation
    document.querySelectorAll('.roi-metric').forEach(metric => {
      metric.style.animation = 'pulse 0.6s ease';
      setTimeout(() => {
        metric.style.animation = '';
      }, 600);
    });
  };
  
  // Auto calculate on input change
  inputs.forEach(input => {
    input.addEventListener('input', calculate);
  });
  
  if (calculateBtn) {
    calculateBtn.addEventListener('click', (e) => {
      e.preventDefault();
      calculate();
    });
  }
  
  // Initial calculation
  calculate();
};

// Smooth scroll for navigation links
const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offset = 100; // Account for fixed header
        const targetPosition = target.offsetTop - offset;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
};

// Initialize scroll animations
const initAnimations = () => {
  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        
        // Animate counters
        const counters = entry.target.querySelectorAll('[data-count]');
        counters.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-count'));
          animateCounter(counter, target, 2000);
        });
      }
    });
  }, observerOptions);
  
  // Observe all sections
  document.querySelectorAll('section').forEach(section => {
    section.classList.add('reveal');
    observer.observe(section);
  });
  
  // Observe all cards and grid items
  const animatedElements = document.querySelectorAll('.model-card, .solution-card, .case-study, .tech-feature');
  animatedElements.forEach((el, index) => {
    el.style.transitionDelay = `${index * 100}ms`;
    el.classList.add('reveal');
    observer.observe(el);
  });
  
  // Navbar background on scroll
  const navbar = document.querySelector('.header-corporate');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(255, 255, 255, 0.98)';
      navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
      navbar.style.background = 'rgba(255, 255, 255, 0.95)';
      navbar.style.boxShadow = 'none';
    }
  });
  
  // Mobile menu toggle
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      mobileToggle.classList.toggle('active');
    });
  }
  
  // Form submission
  const demoForm = document.querySelector('#cta form');
  if (demoForm) {
    demoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = demoForm.querySelector('button');
      const originalText = btn.textContent;
      
      btn.textContent = 'Scheduling...';
      btn.disabled = true;
      
      setTimeout(() => {
        btn.textContent = 'Thank you! We\'ll contact you soon.';
        btn.style.background = 'var(--mg-green)';
        demoForm.reset();
        
        setTimeout(() => {
          btn.textContent = originalText;
          btn.disabled = false;
          btn.style.background = '';
        }, 3000);
      }, 1500);
    });
  }
};