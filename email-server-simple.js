// Simple Email Server for Demo - No SMTP Required
// Just logs emails to console for demonstration

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 2500;

// Middleware
app.use(cors({
    origin: ['http://localhost:8000', 'http://127.0.0.1:8000', 'file://'],
    methods: ['GET', 'POST'],
    credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Handle form submission
app.post('/api/schedule-demo', async (req, res) => {
    console.log('\n========================================');
    console.log('NEW DEMO REQUEST RECEIVED!');
    console.log('========================================');
    console.log('Time:', new Date().toLocaleString());
    
    const {
        first_name,
        last_name,
        email,
        company,
        role,
        preferred_date,
        preferred_time,
        message
    } = req.body;
    
    // Log the email that would be sent
    console.log('\n📧 EMAIL DETAILS:');
    console.log('To: howdy@edinfinite.com');
    console.log('From: demo@mindgrub.ai');
    console.log('Reply-To:', email);
    console.log('Subject: New Enterprise Demo Request - Mindgrub AI');
    
    console.log('\n👤 CONTACT INFORMATION:');
    console.log(`Name: ${first_name} ${last_name}`);
    console.log(`Email: ${email}`);
    console.log(`Company: ${company}`);
    console.log(`Role: ${role}`);
    
    console.log('\n📅 PREFERRED SCHEDULE:');
    console.log(`Date: ${preferred_date}`);
    console.log(`Time: ${preferred_time}`);
    
    console.log('\n💬 MESSAGE:');
    console.log(message || 'No additional message provided');
    
    console.log('\n========================================\n');
    
    // For a real implementation, you would send the email here
    // For demo, we just log it and return success
    
    try {
        // Simulate success
        res.json({
            success: true,
            message: 'Demo scheduled successfully!',
            messageId: `demo-${Date.now()}@mindgrub.local`
        });
        
        console.log('✅ Response sent: Success');
        
    } catch (error) {
        console.error('❌ Error:', error);
        res.status(500).json({
            success: false,
            message: 'Error scheduling demo. Please try again.'
        });
    }
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ 
        status: 'Email server running',
        port: PORT,
        mode: 'Demo mode (logging only)'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`\n🚀 Email Server (Demo Mode) running on http://localhost:${PORT}`);
    console.log(`📝 Form endpoint: http://localhost:${PORT}/api/schedule-demo`);
    console.log(`❤️  Health check: http://localhost:${PORT}/health`);
    console.log('\n📌 Note: This server logs emails to console instead of sending them.');
    console.log('Perfect for demos and testing!\n');
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\n👋 Shutting down email server...');
    process.exit(0);
});