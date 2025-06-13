// Version C - Interactive Modern JavaScript

document.addEventListener('DOMContentLoaded', () => {
    initChat();
    initModelSelector();
    initSliders();
    initDemo();
    initSmoothScroll();
    initMobileMenu();
    initHeaderScroll();
});

// Chat functionality
const initChat = () => {
    const form = document.getElementById('chat-form');
    const input = document.getElementById('user-input');
    const messages = document.getElementById('chat-messages');
    
    if (!form || !input || !messages) return;
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const userMessage = input.value.trim();
        if (!userMessage) return;
        
        // Add user message
        addMessage(userMessage, 'user');
        input.value = '';
        
        // Add thinking indicator
        const thinkingId = addThinkingMessage();
        
        // Simulate AI response
        setTimeout(() => {
            removeMessage(thinkingId);
            const response = generateResponse(userMessage);
            addMessage(response, 'assistant');
        }, 1500);
    });
};

// Model selector
const initModelSelector = () => {
    const chips = document.querySelectorAll('.model-chip');
    
    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            chips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            
            // Update chat greeting
            const modelName = chip.textContent;
            const messages = document.getElementById('chat-messages');
            if (messages && messages.children.length === 1) {
                const firstMessage = messages.querySelector('.message-content');
                if (firstMessage) {
                    firstMessage.textContent = `👋 Hello! I'm powered by ${modelName}. How can I help you explore AI today?`;
                }
            }
        });
    });
};

// Slider controls
const initSliders = () => {
    const sliders = document.querySelectorAll('.slider');
    
    sliders.forEach(slider => {
        const valueDisplay = slider.parentElement.querySelector('.value');
        if (valueDisplay) {
            slider.addEventListener('input', (e) => {
                valueDisplay.textContent = `${e.target.value}%`;
                updateDemoOutput();
            });
        }
    });
};

// Demo output
const initDemo = () => {
    updateDemoOutput();
};

const updateDemoOutput = () => {
    const creativity = document.getElementById('creativity')?.value || 70;
    const speed = document.getElementById('speed')?.value || 85;
    const accuracy = document.getElementById('accuracy')?.value || 90;
    const output = document.getElementById('demo-output');
    
    if (output) {
        output.innerHTML = `
            <div style="margin-bottom: 16px;">
                <strong>Current Configuration:</strong>
            </div>
            <div style="margin-bottom: 12px;">
                🎨 Creativity: ${creativity}% - ${getCreativityDescription(creativity)}
            </div>
            <div style="margin-bottom: 12px;">
                ⚡ Speed: ${speed}% - ${getSpeedDescription(speed)}
            </div>
            <div style="margin-bottom: 12px;">
                🎯 Accuracy: ${accuracy}% - ${getAccuracyDescription(accuracy)}
            </div>
            <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.1);">
                <strong>Optimal for:</strong> ${getOptimalUseCase(creativity, speed, accuracy)}
            </div>
        `;
    }
};

// Helper functions
const addMessage = (content, type) => {
    const messages = document.getElementById('chat-messages');
    if (!messages) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.innerHTML = `<div class="message-content">${content}</div>`;
    messages.appendChild(messageDiv);
    messages.scrollTop = messages.scrollHeight;
    
    return messageDiv;
};

const addThinkingMessage = () => {
    const messages = document.getElementById('chat-messages');
    if (!messages) return;
    
    const thinkingDiv = document.createElement('div');
    thinkingDiv.className = 'message assistant thinking';
    thinkingDiv.id = `thinking-${Date.now()}`;
    thinkingDiv.innerHTML = `
        <div class="message-content">
            <span style="opacity: 0.7">Thinking...</span>
        </div>
    `;
    messages.appendChild(thinkingDiv);
    messages.scrollTop = messages.scrollHeight;
    
    return thinkingDiv.id;
};

const removeMessage = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.remove();
    }
};

const generateResponse = (input) => {
    const responses = [
        "That's a fascinating question! Based on my analysis with 95.8% accuracy on Mindgrub Sr, I can help you explore that topic in depth.",
        "Great question! Let me leverage my 4M token context window and 25ms latency to provide you with comprehensive insights.",
        "I'd be happy to help with that! My enterprise-grade capabilities allow me to break down the most complex topics.",
        "Interesting! As the flagship Mindgrub Sr model, I'll use my state-of-the-art processing to give you the best possible answer.",
        "Excellent inquiry! With my industry-leading performance on the Aider leaderboard, I can provide detailed assistance."
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
};

const getCreativityDescription = (value) => {
    if (value < 30) return "Conservative responses";
    if (value < 70) return "Balanced creativity";
    return "Highly creative outputs";
};

const getSpeedDescription = (value) => {
    if (value < 30) return "Thorough processing";
    if (value < 70) return "Balanced speed";
    return "Lightning fast responses";
};

const getAccuracyDescription = (value) => {
    if (value < 30) return "Exploratory mode";
    if (value < 70) return "Standard precision";
    return "Maximum accuracy";
};

const getOptimalUseCase = (creativity, speed, accuracy) => {
    const total = parseInt(creativity) + parseInt(speed) + parseInt(accuracy);
    const avg = total / 3;
    
    if (creativity > 80) return "Creative writing, brainstorming, and artistic projects";
    if (speed > 80) return "Real-time conversations and quick iterations";
    if (accuracy > 80) return "Technical documentation and precise analysis";
    if (avg > 70) return "Balanced performance for general AI tasks";
    return "Experimental and exploratory AI interactions";
};

// Smooth scrolling
const initSmoothScroll = () => {
    // Handle all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            // Special handling for chat link
            if (targetId === '#chat') {
                // Scroll to top where chat is
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                // Focus on chat input after scrolling
                setTimeout(() => {
                    const chatInput = document.getElementById('user-input');
                    if (chatInput) chatInput.focus();
                }, 500);
                return;
            }
            
            // Regular section scrolling
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
    
    // Update active nav link based on scroll position
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
    
    // Update on scroll
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav(); // Initial check
};

// Mobile menu
const initMobileMenu = () => {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (toggle && navLinks) {
        toggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            toggle.classList.toggle('active');
        });
        
        // Close mobile menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                toggle.classList.remove('active');
            });
        });
    }
};

// Message styles
const style = document.createElement('style');
style.textContent = `
    .message {
        margin-bottom: 16px;
        display: flex;
    }
    
    .message.user {
        justify-content: flex-end;
    }
    
    .message.assistant {
        justify-content: flex-start;
    }
    
    .message-content {
        max-width: 70%;
        padding: 12px 20px;
        border-radius: 16px;
        font-size: 15px;
        line-height: 1.6;
    }
    
    .message.user .message-content {
        background: var(--gradient-primary);
        color: white;
    }
    
    .message.assistant .message-content {
        background: var(--bg-card);
        border: 1px solid var(--border-color);
        color: var(--text-primary);
    }
    
    .message.thinking .message-content {
        animation: pulse 1.5s ease-in-out infinite;
    }
    
    @keyframes pulse {
        0%, 100% { opacity: 0.5; }
        50% { opacity: 1; }
    }
`;
document.head.appendChild(style);

// Header scroll effect
const initHeaderScroll = () => {
    const header = document.querySelector('.header-interactive');
    
    const updateHeader = () => {
        if (window.scrollY > 100) {
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled');
        }
    };
    
    window.addEventListener('scroll', updateHeader);
    updateHeader(); // Initial check
};