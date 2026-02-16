"""
Astrology Service
Generates personalized astrological predictions using Panchang calculations
"""
from datetime import date, datetime
from app.services.panchang_calculator import PanchangCalculator
from app.models.customer_model import CustomerInDB
import logging

logger = logging.getLogger(__name__)


class AstrologyService:
    """Service for generating astrological predictions"""
    
    def __init__(self):
        self.panchang = PanchangCalculator()
    
    def generate_daily_prediction(self, customer: CustomerInDB) -> dict:
        """
        Generate daily astrological prediction for a customer
        
        Args:
            customer: Customer data with birth details
            
        Returns:
            Dictionary containing prediction data
        """
        try:
            logger.info(f"Generating prediction for customer: {customer.name}")
            
            # Use current location if available, otherwise use birth location
            latitude = customer.current_latitude or customer.birth_latitude
            longitude = customer.current_longitude or customer.birth_longitude
            timezone_str = customer.birth_timezone
            location = customer.current_location or customer.place_of_birth
            
            logger.info(f"Location: {location}, Lat: {latitude}, Lon: {longitude}, TZ: {timezone_str}")
            
            # Get today's date
            today = date.today()
            logger.info(f"Calculating for date: {today}")
            
            # Calculate all timings
            logger.info("Calculating Rahu Kalam...")
            rahu_start, rahu_end = self.panchang.calculate_rahu_kalam(
                today, latitude, longitude, timezone_str
            )
            
            logger.info("Calculating Yamagandam...")
            yama_start, yama_end = self.panchang.calculate_yamagandam(
                today, latitude, longitude, timezone_str
            )
            
            logger.info("Calculating Gulika Kalam...")
            gulika_start, gulika_end = self.panchang.calculate_gulika_kalam(
                today, latitude, longitude, timezone_str
            )
            
            logger.info("Calculating Abhijit Muhurat...")
            abhijit_start, abhijit_end = self.panchang.calculate_abhijit_muhurat(
                today, latitude, longitude, timezone_str
            )
            
            logger.info("Calculating Lucky Time...")
            lucky_start, lucky_end = self.panchang.calculate_lucky_time(
                today, latitude, longitude, timezone_str, customer.moon_sign
            )
            
            prediction = {
                "customer_name": customer.name,
                "date": today.isoformat(),
                "zodiac_sign": customer.zodiac_sign or "Unknown",
                "moon_sign": customer.moon_sign or "Unknown",
                "location": location,
                "rahu_kalam": {
                    "start": rahu_start.strftime("%H:%M"),
                    "end": rahu_end.strftime("%H:%M")
                },
                "yamagandam": {
                    "start": yama_start.strftime("%H:%M"),
                    "end": yama_end.strftime("%H:%M")
                },
                "gulika_kalam": {
                    "start": gulika_start.strftime("%H:%M"),
                    "end": gulika_end.strftime("%H:%M")
                },
                "abhijit_muhurat": {
                    "start": abhijit_start.strftime("%H:%M"),
                    "end": abhijit_end.strftime("%H:%M")
                },
                "lucky_time": {
                    "start": lucky_start.strftime("%H:%M"),
                    "end": lucky_end.strftime("%H:%M")
                }
            }
            
            logger.info(f"Prediction generated successfully: {prediction}")
            return prediction
            
        except Exception as e:
            logger.error(f"Error generating prediction: {e}", exc_info=True)
            # Return default values on error
            return {
                "customer_name": customer.name,
                "date": date.today().isoformat(),
                "zodiac_sign": customer.zodiac_sign or "Unknown",
                "moon_sign": customer.moon_sign or "Unknown",
                "location": customer.current_location or customer.place_of_birth,
                "rahu_kalam": {"start": "N/A", "end": "N/A"},
                "yamagandam": {"start": "N/A", "end": "N/A"},
                "gulika_kalam": {"start": "N/A", "end": "N/A"},
                "abhijit_muhurat": {"start": "N/A", "end": "N/A"},
                "lucky_time": {"start": "N/A", "end": "N/A"}
            }
    
    def format_whatsapp_message(self, prediction: dict) -> str:
        """
        Format prediction as WhatsApp message
        
        Args:
            prediction: Prediction dictionary
            
        Returns:
            Formatted message string
        """
        message = f"""🌙 Daily Astrology Prediction for {prediction['customer_name']}

📅 Date: {prediction['date']}
🌟 Your Sign: {prediction['zodiac_sign']} | Moon: {prediction['moon_sign']}

⚠️ AVOID These Times (Inauspicious):
🔴 Rahu Kalam: {prediction['rahu_kalam']['start']} - {prediction['rahu_kalam']['end']}
🔴 Yamagandam: {prediction['yamagandam']['start']} - {prediction['yamagandam']['end']}
🔴 Gulika Kalam: {prediction['gulika_kalam']['start']} - {prediction['gulika_kalam']['end']}

✅ BEST Times (Auspicious):
🟢 Abhijit Muhurat: {prediction['abhijit_muhurat']['start']} - {prediction['abhijit_muhurat']['end']}
🟢 Your Lucky Time: {prediction['lucky_time']['start']} - {prediction['lucky_time']['end']}

💡 Tip: Plan important activities during green times!

Have a blessed day! 🙏"""
        
        logger.info(f"WhatsApp message formatted:\n{message}")
        return message

