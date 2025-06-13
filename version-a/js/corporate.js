// Version A - Corporate Professional JavaScript

document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initMobileMenu();
    initScheduleModal();
    initFormHandler();
});

// Smooth scrolling for anchor links
const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80; // Account for fixed header
                const targetPosition = target.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
};

// Mobile menu toggle
const initMobileMenu = () => {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (toggle && navLinks) {
        toggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            toggle.classList.toggle('active');
        });
    }
};

// Schedule Modal Handler
const initScheduleModal = () => {
    // Initialize time slot selection
    initTimeSlots();
    const modal = document.getElementById('schedule-modal');
    const closeBtn = document.querySelector('.modal-close');
    
    // Get all buttons that should open the modal
    const scheduleBtns = document.querySelectorAll(
        'a[href="#contact"], a[href="#demo"], .btn-primary[href*="contact"], .btn-primary[href*="demo"]'
    );
    
    // Open modal when clicking schedule buttons
    scheduleBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
        });
    });
    
    // Close modal when clicking close button
    closeBtn?.addEventListener('click', closeModal);
    
    // Close modal when clicking outside
    modal?.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal?.classList.contains('active')) {
            closeModal();
        }
    });
    
    function openModal() {
        modal?.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Set minimum date to today
        const dateInput = document.getElementById('date');
        if (dateInput) {
            const today = new Date().toISOString().split('T')[0];
            dateInput.setAttribute('min', today);
        }
    }
    
    function closeModal() {
        modal?.classList.remove('active');
        document.body.style.overflow = '';
    }
};

// Form Handler with Email Integration
const initFormHandler = () => {
    const form = document.getElementById('demo-form');
    
    if (form) {
        // Replace with your Formspree endpoint
        // Sign up at https://formspree.io to get your form ID
        // For now, using a placeholder that will need to be replaced
        form.action = 'https://formspree.io/f/YOUR_FORM_ID';
        
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = form.querySelector('button[type="submit"]');
            const loader = submitBtn.querySelector('.btn-loader');
            const btnText = submitBtn.textContent;
            
            // Show loading state
            submitBtn.disabled = true;
            loader.style.display = 'inline-block';
            submitBtn.textContent = 'Scheduling...';
            
            // Collect form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Format the email content
            const emailBody = `
New Enterprise Demo Request

Contact Information:
- Name: ${data.first_name} ${data.last_name}
- Email: ${data.email}
- Company: ${data.company}
- Role: ${data.role}

Preferred Schedule:
- Date: ${data.preferred_date}
- Time: ${data.preferred_time}

Message:
${data.message || 'No additional message provided'}

---
Submitted from Mindgrub AI Website
            `;
            
            // For demonstration, we'll simulate form submission
            // In production, this would submit to Formspree or your email service
            try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 2000));
                
                // Show success message
                form.innerHTML = `
                    <div class="form-success">
                        <div class="success-icon">✓</div>
                        <h3>Demo Scheduled Successfully!</h3>
                        <p>We've sent a confirmation to ${data.email}</p>
                        <p>Our team will reach out within 24 hours to confirm your demo.</p>
                        <button class="btn btn-outline" onclick="location.reload()">Schedule Another Demo</button>
                    </div>
                `;
                
                // Log for testing (remove in production)
                console.log('Form data:', data);
                console.log('Email body:', emailBody);
                
            } catch (error) {
                // Reset button state
                submitBtn.disabled = false;
                loader.style.display = 'none';
                submitBtn.textContent = btnText;
                
                // Show error message
                alert('There was an error scheduling your demo. Please try again or contact us directly.');
            }
        });
    }
};

// Add success message styles
const style = document.createElement('style');
style.textContent = `
    .form-success {
        text-align: center;
        padding: 40px 0;
    }
    
    .success-icon {
        width: 80px;
        height: 80px;
        background: linear-gradient(135deg, var(--primary-purple) 0%, var(--primary-orange) 100%);
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 40px;
        margin: 0 auto 24px;
    }
    
    .form-success h3 {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 16px;
        color: var(--gray-900);
    }
    
    .form-success p {
        color: var(--gray-600);
        margin-bottom: 16px;
    }
    
    .form-success .btn {
        margin-top: 24px;
    }
    
    @media (max-width: 768px) {
        .form-grid {
            grid-template-columns: 1fr;
        }
        
        .modal-content {
            padding: 32px 24px;
        }
    }
`;
document.head.appendChild(style);

// Time slot selection handler
const initTimeSlots = () => {
    const timeSlots = document.querySelectorAll('.time-slot');
    
    timeSlots.forEach(slot => {
        slot.addEventListener('click', () => {
            // Remove selected class from all slots
            timeSlots.forEach(s => s.classList.remove('selected'));
            // Add selected class to clicked slot
            slot.classList.add('selected');
            // Check the radio input
            const radio = slot.querySelector('input[type="radio"]');
            if (radio) radio.checked = true;
        });
    });
    
    // Set today + 1 as minimum date
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const tomorrowStr = tomorrow.toISOString().split('T')[0];
        dateInput.setAttribute('min', tomorrowStr);
        
        // Update the hint text
        const hint = document.querySelector('label[for="date"] .label-hint');
        if (hint) {
            const options = { weekday: 'long', month: 'short', day: 'numeric' };
            hint.textContent = `Next available: ${tomorrow.toLocaleDateString('en-US', options)}`;
        }
    }
};