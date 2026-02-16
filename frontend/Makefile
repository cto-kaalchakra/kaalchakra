.PHONY: help install dev build start clean test-connection

# Default target
help:
	@echo "🌙 Astrology Bot Frontend - Available Commands"
	@echo ""
	@echo "Setup & Installation:"
	@echo "  make install        - Install Node.js dependencies"
	@echo ""
	@echo "Running the Application:"
	@echo "  make dev            - Run development server (with hot reload)"
	@echo "  make build          - Build for production"
	@echo "  make start          - Start production server"
	@echo ""
	@echo "Testing:"
	@echo "  make test-connection - Test connection to backend API"
	@echo ""
	@echo "Utilities:"
	@echo "  make clean          - Clean node_modules and build files"
	@echo ""

# Install dependencies
install:
	@echo "📦 Installing Node.js dependencies..."
	@npm install
	@echo "✅ Dependencies installed successfully"

# Run development server
dev:
	@echo "🚀 Starting frontend development server..."
	@echo "📍 Frontend will be available at: http://localhost:3000"
	@echo "🔗 Backend API: http://localhost:8000"
	@echo ""
	@npm run dev

# Build for production
build:
	@echo "🏗️  Building for production..."
	@npm run build
	@echo "✅ Build complete"

# Start production server
start:
	@echo "🚀 Starting production server..."
	@npm run start

# Test connection to backend
test-connection:
	@echo "🔍 Testing connection to backend API..."
	@curl -s http://localhost:8000/health | python3 -m json.tool || echo "❌ Backend is not running. Start it with: cd ../backend && make dev"

# Clean build files and node_modules
clean:
	@echo "🧹 Cleaning build files..."
	@rm -rf .next
	@rm -rf node_modules
	@echo "✅ Clean complete"

