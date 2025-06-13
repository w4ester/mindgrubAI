// Version B - Modern Professional JavaScript

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initCodeTabs();
  initDemo();
  initSmoothScroll();
});

// Navigation handling
const initNavigation = () => {
  const nav = document.querySelector('.header-tech');
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  // Scroll effect
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      nav.style.background = 'rgba(255, 255, 255, 0.95)';
      nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
      nav.style.background = 'rgba(255, 255, 255, 0.8)';
      nav.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
  });
  
  // Mobile menu
  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      mobileToggle.classList.toggle('active');
    });
  }
};

// Code tabs
const initCodeTabs = () => {
  const tabs = document.querySelectorAll('.tab-btn');
  const examples = document.querySelectorAll('.code-example');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const lang = tab.getAttribute('data-lang');
      
      tabs.forEach(t => t.classList.remove('active'));
      examples.forEach(e => e.classList.remove('active'));
      
      tab.classList.add('active');
      document.querySelector(`.code-example[data-lang="${lang}"]`)?.classList.add('active');
    });
  });
};

// Demo chat
const initDemo = () => {
  const form = document.getElementById('chat-form');
  const input = document.getElementById('user-input');
  const messages = document.getElementById('chat-messages');
  const modelSelector = document.getElementById('model-select');
  
  if (!form || !input || !messages) return;
  
  // Update settings displays
  document.querySelectorAll('input[type="range"]').forEach(slider => {
    slider.addEventListener('input', (e) => {
      const value = e.target.value;
      e.target.nextElementSibling.textContent = value;
    });
  });
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const userMessage = input.value.trim();
    if (!userMessage) return;
    
    const selectedModel = modelSelector.value;
    
    // Add user message
    const userDiv = document.createElement('div');
    userDiv.className = 'message user';
    userDiv.innerHTML = `<div class="message-content">${userMessage}</div>`;
    messages.appendChild(userDiv);
    
    // Clear input
    input.value = '';
    
    // Add thinking indicator
    const thinkingDiv = document.createElement('div');
    thinkingDiv.className = 'message assistant';
    thinkingDiv.innerHTML = `
      <div class="message-content">
        <span style="opacity: 0.7">Thinking...</span>
      </div>
    `;
    messages.appendChild(thinkingDiv);
    
    // Scroll to bottom
    messages.scrollTop = messages.scrollHeight;
    
    // Simulate response
    setTimeout(() => {
      const responses = {
        'mindgrub-sr': `I'm Mindgrub Sr with 95.8% accuracy on the Aider leaderboard. Your query about "${userMessage.substring(0, 30)}..." is interesting. With my 4M token context window and 25ms latency, I deliver enterprise-grade performance for complex analysis.`,
        'mindgrub-jr-think': `Mindgrub Jr Think here with 88.2% accuracy. Regarding "${userMessage.substring(0, 30)}...", I excel at deep reasoning tasks with my 2M context window and balanced 35ms response time.`,
        'mindgrub-jr': `Mindgrub Jr responding with 79.4% accuracy. For "${userMessage.substring(0, 30)}...", I provide fast, efficient responses with 128K context and 45ms latency for reliable performance.`
      };
      
      thinkingDiv.remove();
      
      const assistantDiv = document.createElement('div');
      assistantDiv.className = 'message assistant';
      assistantDiv.innerHTML = `
        <div class="message-content">
          ${responses[selectedModel] || responses['mindgrub-sr']}
        </div>
      `;
      messages.appendChild(assistantDiv);
      
      messages.scrollTop = messages.scrollHeight;
    }, 1500);
  });
};

// Smooth scroll
const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
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