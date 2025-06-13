#!/bin/bash

echo "Starting Mindgrub AI Demo Email Server..."
echo "========================================"
echo ""
echo "This is a simplified version that logs emails to console"
echo "Perfect for demos - no SMTP configuration needed!"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install express cors body-parser
fi

# Run the simple server
node email-server-simple.js