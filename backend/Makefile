.PHONY: install run dev clean test

# Python version
PYTHON := python3.13

# Virtual environment
VENV := venv
VENV_BIN := $(VENV)/bin

# Install dependencies
install:
	@echo "Creating virtual environment..."
	$(PYTHON) -m venv $(VENV)
	@echo "Installing dependencies..."
	$(VENV_BIN)/pip install --upgrade pip
	$(VENV_BIN)/pip install -r requirements.txt
	@echo "✅ Installation complete!"

# Run the server in production mode
run:
	@echo "Starting MongoDB..."
	@brew services start mongodb-community 2>/dev/null || mongod --fork --logpath /tmp/mongodb.log --dbpath ./data 2>/dev/null || echo "MongoDB already running"
	@echo "Starting FastAPI server..."
	$(VENV_BIN)/uvicorn app.main:app --host 0.0.0.0 --port 8000

# Run the server in development mode with auto-reload
dev:
	@echo "Starting MongoDB..."
	@brew services start mongodb-community 2>/dev/null || mongod --fork --logpath /tmp/mongodb.log --dbpath ./data 2>/dev/null || echo "MongoDB already running"
	@echo "Starting FastAPI server in development mode..."
	$(VENV_BIN)/uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload

# Clean up
clean:
	@echo "Cleaning up..."
	rm -rf $(VENV)
	find . -type d -name "__pycache__" -exec rm -rf {} + 2>/dev/null || true
	find . -type f -name "*.pyc" -delete 2>/dev/null || true
	@echo "✅ Cleanup complete!"

# Run tests (placeholder for future)
test:
	@echo "Running tests..."
	$(VENV_BIN)/pytest tests/ -v

