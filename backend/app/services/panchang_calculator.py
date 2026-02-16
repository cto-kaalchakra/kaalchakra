"""
Panchang Calculator Service
Calculates astrological timings using PySwissEph
"""
import swisseph as swe
from datetime import datetime, timedelta, date, time
import pytz
import logging

logger = logging.getLogger(__name__)


class PanchangCalculator:
    """Calculate Panchang (Hindu calendar) timings"""
    
    def __init__(self):
        """Initialize Swiss Ephemeris"""
        # Set ephemeris path (uses built-in ephemeris files)
        swe.set_ephe_path(None)
    
    def calculate_sunrise_sunset(
        self, 
        calc_date: date, 
        latitude: float, 
        longitude: float, 
        timezone_str: str
    ) -> tuple[datetime, datetime]:
        """
        Calculate sunrise and sunset times for a given location and date
        
        Args:
            calc_date: Date for calculation
            latitude: Latitude of location
            longitude: Longitude of location
            timezone_str: Timezone string (e.g., 'Asia/Kolkata')
            
        Returns:
            Tuple of (sunrise_datetime, sunset_datetime)
        """
        try:
            # Get timezone
            tz = pytz.timezone(timezone_str)
            
            # Create datetime at midnight in the given timezone
            dt = datetime.combine(calc_date, time(0, 0))
            dt_local = tz.localize(dt)
            
            # Convert to UTC for calculation
            dt_utc = dt_local.astimezone(pytz.UTC)
            
            # Calculate Julian Day
            jd = swe.julday(
                dt_utc.year, 
                dt_utc.month, 
                dt_utc.day, 
                dt_utc.hour + dt_utc.minute / 60.0
            )
            
            # CRITICAL FIX: geopos must be a sequence [longitude, latitude, altitude]
            geopos = [longitude, latitude, 0.0]  # altitude in meters
            
            # Calculate sunrise
            # rise_trans returns: (return_flag, tret, serr)
            # tret[0] contains the Julian day of the event
            sunrise_result = swe.rise_trans(
                jd,           # Julian day
                swe.SUN,      # Sun
                swe.CALC_RISE,  # Calculate rise
                geopos,       # Geographic position as sequence
                0.0,          # Atmospheric pressure (0 = standard)
                0.0           # Atmospheric temperature (0 = standard)
            )

            # Check if calculation was successful (return_flag >= 0)
            if sunrise_result[0] < 0:
                raise Exception(f"Sunrise calculation failed: {sunrise_result[2]}")

            sunrise_jd = sunrise_result[1][0]

            # Calculate sunset
            sunset_result = swe.rise_trans(
                jd,           # Julian day
                swe.SUN,      # Sun
                swe.CALC_SET,   # Calculate set
                geopos,       # Geographic position as sequence
                0.0,          # Atmospheric pressure
                0.0           # Atmospheric temperature
            )

            # Check if calculation was successful
            if sunset_result[0] < 0:
                raise Exception(f"Sunset calculation failed: {sunset_result[2]}")

            sunset_jd = sunset_result[1][0]
            
            # Convert Julian Day back to datetime
            sunrise_utc = self._jd_to_datetime(sunrise_jd)
            sunset_utc = self._jd_to_datetime(sunset_jd)
            
            # Convert to local timezone
            sunrise_local = sunrise_utc.replace(tzinfo=pytz.UTC).astimezone(tz)
            sunset_local = sunset_utc.replace(tzinfo=pytz.UTC).astimezone(tz)
            
            logger.info(f"Sunrise: {sunrise_local}, Sunset: {sunset_local}")
            
            return sunrise_local, sunset_local
            
        except Exception as e:
            logger.error(f"Error calculating sunrise/sunset: {e}")
            raise
    
    def _jd_to_datetime(self, jd: float) -> datetime:
        """Convert Julian Day to datetime"""
        result = swe.revjul(jd)
        year, month, day, hour = result
        
        hours = int(hour)
        minutes = int((hour - hours) * 60)
        seconds = int(((hour - hours) * 60 - minutes) * 60)
        
        return datetime(year, month, day, hours, minutes, seconds)
    
    def _calculate_period(
        self,
        sunrise: datetime,
        sunset: datetime,
        period_index: int
    ) -> tuple[datetime, datetime]:
        """
        Calculate a specific period of the day
        Day is divided into 8 equal periods from sunrise to sunset

        Args:
            sunrise: Sunrise time
            sunset: Sunset time
            period_index: Period number (0-7)

        Returns:
            Tuple of (start_time, end_time)
        """
        day_duration = sunset - sunrise
        period_duration = day_duration / 8

        start_time = sunrise + (period_duration * period_index)
        end_time = start_time + period_duration

        return start_time, end_time

    def calculate_rahu_kalam(
        self,
        calc_date: date,
        latitude: float,
        longitude: float,
        timezone_str: str
    ) -> tuple[datetime, datetime]:
        """
        Calculate Rahu Kalam (inauspicious period ruled by Rahu)
        Period varies by day of week
        """
        sunrise, sunset = self.calculate_sunrise_sunset(
            calc_date, latitude, longitude, timezone_str
        )

        # Rahu Kalam period index by day of week (0=Monday, 6=Sunday)
        weekday = calc_date.weekday()
        rahu_periods = {
            0: 1,  # Monday: 2nd period
            1: 6,  # Tuesday: 7th period
            2: 4,  # Wednesday: 5th period
            3: 3,  # Thursday: 4th period
            4: 5,  # Friday: 6th period
            5: 2,  # Saturday: 3rd period
            6: 4,  # Sunday: 5th period
        }

        period_index = rahu_periods[weekday]
        start, end = self._calculate_period(sunrise, sunset, period_index)

        logger.info(f"Rahu Kalam: {start.strftime('%H:%M')} - {end.strftime('%H:%M')}")
        return start, end

    def calculate_yamagandam(
        self,
        calc_date: date,
        latitude: float,
        longitude: float,
        timezone_str: str
    ) -> tuple[datetime, datetime]:
        """
        Calculate Yamagandam (inauspicious period ruled by Yama)
        Period varies by day of week
        """
        sunrise, sunset = self.calculate_sunrise_sunset(
            calc_date, latitude, longitude, timezone_str
        )

        # Yamagandam period index by day of week
        weekday = calc_date.weekday()
        yama_periods = {
            0: 4,  # Monday: 5th period
            1: 3,  # Tuesday: 4th period
            2: 2,  # Wednesday: 3rd period
            3: 1,  # Thursday: 2nd period
            4: 0,  # Friday: 1st period
            5: 5,  # Saturday: 6th period
            6: 6,  # Sunday: 7th period
        }

        period_index = yama_periods[weekday]
        start, end = self._calculate_period(sunrise, sunset, period_index)

        logger.info(f"Yamagandam: {start.strftime('%H:%M')} - {end.strftime('%H:%M')}")
        return start, end

    def calculate_gulika_kalam(
        self,
        calc_date: date,
        latitude: float,
        longitude: float,
        timezone_str: str
    ) -> tuple[datetime, datetime]:
        """
        Calculate Gulika Kalam (inauspicious period ruled by Saturn's son)
        Period varies by day of week
        """
        sunrise, sunset = self.calculate_sunrise_sunset(
            calc_date, latitude, longitude, timezone_str
        )

        # Gulika Kalam period index by day of week
        weekday = calc_date.weekday()
        gulika_periods = {
            0: 6,  # Monday: 7th period
            1: 5,  # Tuesday: 6th period
            2: 4,  # Wednesday: 5th period
            3: 3,  # Thursday: 4th period
            4: 2,  # Friday: 3rd period
            5: 1,  # Saturday: 2nd period
            6: 0,  # Sunday: 1st period
        }

        period_index = gulika_periods[weekday]
        start, end = self._calculate_period(sunrise, sunset, period_index)

        logger.info(f"Gulika Kalam: {start.strftime('%H:%M')} - {end.strftime('%H:%M')}")
        return start, end

    def calculate_abhijit_muhurat(
        self,
        calc_date: date,
        latitude: float,
        longitude: float,
        timezone_str: str
    ) -> tuple[datetime, datetime]:
        """
        Calculate Abhijit Muhurat (most auspicious period around midday)
        Approximately 48 minutes around solar noon
        """
        sunrise, sunset = self.calculate_sunrise_sunset(
            calc_date, latitude, longitude, timezone_str
        )

        # Calculate solar noon (midpoint between sunrise and sunset)
        solar_noon = sunrise + (sunset - sunrise) / 2

        # Abhijit Muhurat is approximately 48 minutes (24 minutes before and after noon)
        duration = timedelta(minutes=24)
        start = solar_noon - duration
        end = solar_noon + duration

        logger.info(f"Abhijit Muhurat: {start.strftime('%H:%M')} - {end.strftime('%H:%M')}")
        return start, end

    def calculate_lucky_time(
        self,
        calc_date: date,
        latitude: float,
        longitude: float,
        timezone_str: str,
        moon_sign: str = None
    ) -> tuple[datetime, datetime]:
        """
        Calculate personalized lucky time based on birth chart
        For now, using Yamagandam as a placeholder (will be enhanced with actual calculations)
        """
        # Simplified version - using Yamagandam period as lucky time
        # In a full implementation, this would consider:
        # - Birth chart (Lagna, Moon sign, Nakshatra)
        # - Current planetary transits
        # - Dasha periods
        start, end = self.calculate_yamagandam(calc_date, latitude, longitude, timezone_str)

        logger.info(f"Lucky Time: {start.strftime('%H:%M')} - {end.strftime('%H:%M')}")
        return start, end

