"""
WhatsApp Service using Twilio
"""
from twilio.rest import Client
from app.config.settings import settings
import logging

logger = logging.getLogger(__name__)


class WhatsAppService:
    """Service for sending WhatsApp messages via Twilio"""
    
    def __init__(self):
        """Initialize Twilio client"""
        if not settings.WHATSAPP_ENABLED:
            logger.warning("WhatsApp is disabled in settings")
            self.client = None
            return
        
        if not all([
            settings.TWILIO_ACCOUNT_SID,
            settings.TWILIO_AUTH_TOKEN,
            settings.TWILIO_WHATSAPP_NUMBER
        ]):
            logger.error("Twilio credentials not configured")
            self.client = None
            return
        
        try:
            self.client = Client(
                settings.TWILIO_ACCOUNT_SID,
                settings.TWILIO_AUTH_TOKEN
            )
            logger.info("Twilio WhatsApp client initialized successfully")
        except Exception as e:
            logger.error(f"Failed to initialize Twilio client: {e}")
            self.client = None
    
    def send_message(self, to_number: str, message: str) -> bool:
        """
        Send WhatsApp message to a phone number
        
        Args:
            to_number: Recipient phone number (with country code)
            message: Message text to send
            
        Returns:
            True if message sent successfully, False otherwise
        """
        if not self.client:
            logger.error("WhatsApp client not initialized")
            return False
        
        try:
            # Ensure phone number has whatsapp: prefix
            if not to_number.startswith("whatsapp:"):
                to_number = f"whatsapp:{to_number}"
            
            # Send message
            logger.info(f"Sending WhatsApp message to {to_number}")
            
            message_obj = self.client.messages.create(
                from_=settings.TWILIO_WHATSAPP_NUMBER,
                body=message,
                to=to_number
            )
            
            logger.info(f"Message sent successfully. SID: {message_obj.sid}")
            return True
            
        except Exception as e:
            logger.error(f"Failed to send WhatsApp message: {e}")
            return False
    
    def send_prediction(self, to_number: str, prediction_message: str) -> bool:
        """
        Send astrological prediction via WhatsApp
        
        Args:
            to_number: Recipient phone number
            prediction_message: Formatted prediction message
            
        Returns:
            True if sent successfully, False otherwise
        """
        # Add header to prediction
        full_message = f"🌙 Astro Guru - Daily Prediction\n\n{prediction_message}"
        
        return self.send_message(to_number, full_message)

