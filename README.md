# 🌙 Kaalchakra - Astrology Bot Platform

A full-stack astrology prediction platform that delivers personalized daily predictions via WhatsApp using authentic Panchang calculations.

## ✨ Features

- **Personalized Panchang Calculations**: Accurate astrological timings based on user's location and birth details
- **WhatsApp Integration**: Automated daily predictions delivered via Twilio WhatsApp API
- **Real-time Calculations**: Uses PySwissEph for precise astronomical calculations
- **Modern Tech Stack**: FastAPI backend + Next.js frontend
- **Customer Management**: Store and manage customer birth details and preferences

## 📊 Predictions Provided

### Inauspicious Times (Avoid)
- 🔴 **Rahu Kalam** - Inauspicious period ruled by Rahu
- 🔴 **Yamagandam** - Inauspicious period ruled by Yama
- 🔴 **Gulika Kalam** - Inauspicious period ruled by Saturn's son

### Auspicious Times (Best for Important Activities)
- 🟢 **Abhijit Muhurat** - Most auspicious period around midday
- 🟢 **Personalized Lucky Time** - Based on individual birth chart

## 🏗️ Architecture

```
kaalchakra/
├── backend/          # FastAPI Python backend
│   ├── app/
│   │   ├── config/           # Configuration settings
│   │   ├── database/         # MongoDB connection
│   │   ├── models/           # Data models
│   │   ├── routes/           # API endpoints
│   │   ├── services/         # Business logic
│   │   │   ├── panchang_calculator.py  # Core Panchang calculations
│   │   │   └── astrology_service.py    # Prediction generation
│   │   └── integrations/     # External services (Twilio)
│   ├── requirements.txt
│   └── Makefile
│
└── frontend/         # Next.js React frontend
    ├── app/
    │   ├── page.tsx          # Registration form
    │   ├── about/            # About page
    │   ├── contact/          # Contact page
    │   ├── privacy/          # Privacy policy
    │   └── terms/            # Terms of service
    └── package.json
```

## 🚀 Quick Start

### Prerequisites

- Python 3.13+
- Node.js 18+
- MongoDB
- Twilio Account (for WhatsApp)

### Backend Setup

```bash
cd backend

# Install dependencies
make install

# Copy environment variables
cp .env.example .env

# Edit .env and add your Twilio credentials
# TWILIO_ACCOUNT_SID=your_account_sid
# TWILIO_AUTH_TOKEN=your_auth_token

# Run the server
make dev
```

Backend will be available at: http://localhost:8000

### Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Run development server
npm run dev
```

Frontend will be available at: http://localhost:3000

## 🔧 Configuration

### Backend Environment Variables

Create a `backend/.env` file with:

```env
# Application Settings
APP_NAME=Astrology Bot API
APP_VERSION=1.0.0
DEBUG=True

# MongoDB
MONGODB_URL=mongodb://localhost:27017
MONGODB_DB_NAME=astrobot

# Twilio WhatsApp
WHATSAPP_ENABLED=True
TWILIO_ACCOUNT_SID=your_account_sid_here
TWILIO_AUTH_TOKEN=your_auth_token_here
TWILIO_WHATSAPP_NUMBER=whatsapp:+14155238886
```

## 📡 API Endpoints

### Customer Management
- `POST /customers/` - Register new customer
- `GET /customers/` - List all customers
- `GET /customers/{id}` - Get customer details

### WhatsApp Predictions
- `POST /whatsapp/send/{customer_id}` - Send prediction to customer

### Health Check
- `GET /health` - Check API and database status

## 🧮 Panchang Calculation Details

The platform uses **PySwissEph** (Swiss Ephemeris) for astronomical calculations:

1. **Sunrise/Sunset Calculation**: Based on user's geographic location
2. **Day Division**: Divides day into 8 equal periods
3. **Weekday-based Periods**: Different inauspicious periods for each weekday
4. **Timezone Handling**: All calculations in user's local timezone

## 🛠️ Technology Stack

### Backend
- **FastAPI** - Modern Python web framework
- **PySwissEph** - Swiss Ephemeris for astronomical calculations
- **PyMongo** - MongoDB driver
- **Twilio** - WhatsApp messaging
- **Pydantic v2** - Data validation
- **Geopy** - Geocoding for location coordinates

### Frontend
- **Next.js 16** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **Axios** - HTTP client

### Database
- **MongoDB** - NoSQL database for customer data

## 📱 WhatsApp Setup

To receive WhatsApp messages in development:

1. Go to [Twilio Console](https://console.twilio.com/us1/develop/sms/try-it-out/whatsapp-learn)
2. Note your sandbox join code
3. Send the join code to `+1 415 523 8886` on WhatsApp
4. You'll receive a confirmation message
5. Now you can receive predictions!

## 🧪 Testing

```bash
# Test backend health
curl http://localhost:8000/health

# Send test prediction
curl -X POST "http://localhost:8000/whatsapp/send/{customer_id}"
```

## 📝 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or support, please contact the development team.

---

Built with ❤️ by the Kaalchakra Team
# kaalchakra
