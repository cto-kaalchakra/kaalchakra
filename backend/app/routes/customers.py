"""
Customer API Routes
"""
from fastapi import APIRouter, HTTPException, status
from app.models.customer_model import CustomerCreate, CustomerResponse, CustomerInDB
from app.database.mongo import get_database
from bson import ObjectId
from datetime import datetime
from geopy.geocoders import Nominatim
import logging

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/customers", tags=["customers"])

# Initialize geocoder
geolocator = Nominatim(user_agent="astrobot")

# Simple timezone mapping for Indian cities
TIMEZONE_MAP = {
    "india": "Asia/Kolkata",
    "mumbai": "Asia/Kolkata",
    "delhi": "Asia/Kolkata",
    "bangalore": "Asia/Kolkata",
    "chennai": "Asia/Kolkata",
    "kolkata": "Asia/Kolkata",
    "kochi": "Asia/Kolkata",
    "hyderabad": "Asia/Kolkata",
    "pune": "Asia/Kolkata",
    "ahmedabad": "Asia/Kolkata",
}

def get_timezone_for_location(location_name: str) -> str:
    """Get timezone for a location (simplified version)"""
    location_lower = location_name.lower()
    for key, tz in TIMEZONE_MAP.items():
        if key in location_lower:
            return tz
    # Default to Asia/Kolkata for Indian locations
    return "Asia/Kolkata"


@router.post("/", response_model=CustomerResponse, status_code=status.HTTP_201_CREATED)
async def create_customer(customer: CustomerCreate):
    """Create a new customer with birth details"""
    try:
        db = get_database()
        
        # Geocode birth place to get coordinates
        logger.info(f"Geocoding birth place: {customer.place_of_birth}")
        location = geolocator.geocode(customer.place_of_birth)
        
        if not location:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=f"Could not find location: {customer.place_of_birth}"
            )
        
        birth_latitude = location.latitude
        birth_longitude = location.longitude

        # Get timezone for birth location
        birth_timezone = get_timezone_for_location(customer.place_of_birth)
        
        logger.info(f"Birth location: {birth_latitude}, {birth_longitude}, TZ: {birth_timezone}")
        
        # Handle current location if provided
        current_latitude = None
        current_longitude = None
        
        if customer.current_location:
            logger.info(f"Geocoding current location: {customer.current_location}")
            current_loc = geolocator.geocode(customer.current_location)
            if current_loc:
                current_latitude = current_loc.latitude
                current_longitude = current_loc.longitude
        
        # Create customer document
        customer_dict = customer.model_dump()
        customer_dict.update({
            "birth_latitude": birth_latitude,
            "birth_longitude": birth_longitude,
            "birth_timezone": birth_timezone,
            "current_latitude": current_latitude,
            "current_longitude": current_longitude,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        })
        
        # Insert into database
        result = db.customers.insert_one(customer_dict)
        
        # Fetch the created customer
        created_customer = db.customers.find_one({"_id": result.inserted_id})
        
        # Convert to response model
        created_customer["_id"] = str(created_customer["_id"])
        
        logger.info(f"Customer created successfully: {created_customer['_id']}")
        
        return CustomerResponse(**created_customer)
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error creating customer: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to create customer: {str(e)}"
        )


@router.get("/{customer_id}", response_model=CustomerResponse)
async def get_customer(customer_id: str):
    """Get customer by ID"""
    try:
        db = get_database()
        
        # Validate ObjectId
        if not ObjectId.is_valid(customer_id):
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Invalid customer ID format"
            )
        
        # Find customer
        customer = db.customers.find_one({"_id": ObjectId(customer_id)})
        
        if not customer:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Customer not found"
            )
        
        # Convert ObjectId to string
        customer["_id"] = str(customer["_id"])
        
        return CustomerResponse(**customer)
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error fetching customer: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to fetch customer: {str(e)}"
        )


@router.get("/", response_model=list[CustomerResponse])
async def list_customers():
    """List all customers"""
    try:
        db = get_database()
        
        customers = list(db.customers.find().limit(100))
        
        # Convert ObjectIds to strings
        for customer in customers:
            customer["_id"] = str(customer["_id"])
        
        return [CustomerResponse(**c) for c in customers]
        
    except Exception as e:
        logger.error(f"Error listing customers: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to list customers: {str(e)}"
        )

