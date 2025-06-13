// Version C - Interactive/Engaging JavaScript
import { initCommon, typeWriter } from '../../shared/js/main.js';

// Initialize interactive hero
const initHero = () => {
  const heroSection = document.getElementById('hero');
  if (!heroSection) return;

  const heroContent = `
    <div class="container hero-interactive">
      <div class="hero-emoji">🤖</div>
      <h1 class="hero-title" data-animate="fade-in">
        Hi! I'm Your AI Companion
      </h1>
      <p class="text-xl mb-lg" data-animate="fade-in">
        Let's explore the amazing world of artificial intelligence together!
      </p>
      <div class="hero-chat-demo" data-animate="fade-in">
        <h3 class="mb-md">Try me out! Ask me anything:</h3>
        <div class="chat-messages" id="hero-chat-messages">
          <div class="chat-message ai-message">
            👋 Hello! I'm Mindgrub AI. How can I help you today?
          </div>
        </div>
        <div class="chat-input-group">
          <input type="text" class="chat-input" id="hero-chat-input" 
            placeholder="Type your message..." 
            onkeypress="if(event.key==='Enter') sendHeroMessage()">
          <button class="btn btn-animated" onclick="sendHeroMessage()">Send</button>
        </div>
      </div>
    </div>
  `;

  heroSection.innerHTML = heroContent;

  // Add emoji rain
  createEmojiRain(heroSection);
};

// Create emoji rain effect
const createEmojiRain = (container) => {
  const emojis = ['🤖', '🧠', '💡', '⚡', '🚀', '✨', '🎯', '🔮'];
  
  setInterval(() => {
    const emoji = document.createElement('div');
    emoji.className = 'emoji-rain';
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.random() * 100 + '%';
    emoji.style.animationDuration = (Math.random() * 3 + 2) + 's';
    container.appendChild(emoji);
    
    setTimeout(() => emoji.remove(), 5000);
  }, 1000);
};

// Handle hero chat messages
window.sendHeroMessage = () => {
  const input = document.getElementById('hero-chat-input');
  const messages = document.getElementById('hero-chat-messages');
  const message = input.value.trim();
  
  if (!message) return;
  
  // Add user message
  const userMsg = document.createElement('div');
  userMsg.className = 'chat-message user-message';
  userMsg.textContent = message;
  messages.appendChild(userMsg);
  
  input.value = '';
  messages.scrollTop = messages.scrollHeight;
  
  // Simulate AI response
  setTimeout(() => {
    const aiMsg = document.createElement('div');
    aiMsg.className = 'chat-message ai-message';
    
    const responses = [
      "That's a great question! AI can help with that by analyzing patterns and making predictions. 🎯",
      "Interesting! Let me think about that... AI works by learning from data to solve problems like yours. 🧠",
      "I love your curiosity! AI is all about making technology work smarter for people like you. 💡",
      "Great point! That's exactly the kind of challenge AI excels at solving. 🚀",
      "Fascinating! AI can definitely help with that. Want to explore our playground to see it in action? ✨"
    ];
    
    aiMsg.textContent = responses[Math.floor(Math.random() * responses.length)];
    messages.appendChild(aiMsg);
    messages.scrollTop = messages.scrollHeight;
  }, 1000);
};

// Initialize playground
const initPlayground = () => {
  const playgroundSection = document.getElementById('playground');
  if (!playgroundSection) return;

  const playgrounds = [
    {
      icon: '🎨',
      title: 'AI Art Generator',
      description: 'Create amazing artwork with AI! Describe anything and watch it come to life.',
      action: 'Try It'
    },
    {
      icon: '📝',
      title: 'Story Writer',
      description: 'Let AI help you write creative stories, poems, or even songs!',
      action: 'Start Writing'
    },
    {
      icon: '🎮',
      title: 'AI Game',
      description: 'Play fun games powered by AI that adapt to your skill level.',
      action: 'Play Now'
    },
    {
      icon: '🔍',
      title: 'Image Analyzer',
      description: 'Upload any image and AI will tell you what it sees!',
      action: 'Upload Image'
    },
    {
      icon: '🗣️',
      title: 'Voice Assistant',
      description: 'Talk to AI and get instant responses to your questions.',
      action: 'Start Talking'
    },
    {
      icon: '🌍',
      title: 'Language Translator',
      description: 'Translate anything to any language instantly with AI.',
      action: 'Translate'
    }
  ];

  const playgroundContent = `
    <div class="container">
      <div class="text-center mb-xl">
        <h2 data-animate="fade-in">AI Playground</h2>
        <p class="text-lg" data-animate="fade-in">
          Experience the magic of AI with these interactive demos!
        </p>
      </div>
      <div class="playground-grid">
        ${playgrounds.map((item, index) => `
          <div class="playground-card interactive-element" data-animate="fade-in" 
            style="animation-delay: ${index * 0.1}s" onclick="openPlayground('${item.title}')">
            <div class="playground-icon">${item.icon}</div>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <button class="btn btn-primary mt-md">${item.action}</button>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  playgroundSection.innerHTML = playgroundContent;
};

// Handle playground clicks
window.openPlayground = (title) => {
  alert(`🚀 Opening ${title}... This would launch an interactive demo in a production environment!`);
};

// Initialize AI assistant section
const initAssistant = () => {
  const assistantSection = document.getElementById('assistant');
  if (!assistantSection) return;

  const capabilities = [
    '💬 Natural Conversations',
    '🧠 Smart Suggestions',
    '⚡ Instant Responses',
    '🌐 Multi-language',
    '📚 Continuous Learning',
    '🔒 Privacy First'
  ];

  const assistantContent = `
    <div class="container">
      <div class="text-center mb-xl">
        <h2 data-animate="fade-in">Meet Your AI Assistant</h2>
        <p class="text-lg" data-animate="fade-in">
          A friendly AI companion that's always ready to help!
        </p>
      </div>
      <div class="assistant-demo" data-animate="fade-in">
        <div class="assistant-avatar">
          <span style="font-size: 60px;">🤖</span>
        </div>
        <h3 class="text-center mb-md">Hi! I'm Mindgrub AI Assistant</h3>
        <p class="text-center mb-xl">
          I can help you with anything from answering questions to creative projects. 
          I'm always learning and getting better!
        </p>
        <div class="assistant-capabilities">
          ${capabilities.map(cap => `
            <div class="capability-bubble">${cap}</div>
          `).join('')}
        </div>
        <div class="text-center mt-xl">
          <button class="btn btn-primary" onclick="startAssistantDemo()">
            Start Chatting
          </button>
        </div>
      </div>
    </div>
  `;

  assistantSection.innerHTML = assistantContent;
};

// Start assistant demo
window.startAssistantDemo = () => {
  const bubble = document.querySelector('.ai-assistant-bubble');
  bubble.style.transform = 'scale(1.2)';
  setTimeout(() => {
    bubble.style.transform = 'scale(1)';
  }, 300);
  
  const message = bubble.querySelector('.assistant-message');
  message.textContent = "Let's chat! Click me anytime!";
  message.style.opacity = '1';
  message.style.transform = 'translateY(0)';
  
  setTimeout(() => {
    message.style.opacity = '0';
    message.style.transform = 'translateY(10px)';
  }, 3000);
};

// Initialize showcase
const initShowcase = () => {
  const showcaseSection = document.getElementById('showcase');
  if (!showcaseSection) return;

  const showcases = [
    {
      title: 'AI-Powered Customer Service',
      description: 'Watch how AI handles customer queries with empathy and efficiency',
      demo: '💬 Live chat demo with sentiment analysis'
    },
    {
      title: 'Smart Content Creation',
      description: 'See AI generate blog posts, social media content, and more',
      demo: '✍️ Real-time content generation'
    },
    {
      title: 'Predictive Analytics Dashboard',
      description: 'Explore how AI predicts trends and provides insights',
      demo: '📊 Interactive data visualization'
    }
  ];

  const showcaseContent = `
    <div class="container">
      <div class="text-center mb-xl">
        <h2 data-animate="fade-in">Interactive AI Showcase</h2>
        <p class="text-lg" data-animate="fade-in">
          See real AI applications in action!
        </p>
      </div>
      <div class="showcase-carousel" data-animate="fade-in">
        ${showcases.map((item, index) => `
          <div class="showcase-item" ${index > 0 ? 'style="display:none;"' : ''}>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <div class="showcase-demo">
              <p style="font-size: var(--fs-3xl);">${item.demo}</p>
            </div>
            <div class="mt-lg">
              <button class="btn btn-primary" onclick="nextShowcase()">Next Demo →</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  showcaseSection.innerHTML = showcaseContent;
};

// Handle showcase navigation
let currentShowcase = 0;
window.nextShowcase = () => {
  const items = document.querySelectorAll('.showcase-item');
  items[currentShowcase].style.display = 'none';
  currentShowcase = (currentShowcase + 1) % items.length;
  items[currentShowcase].style.display = 'block';
};

// Initialize build section
const initBuild = () => {
  const buildSection = document.getElementById('build');
  if (!buildSection) return;

  const steps = [
    { number: '1', title: 'Choose AI Model', desc: 'Pick from our pre-trained models' },
    { number: '2', title: 'Customize', desc: 'Train it with your data' },
    { number: '3', title: 'Test & Play', desc: 'Try it in our playground' },
    { number: '4', title: 'Deploy', desc: 'Launch your AI creation!' }
  ];

  const buildContent = `
    <div class="container">
      <div class="text-center mb-xl">
        <h2 data-animate="fade-in">Build Your Own AI</h2>
        <p class="text-lg" data-animate="fade-in">
          Create custom AI solutions in just 4 easy steps!
        </p>
      </div>
      <div class="build-steps">
        ${steps.map((step, index) => `
          <div class="build-step" data-animate="fade-in" style="animation-delay: ${index * 0.1}s">
            ${index < steps.length - 1 ? '<div class="step-connector"></div>' : ''}
            <div class="step-number">${step.number}</div>
            <h4>${step.title}</h4>
            <p>${step.desc}</p>
          </div>
        `).join('')}
      </div>
      <div class="text-center mt-xl">
        <button class="btn btn-animated" onclick="startBuilding()">
          Start Building 🚀
        </button>
      </div>
    </div>
  `;

  buildSection.innerHTML = buildContent;
};

// Start building demo
window.startBuilding = () => {
  alert('🎉 Welcome to the AI Builder! This would open an interactive AI creation tool.');
};

// Initialize chat section
const initChat = () => {
  const chatSection = document.getElementById('chat');
  if (!chatSection) return;

  const chatContent = `
    <div class="container">
      <h2 class="text-center mb-xl" data-animate="fade-in">
        Live AI Chat Experience
      </h2>
      <div class="chat-interface" data-animate="fade-in">
        <div class="chat-header">
          <div class="assistant-avatar" style="width: 40px; height: 40px; margin: 0;">
            <span style="font-size: 24px;">🤖</span>
          </div>
          <div>
            <h4 class="mb-0">Mindgrub AI</h4>
            <div style="display: flex; align-items: center; gap: var(--spacing-xs);">
              <span class="status-indicator"></span>
              <small>Always online</small>
            </div>
          </div>
        </div>
        <div class="chat-messages" id="live-chat-messages" style="height: 400px;">
          <div class="chat-message ai-message">
            Welcome to the live chat! I can answer questions about AI, help with projects, 
            or just have a fun conversation. What would you like to explore? 🌟
          </div>
        </div>
        <div class="chat-input-group mt-md">
          <input type="text" class="chat-input" id="live-chat-input" 
            placeholder="Ask me anything about AI..." 
            onkeypress="if(event.key==='Enter') sendLiveMessage()">
          <button class="btn btn-primary" onclick="sendLiveMessage()">Send</button>
        </div>
      </div>
    </div>
  `;

  chatSection.innerHTML = chatContent;
};

// Handle live chat
window.sendLiveMessage = () => {
  const input = document.getElementById('live-chat-input');
  const messages = document.getElementById('live-chat-messages');
  const message = input.value.trim();
  
  if (!message) return;
  
  // Add user message
  const userMsg = document.createElement('div');
  userMsg.className = 'chat-message user-message';
  userMsg.textContent = message;
  messages.appendChild(userMsg);
  
  input.value = '';
  messages.scrollTop = messages.scrollHeight;
  
  // Show typing indicator
  const typingMsg = document.createElement('div');
  typingMsg.className = 'chat-message ai-message';
  typingMsg.innerHTML = '<span class="loading-dots">AI is thinking</span>';
  messages.appendChild(typingMsg);
  messages.scrollTop = messages.scrollHeight;
  
  // Simulate AI response
  setTimeout(() => {
    messages.removeChild(typingMsg);
    
    const aiMsg = document.createElement('div');
    aiMsg.className = 'chat-message ai-message';
    
    // Context-aware responses
    let response = '';
    if (message.toLowerCase().includes('hello') || message.toLowerCase().includes('hi')) {
      response = "Hello there! 👋 I'm excited to chat with you about AI. What aspect interests you most?";
    } else if (message.toLowerCase().includes('how') || message.toLowerCase().includes('what')) {
      response = "Great question! AI works by learning patterns from data, much like how we learn from experience. Would you like me to explain a specific aspect in more detail? 🧠";
    } else if (message.toLowerCase().includes('can you')) {
      response = "I'd love to help! I can explain AI concepts, suggest project ideas, or demonstrate various AI capabilities. What would you like to explore? ✨";
    } else {
      response = "That's fascinating! AI has so many applications in that area. Would you like to see some examples or learn how to build something similar? 🚀";
    }
    
    aiMsg.textContent = response;
    messages.appendChild(aiMsg);
    messages.scrollTop = messages.scrollHeight;
  }, 1500);
};

// Initialize fun facts
const initFacts = () => {
  const factsSection = document.getElementById('facts');
  if (!factsSection) return;

  const facts = [
    { number: '2.5M', label: 'AI Interactions Daily' },
    { number: '0.03s', label: 'Average Response Time' },
    { number: '147', label: 'Languages Supported' },
    { number: '∞', label: 'Learning Potential' }
  ];

  const factsContent = `
    <div class="container">
      <h2 class="text-center mb-xl" data-animate="fade-in">Fun AI Facts</h2>
      <div class="facts-grid">
        ${facts.map((fact, index) => `
          <div class="fact-card" data-animate="fade-in" style="animation-delay: ${index * 0.1}s">
            <span class="fact-number">${fact.number}</span>
            <span>${fact.label}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  factsSection.innerHTML = factsContent;
};

// Initialize CTA
const initCTA = () => {
  const ctaSection = document.getElementById('cta');
  if (!ctaSection) return;

  const ctaContent = `
    <div class="container">
      <h2 data-animate="fade-in">Ready for Your AI Adventure?</h2>
      <p class="text-lg mb-xl" data-animate="fade-in">
        Join thousands of creators building amazing things with AI!
      </p>
      <div class="cta-game" data-animate="fade-in">
        <h3>Quick Game: What Type of AI Creator Are You?</h3>
        <p>Click the emoji that best represents you:</p>
        <div class="cta-buttons">
          <button class="btn btn-animated" onclick="selectCreatorType('artist')">🎨 Artist</button>
          <button class="btn btn-animated" onclick="selectCreatorType('coder')">💻 Coder</button>
          <button class="btn btn-animated" onclick="selectCreatorType('writer')">✍️ Writer</button>
          <button class="btn btn-animated" onclick="selectCreatorType('entrepreneur')">🚀 Entrepreneur</button>
        </div>
        <div id="creator-result" class="mt-lg"></div>
      </div>
      <form class="mt-xl" style="max-width: 400px; margin: 0 auto;" data-ajax data-animate="fade-in">
        <input type="email" class="chat-input mb-md" placeholder="Enter your email" required 
          style="background: rgba(0,0,0,0.05); color: var(--mg-black);">
        <button type="submit" class="btn btn-animated" style="width: 100%;">
          Start My AI Journey! 🌟
        </button>
      </form>
    </div>
  `;

  ctaSection.innerHTML = ctaContent;
};

// Handle creator type selection
window.selectCreatorType = (type) => {
  const resultDiv = document.getElementById('creator-result');
  const messages = {
    artist: "🎨 Awesome! As an AI Artist, you'll love our image generation and creative tools!",
    coder: "💻 Perfect! As an AI Coder, you'll enjoy our APIs and development frameworks!",
    writer: "✍️ Great choice! As an AI Writer, you'll create amazing content with our language models!",
    entrepreneur: "🚀 Fantastic! As an AI Entrepreneur, you'll build the next big thing with our platform!"
  };
  
  resultDiv.innerHTML = `<p class="text-lg">${messages[type]}</p>`;
};

// Initialize footer
const initFooter = () => {
  const footer = document.getElementById('footer');
  if (!footer) return;

  const footerContent = `
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <img src="../shared/images/mindgrub-logo.svg" alt="Mindgrub" width="160" height="40" style="filter: brightness(0) invert(1);">
          <p class="mt-md">Making AI fun, accessible, and powerful for everyone! 🚀</p>
        </div>
        <div class="footer-section">
          <h4>Explore</h4>
          <ul>
            <li><a href="#playground">AI Playground</a></li>
            <li><a href="#assistant">AI Assistant</a></li>
            <li><a href="#showcase">Demos</a></li>
            <li><a href="#build">Build AI</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Community</h4>
          <ul>
            <li><a href="#">Discord</a></li>
            <li><a href="#">Forums</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Let's Connect!</h4>
          <p>hello@mindgrub.ai<br>
          Join our AI adventure<br>
          Made with ❤️ and 🤖</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 Mindgrub. Empowering creativity with AI.</p>
      </div>
    </div>
  `;

  footer.innerHTML = footerContent;
};

// Handle floating assistant
const initFloatingAssistant = () => {
  const bubble = document.querySelector('.ai-assistant-bubble');
  bubble.addEventListener('click', () => {
    alert('🤖 Hi! I would open a chat window here. Try the live chat section above for a demo!');
  });
};

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
  initCommon();
  initHero();
  initPlayground();
  initAssistant();
  initShowcase();
  initBuild();
  initChat();
  initFacts();
  initCTA();
  initFooter();
  initFloatingAssistant();
});