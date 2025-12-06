#!/bin/bash

echo "🚀 Starting Jyoshika's Portfolio with Backend..."
echo ""

# Start backend server in background
echo "📧 Starting backend server..."
node server.js &
BACKEND_PID=$!

# Wait a moment for backend to start
sleep 2

# Start React frontend
echo "🌐 Starting React frontend..."
npm start &
FRONTEND_PID=$!

echo ""
echo "✅ Servers started successfully!"
echo "📍 Frontend: http://localhost:3000"
echo "🔧 Backend API: http://localhost:5000"
echo ""
echo "Press Ctrl+C to stop both servers"

# Function to cleanup on exit
cleanup() {
    echo ""
    echo "🛑 Stopping servers..."
    kill $BACKEND_PID 2>/dev/null
    kill $FRONTEND_PID 2>/dev/null
    exit 0
}

# Set trap to cleanup on script exit
trap cleanup SIGINT

# Wait for user to press Ctrl+C
wait